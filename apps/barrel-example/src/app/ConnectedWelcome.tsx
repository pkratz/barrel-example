import { useUserContext } from '@kratz/security';
import { Welcome } from './Welcome';

export function ConnectedWelcome() {
  const { user } = useUserContext();
  return <Welcome name={user?.username ?? ''} />;
}
