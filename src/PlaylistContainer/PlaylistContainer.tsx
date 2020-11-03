import React from 'react';
import SavedPlaylist from '../SavedPlaylists/SavedPlaylist';
import GeneratedPlaylist from '../GeneratedPlaylists/GeneratedPlaylist';
// import CustomPlaylist from '../CustomPlaylists/CustomPlaylist';

import { Playlist } from '../utils';

interface IProps {
	selectedGenre: string,
	playlists: Playlist[] | [],
	toggleSaved: (playlist: Playlist) => void
}

const displayPlaylist = (playlists: any, selectedGenre: string, toggleSavedPlaylist: (playlist: Playlist) => void) => {
	if (playlists.length) {
		return playlists.map((playlist: Playlist, index: number) => {
			return <GeneratedPlaylist key={index} selectedGenre={selectedGenre} playlist={playlist} toggleSaved={toggleSavedPlaylist} />
		})
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
