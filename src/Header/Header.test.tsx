import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  })
  test('should render the header', () => {
    expect(screen.getByText('Genrefy')).toBeInTheDocument();
  })
  test('should have link to the Saved view', () => {
    expect(screen.getByText('View Saved')).toHaveAttribute('href', '/saved')
  })
  test('should have a logo that links to the homepage', () => {
    expect(screen.getByAltText('Genrefy').closest('a')).toHaveAttribute('href', '/')
  })
})