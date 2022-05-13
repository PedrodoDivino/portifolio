import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'

export const Experience = () => {
  return (
    <section id="experince">
      <h5>Minhas Habilidades</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Front-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediario-avançado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediario</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediario-avançado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediario-avançado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermediario-avançado</small>
              </div>
            </article>
          </div>
        </div>
        { /*fim do front */}
        <div className="experience__backend">
          <h3>Desenvolvimento Back-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NODE JS</h4>
                <small className="text-light">Iniciante</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>POSTGRE SQL</h4>
                <small className="text-light">Iniciante</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MONGO DB</h4>
                <small className="text-light">Iniciante</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
