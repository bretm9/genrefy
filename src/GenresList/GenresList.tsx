import React, { Component } from 'react'
import { getGenres } from '../apiCalls'

interface IProps {}
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

  renderGenres = () => {
    return this.state.genres.map((genre, i) => {
      return (
          <h3 key={i}>{genre}</h3>
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