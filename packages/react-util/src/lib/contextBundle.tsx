import React from 'react';

export type ContextBundleOptions<ContextProps extends object> = {
  defaultValue?: ContextProps;
  displayName?: string;
};

export type ContextBundle<ContextProps extends object> = {
  Context: React.Context<ContextProps>;
  ContextProvider: React.FC<React.PropsWithChildren<ContextProps>>;
  ContextConsumer: React.Consumer<ContextProps>;
  useContext: () => ContextProps;
};

/**
 * Builds a context bundle that includes a context, context provider, and useContext hook.
 *
 * @param options
 * @returns
 */
export function buildContextBundle<ContextProps extends object>(
  options?: ContextBundleOptions<ContextProps>
): ContextBundle<ContextProps> {
  const Context = React.createContext<ContextProps>(
    options?.defaultValue as unknown as ContextProps
  );

  if (options?.displayName) {
    Context.displayName = options.displayName;
  }

  function ContextProvider(props: React.PropsWithChildren<ContextProps>) {
    const { children, ...rest } = props;
    const value: ContextProps = React.useMemo(
      () => rest as ContextProps,
      [rest]
    );
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContext() {
    const contextValue = React.useContext(Context);
    if (!contextValue) {
      throw new Error(
        `No${
          options?.displayName ? ` ${options?.displayName}` : ''
        } Provider found when calling useContext.`
      );
    }
    return contextValue;
  }

  return {
    Context,
    ContextProvider,
    useContext,
    ContextConsumer: Context.Consumer,
  };
}
