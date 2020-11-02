export interface AlbumTrack {
  "@attr": {
    rank: string
  },
  artist: {
    name: string,
    mbid: string,
    url: string,
  }
  duration: string,
  image: object[],
  mbid: string,
  name: string,
  streamable: {
    "#text": string,
    fulltrack: string
  }
  url: string
}

export interface CleanedAlbumTrack {
  mbid: string,
  artist: {
    name: string,
    artistUrl: string
  },
  duration: string,
  songName: string,
  songUrl: string,
}

// export interface Playlist {
//   id: number,
//   name: string,
//   isSaved: boolean,
//   tracks: CleanedAlbumTrack[]
// }

export const cleanGenreTrackData = (track: AlbumTrack): CleanedAlbumTrack => {
  return {
    mbid: track.mbid,
    artist: {
      name: track.artist.name,
      artistUrl: track.artist.url
    },
    duration: track.duration,
    songName: track.name,
    songUrl: track.url
  }
}

export const randomizeSongs = (playlist: Playlist) => {
  const newSongsArray = [];
  const iteration: number = playlist.tracks.length;
  for (let i = 0; i < iteration; i++) {
    let getRandomIndex = Math.floor(Math.random() * playlist.tracks.length);
    newSongsArray.push(playlist.tracks.splice(getRandomIndex, 1)[0])
  }
  return newSongsArray;
}