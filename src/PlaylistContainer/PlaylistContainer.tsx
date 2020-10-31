import React from 'react';
import SavedPlaylist from '../SavedPlaylists/SavedPlaylist';
import GeneratedPlaylist from '../GeneratedPlaylists/GeneratedPlaylist';
// import CustomPlaylist from '../CustomPlaylists/CustomPlaylist';

enum PlaylistTypes {
	SavedPlaylist = 'saved-playlist',
	GeneratedPlaylist = 'generated-playlist',
	// CustomPlaylist = 'custom-playlist',
}

function PlaylistContainer(props: any) {
	const displayPlaylist = (playlistType: PlaylistTypes) => {
		if (playlistType === PlaylistTypes.SavedPlaylist) {
			return <SavedPlaylist />;
		}
		if (playlistType === PlaylistTypes.GeneratedPlaylist) {
			return <GeneratedPlaylist selectedGenre={props.selectedGenre}/>;
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
