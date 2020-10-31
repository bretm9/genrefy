import React, { Component } from 'react'
import { getGenres } from '../apiCalls'

import Genre from '../Genre/Genre'

// come back and properly type setAppGenre
interface IProps {setAppGenre: (genre: string) => void}
interface IState { genres: string[] }

class GenreList extends Component<IProps, IState> {  
  constructor(props: any) {
    super(props)
    this.state = {
      genres: []
    }
  }

  componentDidMount() {
    this.setGenres()
  }

  setGenres = () => {
    getGenres()
    .then(data => this.setState({ genres: data}))
  }

  updateSelectedGenre = (genre: string) => {
    this.props.setAppGenre(genre)
  }

  renderGenres = () => {
    return this.state.genres.map((genre, i) => {
      return (
        <Genre key={i} updateSelectedGenre={this.updateSelectedGenre} genre={genre} />
      )
    })
  }

  render() {
    return (
      <section>
        {this.renderGenres()}
      </section>
    )
  }
}

export default GenreList;