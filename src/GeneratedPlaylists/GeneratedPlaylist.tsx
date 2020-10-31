import React, { Component } from 'react'
import { CleanedAlbumTrack } from '../utils'
import { getPlaylist } from '../apiCalls'

interface IProps { selectedGenre: string }
interface IState { songs: CleanedAlbumTrack[] }

class GeneratedPlaylist extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      songs: [],
    }
  }

  componentDidMount = () => {
    getPlaylist(this.props.selectedGenre)
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