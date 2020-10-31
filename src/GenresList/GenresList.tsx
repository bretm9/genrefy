import React from 'react'

import Genre from '../Genre/Genre'

interface IProps {setAppGenre: (genre: string) => void, genres: string[], selectedGenre: string}

function GenresList(props: IProps) {  
  const updateSelectedGenre = (genre: string) => {
    props.setAppGenre(genre)
  }
  
  const renderGenres = () => {
    return props.genres.map((genre: string, i: number) => {
      return (
        <Genre key={i} updateSelectedGenre={updateSelectedGenre} genre={genre} />
      )
    })
  }

  return (
    <section>
      {renderGenres()}
    </section>
  )
}

export default GenresList;