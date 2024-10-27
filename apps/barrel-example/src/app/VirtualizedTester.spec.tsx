import { render } from '@testing-library/react';
import { VirtualizedTester } from './VirtualizedTester';

describe('VirtualizedTester', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VirtualizedTester />);
    expect(baseElement).toBeTruthy();
  });
});
