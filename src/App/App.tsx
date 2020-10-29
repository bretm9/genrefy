import React, { Component } from 'react';
import './App.scss';
import { Link, Route, NavLink} from 'react-router-dom';

import Header from '../Header/Header';
import GenresList from '../GenresList/GenresList';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

class App extends Component<{}> {
	constructor(props: any) {
		super(props)
		this.state = {
			genres: [],
			playlists: []
		}
	}
	
	render () {
		return (
			<div className='App'>
				<h1>Genrefy</h1>
				<Header />
				<Route exact path='/' render={() => {
					return (
						<section className="testing">
							<GenresList />
							<PlaylistContainer playlistType={'custom-playlist'} /> {/* Custom Playlist */}
							<PlaylistContainer playlistType={'generated-playlist'} /> {/* Generated Playlist */}
						</section>
					)
				}} />
				<Route path='/saved-playlist' render={() => <PlaylistContainer playlistType={'saved-playlist'} />} />
			</div>
		)
	}
}

export default App;
