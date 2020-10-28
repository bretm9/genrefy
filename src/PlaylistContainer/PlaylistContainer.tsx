import React from 'react'

const displayPlaylist = (playlistType: string) => {
  if (playlistType === 'saved-playlist') {
    return <h1>Saved Playlist</h1>
  }
  if (playlistType === 'generated-playlist') {
    return <h1>Generated Playlist</h1>
  }
  if (playlistType === 'custom-playlist') {
    return <h1>Custom Playlist</h1>
  }
}

function PlaylistContainer(props: any) {
  return (
    <section className='playlist-container'>
      { displayPlaylist(props.playlistType) }
    </section>
  )
}

export default PlaylistContainer;