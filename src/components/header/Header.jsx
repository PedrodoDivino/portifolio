import React from 'react'
import   CTA   from './CTA'
import eu from '../../assets/eu.jpg'
import HeaderSocial from './HeaderSocial'
export const Header = () => {
  return (
  <header>
    <div className="container header__container">
      <h5>Olá eu sou</h5>
      <h1>Pedro Henrique do Divino</h1>
      <h5 className="text-light">
      Desenvolvedor Front End </h5>
      <CTA />
      <HeaderSocial/>
      <div className="eu">
        <img src={eu} alt="" />
      </div>
      <a href="contact" className='scroll__down'>Role para baixo</a>
    </div>
  </header>
  )
}
