import React from 'react';

import './Genre.scss';

interface IProps {
	updateSelectedGenre: (genre: string) => void;
	genre: string;
}

function Genre(props: IProps) {
	return (
		<section className='genre'>
			<button 
				type='button'
				onClick={event =>
					props.updateSelectedGenre(event.currentTarget.innerHTML)
				}>
				{props.genre}
			</button>
		</section>
	);
}

export default Genre;
