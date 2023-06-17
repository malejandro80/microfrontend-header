import { render } from '@testing-library/react';
import { Example } from '../Example';

describe('Root component', () => {
  it('should be in the document', () => {
    const { getByText } = render(<Example />);
    expect(getByText(/Hello World/i)).toBeInTheDocument();
  });
});
