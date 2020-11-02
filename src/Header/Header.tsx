import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

import logo from '../images/genrefy-logo.png';

function Header() {
  return (
    <section className='header'>
      <article className='logo-container'>
        <Link to='/'><img className='logo' src={logo} alt="Genrefy"/></Link>
        <h1>Genrefy</h1>
      </article>
      <Link to='/saved-playlists'><h1>Saved Playlist</h1></Link>
    </section>
  )
}

export default Header;