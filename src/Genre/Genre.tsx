import React from 'react';

interface IProps {
	updateSelectedGenre: (genre: string) => void;
	genre: string;
}

function Genre(props: IProps) {
	return (
		<section className='genre'>
			<h1
				onClick={event =>
					props.updateSelectedGenre(event.currentTarget.innerHTML)
				}>
				{props.genre}
			</h1>
			<h6
				onClick={event =>
					props.updateSelectedGenre(event.currentTarget.innerHTML)
				}>
				Rock
			</h6>
		</section>
	);
}

export default Genre;
