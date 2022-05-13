import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data= [
  {
    avatar: avatar1,
    name: 'Maria da Silva',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur nobis nesciunt iste laborum explicabo molestiae voluptates, minima reprehenderit reiciendis cum,doloremque provident mollitia in. Alias iure natus'
  },
  {
    avatar: avatar2,
    name: 'João da Silva',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur nobis nesciunt iste laborum explicabo molestiae voluptates, minima reprehenderit reiciendis cum,doloremque provident mollitia in. Alias iure natus'
  },
  {
    avatar: avatar3,
    name: 'Joao da Silva',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur nobis nesciunt iste laborum explicabo molestiae voluptates, minima reprehenderit reiciendis cum,doloremque provident mollitia in. Alias iure natus'
  },
  {
    avatar: avatar4,
    name: 'Maria da Silva',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur nobis nesciunt iste laborum explicabo molestiae voluptates, minima reprehenderit reiciendis cum,doloremque provident mollitia in. Alias iure natus'
  }
]

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Veja o que as pessoas estão dizendo:</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

{
  data.map(({avatar, name, review},index)=>{
    return(
      <SwiperSlide key={index} className="testimonial">
        <div className="client__avatar">
          <img src={avatar} alt="" />
        </div>
        <h5 className="client__name">{name}</h5>
        <small className="client__review">{review}
        </small>
        </SwiperSlide>
    )
  })
}
      </Swiper>
      </section>
  )
}
