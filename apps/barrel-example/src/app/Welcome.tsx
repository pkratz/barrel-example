import { Typography } from '@kratz/core-ui';

type WelcomeProps = {
  name: string;
};

export function Welcome(props: WelcomeProps) {
  return <Typography>Welcome, {props.name}</Typography>;
}
