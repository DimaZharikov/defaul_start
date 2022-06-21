import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('application should be defined', () => {
    const application = render(<App />);
    expect(application).toBeDefined();
  });
});
