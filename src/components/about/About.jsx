import React from 'react'
import './about.css'
import eu from '../../assets/eu.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id="about">

      <h5>Me conheça!</h5>
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="bout__me-image">
            <img src={eu}alt="" />
          </div>
        </div>

        <div className="about__content">
         <div className="about__cards">
           <article className="about__card">
           <FaAward className="about__icon"/>
             <h5>Experiência</h5>
             <small>9 meses</small>
           </article>
           <article className="about__card">
           <FiUsers className="about__icon"/>
             <h5>Clientes</h5>
             <small>99999</small>
           </article>
           <article className="about__card">
           <VscFolderLibrary className="about__icon"/>
             <h5>Projetos completos</h5>
             <small>99999</small>
           </article>
         </div>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eos voluptatem assumenda sunt tempore
             magnam corrupti laudantium vero error 
             soluta a omnis, dicta quia rem, tempora
              numquam quae sequi, id perferendis!
         </p>
        <a href="#contact" className="btn btn-primary">Vamos conversar</a>

        </div>
      </div>
    </section>
  )
}
