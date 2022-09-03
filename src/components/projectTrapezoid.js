import React from 'react';
import '../styles/components/all.css';
import trap from '../assets/trapezoid2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function ProjectTrapezoid(props) {
  return (
    <div className='trap-container'>
      {props.upper === true ? (
        <>
          <h1 className='upperText'>{props.text}</h1>
          <img className='upper' src={trap} alt='trappezoid' />
        </>
      ) : (
        <>
          <a href='/' className='lowerText'>
            <div className='homeButton'>
              <div className='homeContainer'>
                <a className='homeIcon' href='/'>
                  <FontAwesomeIcon icon={faHouse} />
                </a>
                <h3>Home</h3>
              </div>
            </div>
          </a>
          <img className='lower' src={trap} alt='trappezoid' />
        </>
      )}
    </div>
  );
}
