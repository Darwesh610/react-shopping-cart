import React from 'react'
import '../../css/Header/Header.css'
import { words } from '../../words'

function Header() {
  return (
    <>
    <nav className='nav-bar'>
    <h1>{words.headerTitle}</h1>
    </nav>
    </>
  )
}

export default Header