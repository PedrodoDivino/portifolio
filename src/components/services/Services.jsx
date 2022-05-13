import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id="services">
      <h5>Tipos de serviços</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*fim de UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento WEB</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*Desenvolvimento WEB */}
        <article className="service">
          <div className="service__head">
            <h3>Criação de conteúdos</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*fim de Criação de conteúdos */}
      </div>
     </section>
  )
}
