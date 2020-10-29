interface AlbumTrack {
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