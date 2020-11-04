import React from 'react';

import GeneratedPlaylist from '../GeneratedPlaylists/GeneratedPlaylist';

import { Playlist } from '../utils';

import './PlaylistContainer.scss';

interface IProps {
	selectedGenre: string,
	playlists: Playlist[] | [],
	toggleSaved: (playlist: Playlist) => void
}

const displayPlaylist = (playlists: any, selectedGenre: string, toggleSavedPlaylist: (playlist: Playlist) => void) => {
	if (playlists.length) {
		return playlists.map((playlist: Playlist, index: number) => {
			return <GeneratedPlaylist key={index} playlistIndex={index} selectedGenre={selectedGenre} playlist={playlist} toggleSaved={toggleSavedPlaylist} />
		})
	} else {
		return <h1 className='add-playlist'>Add a playlist!</h1>
	}
};

function PlaylistContainer(props: IProps) {
	return (
		<section className='playlist-container'>
			{displayPlaylist(props.playlists, props.selectedGenre, props.toggleSaved)}
		</section>
	);
}

export default PlaylistContainer;
