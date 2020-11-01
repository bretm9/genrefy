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
		</section>
	);
}

export default Genre;
