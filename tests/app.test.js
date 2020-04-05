import App from '../src/App.svelte';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';

test('should render Hello World', async () => {
  const { getByText } = render(App, { name: 'World' });

  expect(getByText('Hello World!')).toBeInTheDocument();
});

test('should render Hello Nigel', async () => {
  const { getByText } = render(App, { name: 'Nigel' });

  expect(getByText('Hello Nigel!')).toBeInTheDocument();
});
