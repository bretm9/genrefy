import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import PlaylistDetails from './PlaylistDetails';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('PlaylistDetails', () => {
  const mockToggleSaved = jest.fn()
  const playlist1 = {
    id: 1,
    name: 'military western ska',
    isSaved: false,
    tracks: [
      {
        "mbid": "e2bad905-75a4-499d-bdea-2e916d73ad76",
        "artist": {
          "name": "Sublime",
          "artistUrl": "https://www.last.fm/music/Sublime"
        },
        "duration": "208",
        "songName": "Smoke Two",
        "songUrl": "https://www.last.fm/music/Sublime/_/Smoke+Two+Joints"
      },
      {
        "mbid": "86906b91-fdbd-4407-bcf1-6105f42525e5",
        "artist": {
          "name": "Pat Metheny Group",
          "artistUrl": "https://www.last.fm/music/Pat+Metheny+Group"
        },
        "duration": "167",
        "songName": "Forward March",
        "songUrl": "https://www.last.fm/music/Pat+Metheny+Group/_/Forward+March"
      }
    ]
  }
  const playlist2 = {
    id: 1,
    name: 'military western ska',
    isSaved: true,
    tracks: [
      {
        "mbid": "e2bad905-75a4-499d-bdea-2e916d73ad76",
        "artist": {
          "name": "Test artist",
          "artistUrl": "https://www.last.fm/music/Sublime"
        },
        "duration": "208",
        "songName": "Test song",
        "songUrl": "https://www.last.fm/music/Sublime/_/Smoke+Two+Joints"
      }
    ]
  }
  beforeEach(() =>
		render(
      <MemoryRouter>
        <PlaylistDetails playlist={playlist1} toggleSaved={mockToggleSaved}/>
      </MemoryRouter>
		)
  );
  test('should render a playlist', () => {
    expect(screen.getByText('Smoke Two')).toBeInTheDocument();
    expect(screen.getByText('Forward March')).toBeInTheDocument();
  });
  test('should render links to song and artist pages', () => {
    expect(screen.getByTestId('song-url-0').closest('a')).toHaveAttribute('href', 'https://www.last.fm/music/Sublime/_/Smoke+Two+Joints');
    expect(screen.getByTestId('artist-url-0').closest('a')).toHaveAttribute('href', 'https://www.last.fm/music/Sublime');
  });
  test('should allow a user to save playlist', () => {
    userEvent.click(screen.getByAltText('Save playlist'))
    expect(mockToggleSaved).toHaveBeenCalledWith(playlist1)
  });
  test('should have saved icon with a saved playlist', () => {
    render(
      <MemoryRouter>
        <PlaylistDetails playlist={playlist2} toggleSaved={mockToggleSaved}/>
      </MemoryRouter>
		)
    expect(screen.getByAltText('Unsave playlist')).toBeInTheDocument()
  });
});