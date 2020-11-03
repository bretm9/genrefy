import React from 'react';
import SavedPlaylist from '../SavedPlaylists/SavedPlaylist';
import GeneratedPlaylist from '../GeneratedPlaylists/GeneratedPlaylist';
// import CustomPlaylist from '../CustomPlaylists/CustomPlaylist';

import { Playlist } from '../utils';

interface IProps {
	playlistType: string,
	selectedGenre: string,
	playlists: Playlist[] | [],
	toggleSaved: (playlist: Playlist) => void
}

enum PlaylistTypes {
	SavedPlaylist = 'saved-playlist',
	GeneratedPlaylist = 'generated-playlist',
	// CustomPlaylist = 'custom-playlist',
}

const displayPlaylist = (playlistType: string, playlists: any, selectedGenre: string, toggleSavedPlaylist: (playlist: Playlist) => void) => {
	if (playlistType === PlaylistTypes.SavedPlaylist) {
		return <SavedPlaylist />;
	}
	if (playlistType === PlaylistTypes.GeneratedPlaylist && playlists.length) {
		return playlists.map((playlist: Playlist, index: number) => {
			return <GeneratedPlaylist key={index} selectedGenre={selectedGenre} playlist={playlist} toggleSaved={toggleSavedPlaylist} />
		})
	}
	// if (playlistType === PlaylistTypes.CustomPlaylist) {
	// 	return <CustomPlaylist />;
	// }
};

function PlaylistContainer(props: IProps) {
	return (
		<section className='playlist-container'>
			{displayPlaylist(props.playlistType, props.playlists, props.selectedGenre, props.toggleSaved)}
		</section>
	);
}

export default PlaylistContainer;
