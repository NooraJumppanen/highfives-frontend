import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "the app" text', () => {
	render(<App />);
	const text = screen.getByText(/the app/i);
	expect(text).toBeInTheDocument();
});
