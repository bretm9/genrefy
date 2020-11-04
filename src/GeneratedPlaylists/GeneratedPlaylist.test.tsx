import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GeneratedPlaylist from './GeneratedPlaylist';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


describe('GeneratedPlaylist', () => {
  const mockToggleSaved = jest.fn()
  const playlist1 = {
    id: 0,
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
  const selectedGenre = 'military western ska'
  beforeEach(() =>
		render(
      <MemoryRouter>
        <GeneratedPlaylist playlistIndex={0} selectedGenre={selectedGenre} playlist={playlist1} toggleSaved={mockToggleSaved}/>
      </MemoryRouter>
		)
  );
  test('should render a generated playlist', () => {
    expect(screen.getByText('Smoke Two')).toBeInTheDocument();
    expect(screen.getByText('Forward March')).toBeInTheDocument();
  });
  test('should default a generated playlist to be unsaved', () => {
    expect(screen.getByAltText('Save playlist')).toBeInTheDocument()
  })
  test('should allow a user to save playlist', () => {
    userEvent.click(screen.getByAltText('Save playlist'))
    expect(mockToggleSaved).toHaveBeenCalledWith(playlist1)
  })
  test('should have saved icon with a saved playlist', () => {
    render(
      <MemoryRouter>
        <GeneratedPlaylist playlistIndex={0} selectedGenre={selectedGenre} playlist={playlist2} toggleSaved={mockToggleSaved}/>
      </MemoryRouter>
		)
    expect(screen.getByAltText('Unsave playlist')).toBeInTheDocument()
  })
});