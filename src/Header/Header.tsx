import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className='header'>
      <h1>Header</h1>
      <Link to='/saved'>View Saved</Link>
    </section>
  )
}

export default Header;