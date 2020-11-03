import React from 'react';
import { Link } from 'react-router-dom';
import { Playlist } from '../utils';

import { ReactComponent as SavedPlaylist } from '../images/star-active.svg';
import { ReactComponent as UnsavedPlaylist } from '../images/star.svg';

import './GeneratedPlaylist.scss';

interface IProps { selectedGenre: string, playlist: Playlist, toggleSaved: (playlist: Playlist) => void }

const displaySongs = (playlist: Playlist) => {
  return playlist.tracks.reduce((finalSongs: JSX.Element[], currentSong, index: number): JSX.Element[] => {
      const songToDisplay = 
        <section key={index}>
          <h3>{currentSong.songName}</h3>
        </section>;
      finalSongs.push(songToDisplay)
    return finalSongs
  }, [])
}

const GeneratedPlaylist = (props: IProps) => {
  return (
    <section className="generated-playlist">
      <article className="generated-playlist-head">
        <Link to={`/playlist/${props.playlist.id}`}>{props.playlist.name}</Link>
        { props.playlist.isSaved ? 
            <SavedPlaylist className='save saved-playlist' onClick={() => props.toggleSaved(props.playlist)} /> : 
            <UnsavedPlaylist className='save unsaved-playlist' onClick={() => props.toggleSaved(props.playlist)} /> 
        }
      </article>
      {displaySongs(props.playlist)}
    </section>
  )
}

export default GeneratedPlaylist;