import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PlaylistContainer from './PlaylistContainer';

describe('PlaylistContainer', () => {
  const playlistType = 'generated-playlist'
  const selectedGenre = 'military western ska'
  const playlists = [
    [
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
      },
    ],
    [
      {
        "mbid": "1240fc9a-6c21-4190-9a90-411e81b54c13",
        "artist": {
          "name": "Lily Allen",
          "artistUrl": "https://www.last.fm/music/Lily+Allen"
        },
        "duration": "252",
        "songName": "Shame for You",
        "songUrl": "https://www.last.fm/music/Lily+Allen/_/Shame+for+You"
      }
    ]
  ]
	beforeEach(() =>
		render(
      <PlaylistContainer 
        playlistType={playlistType}
        selectedGenre={selectedGenre} 
        playlists={playlists} />
		)
	);
	test('should render the genresList container to the screen', () => {
    expect(screen.getByText('Smoke Two')).toBeInTheDocument();
    expect(screen.getByText('Forward March')).toBeInTheDocument();
    expect(screen.getByText('Shame for You')).toBeInTheDocument();
	});
});
