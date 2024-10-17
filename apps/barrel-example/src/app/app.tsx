import { UserContextProvider } from '@kratz/security';
import { ConnectedWelcome } from './ConnectedWelcome';

export function App() {
  return (
    <UserContextProvider
      user={{ email: 'test@test.com', username: 'testuser' }}
    >
      <div>
        <ConnectedWelcome />
      </div>
    </UserContextProvider>
  );
}

export default App;
