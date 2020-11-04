import React from 'react';
import { Playlist } from '../utils/utils';

import savedPlaylist from '../images/saved-playlist.png';
import unSavedPlaylist from '../images/unsaved-playlist.png';

import './PlaylistDetails.scss';

const savedPlaylistAlt = 'Save playlist';
const unSavedplaylistAlt = 'Unsave playlist';

interface IProps { playlist: any, toggleSaved: (playlist: Playlist) => void; }

const displaySongs = (playlist: Playlist) => {
  return playlist.tracks.reduce((finalSongs: JSX.Element[], currentSong, index: number): JSX.Element[] => {
      const songToDisplay = 
        <section key={index} className='playlist-details-body'>
          <h3 className='artist-name'>{currentSong.songName}</h3>
          <h3>By: {currentSong.artist.name}</h3>
          <article className="playlist-details-url">
            <a data-testid={`song-url-${index}`} target='_blank' rel='noreferrer' href={currentSong.songUrl}>View song on Last FM</a>
            <a data-testid={`artist-url-${index}`}target='_blank' rel='noreferrer' href={currentSong.artist.artistUrl}>View artist on Last FM</a>
          </article>
        </section>
      finalSongs.push(songToDisplay)
    return finalSongs
  }, [])
}

const PlaylistDetails = (props: IProps) => {
  return (
    <section className="playlist-details">
      <article className='playlist-details-head'>
        <h1 className='playlist-name'>{props.playlist.name}</h1>
				<img
					src={props.playlist.isSaved ? savedPlaylist : unSavedPlaylist}
					className='save'
					alt={props.playlist.isSaved ? unSavedplaylistAlt : savedPlaylistAlt}
					onClick={() => props.toggleSaved(props.playlist)}
				/>
			</article>
      {displaySongs(props.playlist)}
    </section>
  )
}

export default PlaylistDetails;