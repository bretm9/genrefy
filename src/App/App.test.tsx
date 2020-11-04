import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import { Playlist } from '../utils'
import { getGenres, getPlaylist } from '../apiCalls'
import App from './App';

jest.mock('../apiCalls')



describe('App', () => {
  let mockGenres: string[], mockPlaylist1: Playlist, mockPlaylist2: Playlist
  beforeEach(() => {
    mockGenres= [
      'new orleans brass',
      'nerdcore',
      'kindermotown',
      'military western ska',
      'music-genre-that-does-not-exist'
    ]
    
    mockPlaylist1 = {
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
          "songName": "Smoke Two",
          "songUrl": "https://www.last.fm/music/Sublime/_/Smoke+Two+Joints"
        },
        {
          "mbid": "86906b91-fdbd-4407-bcf1-6105f42525e5",
          "artist": {
            "name": "Pat Metheny Group",
            "artistUrl": "https://www.last.fm/music/Pat+Metheny+Group"
          },
          "songName": "Forward March",
          "songUrl": "https://www.last.fm/music/Pat+Metheny+Group/_/Forward+March"
        }
      ]
    }
    
    mockPlaylist2 = {
      id: 1,
      name: 'music-genre-that-does-not-exist',
      isSaved: false,
      tracks: []
    }
  })
  
  test('should render Header to the page', () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Genrefy')).toBeInTheDocument();
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

  test('should render generated playlist to the page', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    (getPlaylist as jest.Mock).mockResolvedValue(mockPlaylist1);
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

  test('should display error if no songs are found for a generated playlist', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    (getPlaylist as jest.Mock).mockResolvedValue(mockPlaylist2);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const genreToClick: HTMLElement = await waitFor(() => screen.getByText('music-genre-that-does-not-exist'))
    userEvent.click(screen.getByText(genreToClick.innerHTML))
    const error = await waitFor(() => screen.getByText('This genre didn\'t find any songs!'))
    expect(error).toBeInTheDocument()
  })

  test('switching to the saved view should remove the generated genres from the screen', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const genreNotToClick: HTMLElement = await waitFor(() => screen.getByText('military western ska'))
    userEvent.click(screen.getByText('View Saved'))
    expect(genreNotToClick).not.toBeInTheDocument();
  });

  test('should be able to switch to the saved view and see that no playlists have been added', () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText('View Saved'))
    expect(screen.getByText('Add a playlist!')).toBeInTheDocument();
  });

  test('should be able to save a playlist and view it in the saved route', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    (getPlaylist as jest.Mock).mockResolvedValue(mockPlaylist1);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const genreToClick: HTMLElement = await waitFor(() => screen.getByText('military western ska'))
    userEvent.click(screen.getByText(genreToClick.innerHTML))
    const starToClick = await waitFor(() => screen.getByTestId('playlist-star-0'))
    userEvent.click(starToClick)
    userEvent.click(screen.getByText('View Saved'))
    const playlistToCheck: HTMLElement = await waitFor(() => screen.getByRole('link', { name: 'military western ska' }))
    expect(playlistToCheck).toBeInTheDocument();
  });

  test('should be able to remove a saved a playlist while in the saved route and see it disappear', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    (getPlaylist as jest.Mock).mockResolvedValue(mockPlaylist1);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const genreToClick: HTMLElement = await waitFor(() => screen.getByText('military western ska'))
    userEvent.click(screen.getByText(genreToClick.innerHTML))
    const firstStarToClick = await waitFor(() => screen.getByTestId('playlist-star-0'))
    userEvent.click(firstStarToClick)
    userEvent.click(screen.getByText('View Saved'))
    const secondStarToClick = await waitFor(() => screen.getByTestId('playlist-star-0'))
    userEvent.click(secondStarToClick)
    expect(screen.getByText('Add a playlist!')).toBeInTheDocument();
  });

  test('should be able to navigate to playlist details page after creating a playlist', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    (getPlaylist as jest.Mock).mockResolvedValue(mockPlaylist1);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const genreToClick: HTMLElement = await waitFor(() => screen.getByText('military western ska'))
    userEvent.click(screen.getByText(genreToClick.innerHTML))
    const playlistGenre: HTMLElement = await waitFor(() => screen.getByRole('link', { name: 'military western ska' }))
    userEvent.click(playlistGenre)
    expect(screen.getAllByText('View song on Last FM')[0]).toBeInTheDocument()
    expect(screen.getAllByText('View artist on Last FM')[0]).toBeInTheDocument()
  });

  test('should be able to star a in playlist details page', async () => {
    (getGenres as jest.Mock).mockResolvedValue(mockGenres);
    (getPlaylist as jest.Mock).mockResolvedValue(mockPlaylist1);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const genreToClick: HTMLElement = await waitFor(() => screen.getByText('military western ska'))
    userEvent.click(screen.getByText(genreToClick.innerHTML))
    const playlistGenre: HTMLElement = await waitFor(() => screen.getByRole('link', { name: 'military western ska' }))
    userEvent.click(playlistGenre)
    const starToClick = await waitFor(() => screen.getByAltText('Save playlist'))
    userEvent.click(starToClick)
    userEvent.click(screen.getByText('View Saved'))
    expect(screen.getByText('military western ska')).toBeInTheDocument()
  });
});