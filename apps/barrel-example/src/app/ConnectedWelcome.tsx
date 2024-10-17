import { useUserContext } from '@kratz/security';
import { Typography } from '@kratz/core-ui';

export function Welcome() {
  const { user } = useUserContext();
  return <Typography>Welcome, {user?.username}</Typography>;
}
