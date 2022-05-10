import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiBook2Line} from 'react-icons/ri'
import {FaRegHandshake} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

export const Nav = () => {
  const [activeNav,seTactiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> seTactiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> seTactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> seTactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Line /></a>
      <a href="#services" onClick={()=> seTactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaRegHandshake /></a>
      <a href="#contact" onClick={()=> seTactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}
