import { render } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('Welcome', () => {
  it('should display the user name', () => {
    const { getByText } = render(<Welcome name="John" />);
    expect(getByText('Welcome, John')).toBeInTheDocument();
  });
});
