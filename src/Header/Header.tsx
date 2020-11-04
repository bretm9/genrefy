import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

import logo from '../images/genrefy-logo.png';

function Header() {
  return (
    <section className='header'>
      <article className='logo-container'>
        <Link to='/'><img className='logo' src={logo} alt="Genrefy"/></Link>
        <Link to='/'><h1>Genrefy</h1></Link>
      </article>
      <Link to='/saved' className='view-saved'>View Saved</Link>
    </section>
  )
}

export default Header;