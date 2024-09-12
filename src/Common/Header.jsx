import React from 'react'
import './Header.css'
import {Link, } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to ={'/'}  className='link'>Home</Link></li>
          <li><Link  to = {'/about'}  className='link'> About</Link></li>
          <li><Link to = {'/contact us' } className='link'> Contact US</Link></li>
        </ul>
      </nav>
    </div>
  )
}
