import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import GenresList from '../GenresList/GenresList';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';
import PlaylistDetails from '../PlaylistDetails/PlaylistDetails'

import { getPlaylist, getGenres } from '../apiCalls';

import { Playlist } from '../utils';

interface IProps { }
interface IState {
	genres: [],
	playlists: Playlist[] | [],
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
			.then(data => this.setState({ genres: data }))
	}

	setAppGenre = (genre: string) => {
		this.setState({ selectedGenre: genre });
		const splitGenreArray = this.parseGenreForFetch(genre);
		getPlaylist(splitGenreArray)
			.then(data => this.setState({ playlists: [...this.state.playlists, data] }));
	}

	parseGenreForFetch = (genre: string) => {
		const fillerWordsToRemove = /(the |and |of |\/| |ism)+/;
		const parseGenreArray = genre.split(fillerWordsToRemove);
		if (parseGenreArray.includes('')) {
			const index = parseGenreArray.indexOf('');
			parseGenreArray.splice(index, 1);
		}
		parseGenreArray.forEach((genre, index) => {
			if (genre.match(fillerWordsToRemove) || genre === '') {
				parseGenreArray.splice(index, 1);
			}
		});
		return parseGenreArray;
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Route exact path='/' render={() => {
					return (
						<section className="testing">
							<GenresList setAppGenre={this.setAppGenre} genres={this.state.genres} />
							<PlaylistContainer playlistType={'generated-playlist'} selectedGenre={this.state.selectedGenre} playlists={this.state.playlists} />
							{/* <PlaylistContainer playlistType={'custom-playlist'} /> */}
						</section>
					)
				}} />
				<Route 
					path='/saved-playlist'
					render={() => <PlaylistContainer
						playlistType={'saved-playlist'}
						selectedGenre={this.state.selectedGenre}
						playlists={this.state.playlists} 
					/>} 
				/>
				<Route 
					path='/playlist/:id' 
					render={({ match }) => {
						const playlistId: number = +match.params.id;
						const foundPlaylist: Playlist | undefined = this.state.playlists.find(playlist => {
							return playlist.id === playlistId
						});
						return (
							<PlaylistDetails
								playlist={foundPlaylist} 
							/>
						);
					}}
				/>
			</div>
		)
	}
}

export default App;
