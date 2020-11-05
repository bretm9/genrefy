import React, { Component } from 'react';
import './App.scss';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import GenresList from '../GenresList/GenresList';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';
import PlaylistDetails from '../PlaylistDetails/PlaylistDetails';

import { getPlaylist, getGenres } from '../apiCalls';

import { Playlist } from '../utils/utils';

interface IProps {}
interface IState {
	genres: [];
	playlists: Playlist[] | [];
	selectedGenre: string;
	error: string
}

class App extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			genres: [],
			playlists: [],
			selectedGenre: '',
			error: ''
		};
	}

	componentDidMount = () => {
		getGenres().then(data => {
			if (data === 'error') {
				this.setState({ error: 'We were not able to fetch the genres. Refresh the page to try again.' });
			} else {
				this.setState({ genres: data, error: '' });
			}
		});
	};

	setAppGenre = (genre: string) => {
		this.setState({ selectedGenre: genre });
		const splitGenreArray = this.parseGenreForFetch(genre);
		getPlaylist(splitGenreArray).then(data => {
			if (data === 'error') {
				this.setState({ error: 'We were not able to fetch any playlist. Please refresh the page to try again.'})
			} else if (data.tracks.length) {
				this.setState({ playlists: [...this.state.playlists, data], error: "" })
			} else {
				this.setState({ error: "This genre didn't find any songs!" })
				setTimeout(() => {
					this.setState({ error: "" })
				}, 3000)
			}
		});
	};

	parseGenreForFetch = (genre: string) => {
		const fillerWordsToRemove = /(the |and |amp; |of |\/| |ism)+/;
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
	};

	toggleSavedPlaylist = (playlist: Playlist) => {
		playlist.isSaved = !playlist.isSaved;
		this.setState({ playlists: [...this.state.playlists] });
	};

	render() {
		return (
			<div className='App'>
				<Header />
				{this.state.error && <h1>{this.state.error}</h1>}
				<Switch>
					<Route
						exact
						path='/'
						render={() => {
							return (
								<section className='app-main'>
									<GenresList
										setAppGenre={this.setAppGenre}
										genres={this.state.genres}
									/>
									<PlaylistContainer
										selectedGenre={this.state.selectedGenre}
										playlists={this.state.playlists}
										toggleSaved={this.toggleSavedPlaylist}
									/>
								</section>
							);
						}}
					/>
					<Route
						path='/saved'
						render={() => {
							const savedPlaylists: Playlist[] | [] = this.state.playlists.filter(
								playlist => playlist.isSaved
							);
							return (
								<PlaylistContainer
									selectedGenre={this.state.selectedGenre}
									playlists={savedPlaylists}
									toggleSaved={this.toggleSavedPlaylist}
								/>
							);
						}}
					/>
					<Route
						path='/playlist/:id'
						render={({ match }) => {
							const playlistId: number = +match.params.id;
							const foundPlaylist: Playlist | undefined = this.state.playlists.find(playlist => {
								return playlist.id === playlistId;
							});
							if (foundPlaylist) {
								return <PlaylistDetails playlist={foundPlaylist} toggleSaved={this.toggleSavedPlaylist} />;
							} else {
								return <Redirect to="/" />
							}
						}}
					/>
					<Redirect to="/" />
				</Switch>
			</div>
		);
	}
}

export default App;
