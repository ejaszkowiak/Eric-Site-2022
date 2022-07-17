import React from 'react'
import "../styles/components/all.css"
import trap from '../assets/trapezoid.svg'

export default function Trapezoid(props) {
  return (
    <div className='trap-container'>
      {props.upper === true ?
      <>
        <h1 className='upperText'>{props.text}</h1>
        <img className='upper' src={trap} alt='trappezoid'/>
      </> :
      <>
        <h1 className='lowerText'>{props.text}</h1>
        <img className='lower' src={trap} alt='trappezoid'/>
      </> 
      }
    </div>
  )
}
