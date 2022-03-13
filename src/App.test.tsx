import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
	it('should be able to render the Hello World text', () => {
		const { getByText } = render(<App />);

		const container = getByText('Hello World');
		expect(container).toBeTruthy();
	});
});
