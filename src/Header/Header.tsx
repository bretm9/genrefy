import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

function Header() {
  return (
    <section className='header'>
      <Link to='/'><article className="logo"></article></Link>
      <Link to='/saved-playlists'><h1>Saved Playlist</h1></Link>
    </section>
  )
}

export default Header;