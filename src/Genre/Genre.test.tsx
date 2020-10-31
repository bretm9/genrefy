import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Genre from './Genre';

const mockSelectedGenre = jest.fn();

describe('Genre', () => {
	beforeEach(() =>
		render(
			<Genre updateSelectedGenre={mockSelectedGenre} genre={'jesus funk'} />
		)
	);
	test('should render a genre to the screen', () => {
		expect(screen.getByText('jesus funk')).toBeInTheDocument();
	});

	test('should render another genre', () => {
		render(
			<Genre updateSelectedGenre={mockSelectedGenre} genre={'kraut mallet'} />
		);
		expect(screen.getByText('kraut mallet')).toBeInTheDocument();
	});
});
