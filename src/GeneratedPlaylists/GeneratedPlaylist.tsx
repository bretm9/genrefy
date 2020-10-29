import React from 'react'

import { getPlaylist } from '../apiCalls'

const getSongsByGenre = () => {
  // getPlaylist('hip+hop').then(data => console.log(data));
}

function GeneratedPlaylist() {
  console.log(getSongsByGenre());
  return (
    <section className='generated-playlist'>
    </section>
  )
}

export default GeneratedPlaylist;