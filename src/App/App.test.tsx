import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import { CleanedAlbumTrack } from '../utils'
import { getGenres, getPlaylist } from '../apiCalls'
import App from './App';

jest.mock('../apiCalls')

const mockGenres: string[] = [
  'new orleans brass',
  'nerdcore',
  'kindermotown',
  'military western ska'
]

const mockPlaylist: CleanedAlbumTrack[] = [
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

describe('App', () => {
  test('should render Header to the page', () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  test('should render genres to the page', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const genreTitle1 = await waitFor(() => screen.getByText('new orleans brass'))
    expect(genreTitle1).toBeInTheDocument();
    expect(screen.getByText('nerdcore')).toBeInTheDocument();
    expect(screen.getByText('kindermotown')).toBeInTheDocument();
  });

  test('should render genres to the page', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    (getPlaylist as jest.Mock).mockResolvedValue(mockPlaylist);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const genreToClick: HTMLElement = await waitFor(() => screen.getByText('military western ska'))
    userEvent.click(screen.getByText(genreToClick.innerHTML))
    const playlistTitle1 = await waitFor(() => screen.getByText('Forward March'))
    expect(playlistTitle1).toBeInTheDocument();
  });
});