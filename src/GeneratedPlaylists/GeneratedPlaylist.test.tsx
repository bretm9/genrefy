import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GeneratedPlaylist from './GeneratedPlaylist';


describe('GeneratedPlaylist', () => {
  const playlist = [
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
  const selectedGenre = 'military western ska'
  beforeEach(() =>
		render(
      <GeneratedPlaylist selectedGenre={selectedGenre} playlist={playlist} />
		)
  );
  test('should render a generated playlist', () => {
    expect(screen.getByText('Smoke Two')).toBeInTheDocument();
    expect(screen.getByText('Forward March')).toBeInTheDocument();
	});
});