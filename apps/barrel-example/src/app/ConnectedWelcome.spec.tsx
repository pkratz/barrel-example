import { UserContextProvider } from '@kratz/security';
import { ConnectedWelcome } from './ConnectedWelcome';
import { render } from '@testing-library/react';

describe('Welcome', () => {
  it('should display the user name', () => {
    const { getByText } = render(<ConnectedWelcome />, {
      wrapper: (props: React.PropsWithChildren) => (
        <UserContextProvider
          user={{ username: 'John', email: 'test@test.com' }}
        >
          {props.children}
        </UserContextProvider>
      ),
    });
    expect(getByText('Welcome, John')).toBeInTheDocument();
  });
});
