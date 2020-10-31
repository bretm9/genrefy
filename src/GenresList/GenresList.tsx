import React, { Component } from 'react'
import { getGenres } from '../apiCalls'

// come back and properly type setAppGenre
interface IProps {setAppGenre: (genre: string) => void}
interface IState { genres: string[] }

class Genre extends Component<IProps, IState> {  
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

  updateSelectedGenre = (event: React.MouseEvent<HTMLHeadingElement>) => {
    this.props.setAppGenre(event.currentTarget.innerHTML)
  }

  renderGenres = () => {
    return this.state.genres.map((genre, i) => {
      return (
          <h3 key={i} onClick={this.updateSelectedGenre}>{genre}</h3>
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

export default Genre;