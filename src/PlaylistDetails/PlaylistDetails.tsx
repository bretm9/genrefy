import React from 'react';
import { Link } from 'react-router-dom';
import { Playlist } from '../utils';

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
          <section className="artist-left">
            <h3>{currentSong.songName}</h3>
            <h3>{currentSong.artist.name}</h3>
          </section>
          <section className="artist-right">
            <a data-testid={`song-url-${index}`} target='_blank' rel='noreferrer' href={currentSong.songUrl}>View song on Last FM</a>
            <a data-testid={`artist-url-${index}`}target='_blank' rel='noreferrer' href={currentSong.artist.artistUrl}>View Artist on Last FM</a>
          </section>
        </section>;
      finalSongs.push(songToDisplay)
    return finalSongs
  }, [])
}

const PlaylistDetails = (props: IProps) => {
  return (
    <section className="playlist-details">
      <article className='playlist-details-head'>
				<Link to={`/playlist/${props.playlist.id}`}>{props.playlist.name}</Link>
				<img
					src={props.playlist.isSaved ? savedPlaylist : unSavedPlaylist}
					className='save'
					alt={props.playlist.isSaved ? unSavedplaylistAlt : savedPlaylistAlt}
					onClick={() => props.toggleSaved(props.playlist)}
				/>
			</article>
      <h1>{props.playlist.name}</h1>
      {displaySongs(props.playlist)}
    </section>
  )
}

export default PlaylistDetails;