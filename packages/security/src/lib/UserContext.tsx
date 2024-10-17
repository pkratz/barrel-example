import { buildContextBundle } from '@kratz/react-util';

export type User = {
  username: string;
  email: string;
};
export type UserContext = {
  user?: User;
};

export const {
  ContextProvider: UserContextProvider,
  useContext: useUserContext,
} = buildContextBundle<UserContext>({
  defaultValue: {},
  displayName: 'UserContext',
});
