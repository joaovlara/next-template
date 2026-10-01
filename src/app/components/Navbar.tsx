import React from 'react'
import { navigation } from '../data/data'
import { NavbarMobile } from './Navbar/NavbarMobile'
import { NavbarDesktop } from './Navbar/NavbarDesktop'

const Navbar = () => {
  return (
    <header>
      <NavbarMobile />
      <NavbarDesktop />
    </header>
  )
}

export default Navbar