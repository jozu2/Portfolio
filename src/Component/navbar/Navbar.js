import React from 'react';
// import {GiHamburgerMenu} from 'react-icons/gi';
import './NavbarStyle.scss';
import { useState } from 'react';
const Navbar = () => {



const [nav, setNav] = useState(false)
const handleNav = () => setNav(!nav)



  return (
 
      <>
        <div className={nav ? 'container active' : 'container shrink'}></div>
        <div className="bg"></div>
    <div className="background">
         <div class={nav ? 'menu-btn open' : 'menu-btn'} onClick={handleNav}>

    <div class="menu-btn__burger"></div>
     </div>
     </div>
     <ul className={nav ? 'menu active' : 'menu'}>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        

      </>
 
  )
}

export default Navbar