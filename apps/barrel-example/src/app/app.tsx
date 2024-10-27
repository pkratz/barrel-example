import { UserContextProvider } from '@kratz/security';
import { ConnectedWelcome } from './ConnectedWelcome';
import { Provider } from '@kratz/redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: (state) => state });
export function App() {
  return (
    <Provider store={store}>
      <UserContextProvider
        user={{ email: 'test@test.com', username: 'testuser' }}
      >
        <div>
          <ConnectedWelcome />
        </div>
      </UserContextProvider>
    </Provider>
  );
}

export default App;
