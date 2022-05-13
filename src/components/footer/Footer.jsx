import React from 'react'
import './footer.css'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Pedro</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/pedro.ogg/"><FiInstagram/></a>
        <a href="https://www.youtube.com/"><AiOutlineYoutube/></a>
        <a href="whttps://www.whatsapp.com/?lang=pt_b"><BsWhatsapp/></a>
    
      </div>
      <div className="footer__copyright">
        <small>&copy; Pedro Henrique do Divino. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}
