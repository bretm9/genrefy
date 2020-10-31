import React, { Component } from 'react'
import { CleanedAlbumTrack } from '../utils'
import { getPlaylist } from '../apiCalls'

interface IProps {}
interface IState { songs: CleanedAlbumTrack[],  selectedGenre: string }

class GeneratedPlaylist extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      songs: [],
      selectedGenre: ""
    }
  }

  componentDidMount = () => {
    getPlaylist(this.state.selectedGenre)
    .then(data => this.setState({ songs: data }));
  }

  displaySongs = () => {
    return this.state.songs.reduce((finalSongs: JSX.Element[], currentSong, index: number): JSX.Element[] => {
      if (index < 10) {
        const songToDisplay = 
          <section key={index}>
            <h3>{currentSong.songName}</h3>
          </section>;
        finalSongs.push(songToDisplay)
      }
      return finalSongs
    }, [])
  }

  render() {
    const songsToDisplay = this.displaySongs()
    return (
      <section className='generated-playlist'>
        {songsToDisplay}
      </section>
    )
  }
}

export default GeneratedPlaylist;