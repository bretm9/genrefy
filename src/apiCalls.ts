import { cleanGenreTrackData, CleanedAlbumTrack, AlbumTrack, randomizeSongs } from './utils'

export const getGenres = () => {
  return (
    fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/25')
      .then(response => response.json()) 
  )
}

export const getPlaylist = (genre: string) => {
  return (
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&api_key=${process.env.REACT_APP_LASTFM_APIKEY}&limit=300&format=json`)
      .then(response => response.json())
      .then(data => {
        const CleanedGenreTrackData: CleanedAlbumTrack[] = data.tracks.track.map((song: AlbumTrack)  => {
          return cleanGenreTrackData(song)
        })
        const randomPlaylist = randomizeSongs(CleanedGenreTrackData);
        return randomPlaylist.filter((_playlist, index) => index < 10);
      })
  )
}