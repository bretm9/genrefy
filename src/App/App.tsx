import React, { Component } from 'react';
import './App.scss';
import { Link, Route, NavLink} from 'react-router-dom';

import Header from '../Header/Header';
import SavedPlaylist from '../SavedPlaylists/SavedPlaylist';

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
				<Route exact path='/' render={() => <SavedPlaylist />} />
				<Route path='/saved-playlist' render={() => <SavedPlaylist />} />
			</div>
		)
	}
}

export default App;
