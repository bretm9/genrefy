import React from 'react'
import { Link } from 'react-router-dom';
import { Playlist } from '../utils';

interface IProps { playlist: any }

// const displaySongs = (playlist: Playlist) => {
//   return playlist.tracks.reduce((finalSongs: JSX.Element[], currentSong, index: number): JSX.Element[] => {
//       const songToDisplay = 
//         <section key={index}>
//           <h3>{currentSong.songName}</h3>
//           <h3>{currentSong.artist.name}</h3>
//           <a target='_blank' href={currentSong.songUrl}>View song on Last FM</a>
//           <a target='_blank' href={currentSong.artist.artistUrl}>View Artist on Last FM</a>
//         </section>;
//       finalSongs.push(songToDisplay)
//     return finalSongs
//   }, [])
// }

const PlaylistDetails = (props: IProps) => {
  console.log(props);
  return (
    <section className="generated-playlist">
      <h1>{props.playlist.name}</h1>
      {displaySongs(props.playlist)}
    </section>
  )
}

export default PlaylistDetails;