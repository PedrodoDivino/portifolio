import React from 'react'
import './portifolio.css'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.jpg'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: portfolio1,
    title: 'Kit de interface do usuário Orion - modelos de gráficos e infográficos no Figma',
    github: 'https://github.com/PedrodoDivino',
    demo: 'https://dribbble.com/shots/18202672-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 2,
    image: portfolio2,
    title: 'Kit de interface do usuário Orion - modelos de gráficos e infográficos no Figma',
    github: 'https://github.com/PedrodoDivino',
    demo: 'https://dribbble.com/shots/18202532-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: portfolio3,
    title: 'Eclipse - figma UI KIT para aplicativos de design de dados',
    github: 'https://github.com/PedrodoDivino',
    demo: 'https://dribbble.com/shots/17238577-Eclipse-figma-UI-KIT-for-data-design-apps'
  },
  {
    id: 4,
    image: portfolio4,
    title: 'Eclipse - Kit de interface do usuário do painel Figma para aplicativos da Web de design de dados',
    github: 'https://github.com/PedrodoDivino',
    demo: 'https://dribbble.com/shots/17393929-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 5,
    image: portfolio5,
    title: 'Kit de interface do usuário Orion - modelos de gráficos e infográficos no Figma',
    github: 'https://github.com/PedrodoDivino',
    demo: 'https://dribbble.com/shots/17714978-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: portfolio6,
    title: 'Kit de interface do usuário Orion - modelos de gráficos e infográficos no Figma',
    github: 'https://github.com/PedrodoDivino',
    demo: 'https://dribbble.com/shots/17317573-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
]

export const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifólio</h2>
      <div className="container portifolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portifolio__item">
                <div className="portifolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portifolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} target="_blank" className='btn btn-primary'>Veja uma demonstração</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

