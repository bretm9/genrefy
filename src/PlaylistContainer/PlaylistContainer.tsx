import React from 'react';
import SavedPlaylist from '../SavedPlaylists/SavedPlaylist';
import GeneratedPlaylist from '../GeneratedPlaylists/GeneratedPlaylist';
// import CustomPlaylist from '../CustomPlaylists/CustomPlaylist';

import { CleanedAlbumTrack } from '../utils';

interface IProps {
	playlistType: string,
	selectedGenre: string,
	playlists: [CleanedAlbumTrack[]] | []
}

enum PlaylistTypes {
	SavedPlaylist = 'saved-playlist',
	GeneratedPlaylist = 'generated-playlist',
	// CustomPlaylist = 'custom-playlist',
}

function PlaylistContainer(props: IProps) {
	const displayPlaylist = (playlistType: string) => {
		if (playlistType === PlaylistTypes.SavedPlaylist) {
			return <SavedPlaylist />;
		}
		if (playlistType === PlaylistTypes.GeneratedPlaylist && props.playlists.length) {
			return props.playlists.map((playlist: CleanedAlbumTrack[], index: number) => {
				return <GeneratedPlaylist key={index} selectedGenre={props.selectedGenre} playlist={playlist} />
			})
		}
		// if (playlistType === PlaylistTypes.CustomPlaylist) {
		// 	return <CustomPlaylist />;
		// }
	};

	return (
		<section className='playlist-container'>
			{displayPlaylist(props.playlistType)}
		</section>
	);
}

export default PlaylistContainer;
