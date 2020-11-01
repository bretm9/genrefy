import { cleanGenreTrackData, CleanedAlbumTrack, AlbumTrack, randomizeSongs } from './utils'

const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=`;

export const getGenres = () => {
  return (
    fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/25')
      .then(response => response.json()) 
  )
}

export const getPlaylist = (genreArray: string[]) => {
  return (
    Promise.all(
      genreArray.map(genre => {
        return fetch(`${apiUrl}${genre}&api_key=${process.env.REACT_APP_LASTFM_APIKEY}&limit=100&format=json`)
          .then(response => response.json())
      })
    )
    .then(data => {
      const combinedPlaylist: CleanedAlbumTrack[] = data.flatMap(playlist => {
        return playlist.tracks.track.map((song: AlbumTrack) => {
          return cleanGenreTrackData(song);
        });
      });
      const randomPlaylist = randomizeSongs(combinedPlaylist);
      return randomPlaylist.filter((_playlist, index) => index < 15);
    })
  )
}