import React from 'react'
import { Playlist } from '../utils'

interface IProps { selectedGenre: string, playlist: Playlist }

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
      <h1>{props.playlist.name}</h1>
      {displaySongs(props.playlist)}
    </section>
  )
}

export default GeneratedPlaylist;