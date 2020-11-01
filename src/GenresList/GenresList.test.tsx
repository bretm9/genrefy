import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GenresList from './GenresList';

const mockSetAppGenre = jest.fn();

describe('GenresList', () => {
  const genres = [
    'jam dubstep',
    'demo indonesian ambient',
    'trumpet orchestral'
  ]
	beforeEach(() =>
		render(
			<GenresList setAppGenre={mockSetAppGenre} genres={genres} />
		)
	);
	test('should render the genresList container to the screen', () => {
    expect(screen.getByText('jam dubstep')).toBeInTheDocument();
    expect(screen.getByText('demo indonesian ambient')).toBeInTheDocument();
    expect(screen.getByText('trumpet orchestral')).toBeInTheDocument();
	});
});
