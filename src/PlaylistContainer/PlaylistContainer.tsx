import React from 'react';

import GeneratedPlaylist from '../GeneratedPlaylists/GeneratedPlaylist';

enum PlaylistTypes {
	SavedPlaylist = 'saved-playlist',
	GeneratedPlaylist = 'generated-playlist',
	CustomPlaylist = 'custom-playlist',
}

const displayPlaylist = (playlistType: PlaylistTypes) => {
	if (playlistType === PlaylistTypes.SavedPlaylist) {
		return <h1>Saved Playlist</h1>;
	}
	if (playlistType === PlaylistTypes.GeneratedPlaylist) {
		return <GeneratedPlaylist />;
	}
	if (playlistType === PlaylistTypes.CustomPlaylist) {
		return <h1>Custom Playlist</h1>;
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
