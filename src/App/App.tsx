import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import GenresList from '../GenresList/GenresList';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

import { getPlaylist, getGenres } from '../apiCalls';

import { CleanedAlbumTrack } from '../utils';

interface IProps {}
interface IState {
	genres: [],
	playlists: any,
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

	componentDidMount = () => {
		getGenres()
    .then(data => this.setState({ genres: data}))
	}

	setAppGenre = (genre: string) => {
		this.setState({ selectedGenre: genre })
		getPlaylist(this.state.selectedGenre)
		.then(data => this.setState({ playlists: [...this.state.playlists, [...data]] }));
	}
	
	render() {
		return (
			<div className='App'>
				<h1>Genrefy</h1>
				<Header />
				<Route exact path='/' render={() => {
					return (
						<section className="testing">
							<GenresList setAppGenre={this.setAppGenre} selectedGenre={this.state.selectedGenre} genres={this.state.genres} />
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
