import React from 'react';
import SavedPlaylist from '../SavedPlaylists/SavedPlaylist';
import GeneratedPlaylist from '../GeneratedPlaylists/GeneratedPlaylist';
import CustomPlaylist from '../CustomPlaylists/CustomPlaylist';

enum PlaylistTypes {
	SavedPlaylist = 'saved-playlist',
	GeneratedPlaylist = 'generated-playlist',
	CustomPlaylist = 'custom-playlist',
}

const displayPlaylist = (playlistType: PlaylistTypes) => {
	if (playlistType === PlaylistTypes.SavedPlaylist) {
		return <SavedPlaylist />;
	}
	if (playlistType === PlaylistTypes.GeneratedPlaylist) {
		return <GeneratedPlaylist />;
	}
	if (playlistType === PlaylistTypes.CustomPlaylist) {
		return <CustomPlaylist />;
	}
};

function PlaylistContainer(props: any) {
	return (
		<section className='playlist-container'>
			{displayPlaylist(props.playlistType)}
		</section>
	);
}

export default PlaylistContainer;
