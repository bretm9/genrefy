import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import GenresList from '../GenresList/GenresList';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

interface IProps {}
interface IState {
	genres: [],
	playlists: [],
	selectedGenre: string
}

class App extends Component<IProps, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			genres: [],
			playlists: [],
			selectedGenre: ""
		}
	}

	setAppGenre = (genre: string) => {
		this.setState({ selectedGenre: genre })
	}
	
	render() {
		return (
			<div className='App'>
				<h1>Genrefy</h1>
				<Header />
				<Route exact path='/' render={() => {
					return (
						<section className="testing">
							<GenresList setAppGenre={this.setAppGenre}/>
							<PlaylistContainer playlistType={'generated-playlist'} selectedGenre={this.state.selectedGenre}/>
							<PlaylistContainer playlistType={'custom-playlist'} />
						</section>
					)
				}} />
				<Route path='/saved-playlist' render={() => <PlaylistContainer playlistType={'saved-playlist'} />} />
			</div>
		)
	}
}

export default App;
