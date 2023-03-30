import React, { useEffect, useState } from 'react'
import icons from '../../utils/icons'
import './Navbar.css'
import images from '../../constants/images'
const { GiHamburgerMenu, MdOutlineRestaurantMenu } = icons

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="" />
      </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'>
            <a href="#home">Home</a>
          </li>
          <li className='p__opensans'>
            <a href="#pages">Pages</a>
          </li>
          <li className='p__opensans'>
            <a href="#contact">Contact Us</a>
          </li>
          <li className='p__opensans'>
            <a href="#blog">Blog</a>
          </li>
          <li className='p__opensans'>
            <a href="#landing">Landing</a>
          </li>
        </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Login In/ Register</a>
        <div/>
        <a href="/" className='p__opensans'>Booking Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu &&  
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu size={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
              <ul className='app__navbar-smallscreen-links'>
                <li className='p__opensans'>
                  <a href="#home">Home</a>
                </li>
                <li className='p__opensans'>
                  <a href="#pages">Pages</a>
                </li>
                <li className='p__opensans'>
                  <a href="#contact">Contact Us</a>
                </li>
                <li className='p__opensans'>
                  <a href="#blog">Blog</a>
                </li>
                <li className='p__opensans'>
                  <a href="#landing">Landing</a>
                </li>
              </ul>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar
