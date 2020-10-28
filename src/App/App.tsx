import React, { Component } from 'react';
import './App.scss';
import { Link, Route, NavLink} from 'react-router-dom';

import Header from '../Header/Header';
import SavedPlaylist from '../SavedPlaylists/SavedPlaylist';
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
							<PlaylistContainer /> {/* Saved Playlist */}
							<PlaylistContainer /> {/* Custom Playlist */}
							<PlaylistContainer /> {/* Generated Playlist */}
						</section>
					)
				}} />
				<Route path='/saved-playlist' render={() => <SavedPlaylist />} />
			</div>
		)
	}
}

export default App;
