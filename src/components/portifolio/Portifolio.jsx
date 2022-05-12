import React from 'react'
import   portfolio1 from '../../assets/portfolio1.jpg'
import   portfolio2 from '../../assets/portfolio2.jpg'
import   portfolio3 from '../../assets/portfolio3.jpg'
import   portfolio4 from '../../assets/portfolio4.jpg'
import   portfolio5 from '../../assets/portfolio5.png'
import   portfolio6 from '../../assets/portfolio6.jpg'
import './portifolio.css'
export const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifólio</h2>
      <div className="container portifolio__container">
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={portfolio1} alt="" />

          </div>
          <h3>Esse vai ser o titulo do meu portifólio</h3>
       <div className="portifolio__item-cta">
       <a href="https://github.com/PedrodoDivino" className='btn'>Github</a>
        <a href="https://dribbble.com/alien_pixels" target="_blank" className='btn btn-primary'>Veja uma demonstração</a>
       </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={portfolio2} alt="" />

          </div>
          <h3>Esse vai ser o titulo do meu portifólio</h3>
       <div className="portifolio__item-cta">
       <a href="https://github.com/PedrodoDivino" className='btn'>Github</a>
        <a href="https://dribbble.com/alien_pixels" target="_blank" className='btn btn-primary'>Veja uma demonstração</a>
       </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={portfolio3} alt="" />

          </div>
          <h3>Esse vai ser o titulo do meu portifólio</h3>
       <div className="portifolio__item-cta">
       <a href="https://github.com/PedrodoDivino" className='btn'>Github</a>
        <a href="https://dribbble.com/alien_pixels" target="_blank" className='btn btn-primary'>Veja uma demonstração</a>
       </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={portfolio4} alt="" />

          </div>
          <h3>Esse vai ser o titulo do meu portifólio</h3>
       <div className="portifolio__item-cta">
       <a href="https://github.com/PedrodoDivino" className='btn'>Github</a>
        <a href="https://dribbble.com/alien_pixels" target="_blank" className='btn btn-primary'>Veja uma demonstração</a>
       </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={portfolio5} alt="" />

          </div>
          <h3>Esse vai ser o titulo do meu portifólio</h3>
       <div className="portifolio__item-cta">
       <a href="https://github.com/PedrodoDivino" className='btn'>Github</a>
        <a href="https://dribbble.com/alien_pixels" target="_blank" className='btn btn-primary'>Veja uma demonstração</a>
       </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={portfolio6} alt="" />

          </div>
          <h3>Esse vai ser o titulo do meu portifólio</h3>
       <div className="portifolio__item-cta">
       <a href="https://github.com/PedrodoDivino" className='btn'>Github</a>
        <a href="https://dribbble.com/alien_pixels" target="_blank" className='btn btn-primary'>Veja uma demonstração</a>
       </div>
        </article>
      </div>
      </section>
  )
}
