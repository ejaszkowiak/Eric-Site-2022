import React from 'react'
import "../styles/components/all.css"

export default function ProjectCard(props) {
  return (
    <div className='project-card-container'>
      {!props.reverse ? 
      <>
      <div className={props.reverse ? 'right-project-card':'left-project-card'}>
        <img className='project-logo' src={props.logo} alt="Project" />
        <h2>{props.role}</h2>
        <img className='project-image' src={props.image} alt="Project" />
      </div>
      <div className='fancy-rectangle' />
      <div className={props.reverse ? 'left-project-card':'right-project-card'}>
        <p>{props.text}</p>
        <div className='button-container'>
          <button href={props.link}>Learn more</button>
        </div>  
      </div>
      </>
    :
      <>
       <div className={props.reverse ? 'left-project-card':'right-project-card'}>
        <p>{props.text}</p>
        <div className='button-container'>
          <button href={props.link}>Learn more</button>
        </div>  
      </div>     
      <div className='fancy-rectangle' />
<div className={props.reverse ? 'right-project-card-image-group':'left-project-card'}>
        <img className='project-logo' src={props.logo} alt="Project" />
        <h2>{props.role}</h2>
        <img className='project-image' src={props.image} alt="Project" />
      </div>

      </>
    }
    </div>
  )
}
