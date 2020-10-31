import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import GenresList from '../GenresList/GenresList';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

import { getPlaylist } from '../apiCalls';

import { CleanedAlbumTrack } from '../utils';

interface IProps {}
interface IState {
	genres: [],
	playlists: [CleanedAlbumTrack[]] | [],
	selectedGenre: string
}

class App extends Component<IProps, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			genres: [],
			playlists: [],
			selectedGenre: "hip hop"
		}
	}

	componentDidMount = () => {
		getPlaylist(this.state.selectedGenre)
		.then(data => this.setState({ playlists: [[...data]] }));
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
							<GenresList setAppGenre={this.setAppGenre} />
							<PlaylistContainer playlistType={'generated-playlist'} selectedGenre={this.state.selectedGenre} playlists={this.state.playlists} />
							{/* <PlaylistContainer playlistType={'custom-playlist'} /> */}
						</section>
					)
				}} />
				<Route path='/saved-playlist' render={() => <PlaylistContainer playlistType={'saved-playlist'} selectedGenre={this.state.selectedGenre} playlists={this.state.playlists} />} />
			</div>
		)
	}
}

export default App;
