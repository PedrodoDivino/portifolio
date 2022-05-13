import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target={'_blank'}><BsLinkedin/></a>
        <a href="https://github.com" target={'_blank'}><FiGithub/></a>
        <a href="https://Instagram.com" target={'_blank'}><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocial