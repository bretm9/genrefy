import React from 'react'

interface IProps {
  updateSelectedGenre: (genre: string) => void;
  genre: string;
}

function Genre(props: IProps) {
  console.log(props);
  return (
    <section className='genre'>
      <h1>{props.genre}</h1>
    </section>
  )
}

export default Genre;