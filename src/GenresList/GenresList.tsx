import React from 'react';

import Genre from '../Genre/Genre';

import './GenresList.scss'

interface IProps {setAppGenre: (genre: string) => void, genres: string[]}

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
    <section className='genre-list'>
      {renderGenres()}
    </section>
  )
}

export default GenresList;