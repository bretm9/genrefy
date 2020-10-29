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

