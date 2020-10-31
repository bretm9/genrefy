import React from 'react'
import { CleanedAlbumTrack } from '../utils'

interface IProps { selectedGenre: string, playlist: CleanedAlbumTrack[] }

const displaySongs = (playlist: CleanedAlbumTrack[]) => {
  return playlist.reduce((finalSongs: JSX.Element[], currentSong, index: number): JSX.Element[] => {
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
      {displaySongs(props.playlist)}
    </section>
  )
}

export default GeneratedPlaylist;