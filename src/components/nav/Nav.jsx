import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiBook2Line} from 'react-icons/ri'
import {FaRegHandshake} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'

export const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><RiBook2Line /></a>
      <a href="#services"><FaRegHandshake /></a>
      <a href="#contact"><AiOutlineMessage /></a>
    </nav>
  )
}
