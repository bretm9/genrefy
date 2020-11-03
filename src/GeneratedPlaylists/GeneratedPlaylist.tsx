import React from 'react';
import { Link } from 'react-router-dom';
import { Playlist } from '../utils';

import savedPlaylist from '../images/saved-playlist.png';
import unSavedPlaylist from '../images/unsaved-playlist.png';

import './GeneratedPlaylist.scss';

const savedPlaylistAlt = 'Save playlist';
const unSavedplaylistAlt = 'Unsave playlist';

interface IProps {
	selectedGenre: string;
	playlist: Playlist;
	toggleSaved: (playlist: Playlist) => void;
}

const displaySongs = (playlist: Playlist) => {
	return playlist.tracks.reduce(
		(finalSongs: JSX.Element[], currentSong, index: number): JSX.Element[] => {
			const songToDisplay = (
				<section key={index} className='playlist-body'>
					<h3>{currentSong.songName}</h3>
				</section>
			);
			finalSongs.push(songToDisplay);
			return finalSongs;
		},
		[]
	);
};

const GeneratedPlaylist = (props: IProps) => {
	return (
		<section className='generated-playlist'>
			<article className='generated-playlist-head'>
				<Link to={`/playlist/${props.playlist.id}`}>{props.playlist.name}</Link>
				<img
					src={props.playlist.isSaved ? savedPlaylist : unSavedPlaylist}
					className='save'
					alt={props.playlist.isSaved ? unSavedplaylistAlt : savedPlaylistAlt}
					onClick={() => props.toggleSaved(props.playlist)}
				/>
			</article>
			{displaySongs(props.playlist)}
		</section>
	);
};

export default GeneratedPlaylist;
