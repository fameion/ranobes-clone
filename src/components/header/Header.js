import React from 'react'
import './Header.css'
import {r, lock, theme, menu} from '../../assets/assets'

const Header = () => {
  return (
    <div className='Header'>
      <div className='logo-container-left logo'>
        <img src={r} alt='logo' className='logor logo' />
        <img src={lock} alt='logo' className='logo' />
        <img src={theme} alt='logo' className='logo' />
        
      </div>
      <div><img src={menu} alt='logo' className='logo' /></div>

    </div>
  )
}

export default Header
