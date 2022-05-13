import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs  from 'emailjs-com';


export const Contact = () => {
const  form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ix3osr7', 'template_b4dpy7z', form.current, 'WL4wQHwwuYTuF3N8A')
  e.target.reset()
};


  return (
    <section id="contact">
      <h5>Entre em contato</h5>
      <h2>Vamos conversar</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55(43)98492-8820</h5>
            <a href="#" target='_blank'>Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>pedrohenrique736.ph@gmail.com</h5>
            <a href="mailto:pedrohenrique736.ph@gmail.com" target='_blank'>Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <FiInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>Pedro.ogg</h5>
            <a href="https://www.instagram.com/pedro.ogg/" target='_blank'>Envie uma mensagem</a>
          </article>

        </div>
            {/*fim do contato */}
        <form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='Seu nome:' required/>
<input type="email" name='email' placeholder='Seu email:' required/>
<textarea name="message"  rows="7" placeholder="Sua mensagem" required></textarea>
<button type="submit" className="btn btn-primary">Enviar Mensagem</button>

        </form>

      </div>

    </section>
  )
}
