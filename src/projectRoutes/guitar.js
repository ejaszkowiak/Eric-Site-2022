import React, { useEffect, useState } from 'react';
import Trapezoid from '../components/trapezoid';
import ProjectTrapezoid from '../components/projectTrapezoid';
import guitar1 from './guitarImages/guitar1.JPG';
import guitar2 from './guitarImages/guitar2.jpg';
import guitar3 from './guitarImages/guitar3.JPG';
import guitar4 from './guitarImages/guitar4.JPG';
import arrow from '../assets/arrow.svg';
import '../styles/components/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Guitar() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });


  return (
    <div className='guitar-container'>
      <a className='floatingHomeIcon' href='/'>
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <a href='/assorted_projects'>
        <img className='left-arrow' src={arrow} alt='left-arrow' />
      </a>
      <a href='/robot'>
        <img className='right-arrow' src={arrow} alt='right-arrow' />
      </a>
      <Trapezoid text='Epoxy River Guitar' upper={true} />
      <div className='guitar-grid'>

      {isMobile ? (
      <>
        <img className='img1' src={guitar1} alt='guitar' />
        <p>
          During the summer of 2019 I decided to make an electric guitar using
          raw wood and epoxy. The wood is a salvaged live edge from the Santa
          Cruz area. I cut it to fit in a mold, and poured colored epoxy into
          the crevasses. Once cured it creates the beatiful river look as
          pictured below. I then cut the piece to the classic telecaster design,
          and routed the holes for the pickups, electronics, and neck slot. I
          painted the guitar body in clear laquer to let the epoxy really shine.
          It is a beautiful piece of art and took about three months to
          complete,
        </p>
        <div className='photo-group'>
          <img className='img2' src={guitar2} alt='guitar' />
          <img className='img3' src={guitar3} alt='guitar' />
        </div>
        <p className='p2'>
          The most difficult part of this process was pouring the epoxy. With
          little previous experience, I researched the best methods to produce
          the flowing water look. The largest roadblock I encountered was heat.
          Epoxy cures in an exothermic reaction, so it produces a lot of heat
          and can burn or crack if not cooled properly, but also needs to be
          warm to help pop its internal bubbles (I did not have a vaccum chamber
          to remove bubbles). Add on the Los Angeles summer heat and it is a
          recipe for disaster. In the end I was thrilled with how the river came
          out.
        </p>
          <img className='img4' src={guitar4} alt='guitar' />
          <p>
            Next I’m planning on making an epoxy acoustic guitar when I get the
            opportunity. That presesnts a whole other set of challenges with how
            thin it must be, but that’s half the fun of a project like this.
          </p>
      </>
      ):(
      <>
        <p>
          During the summer of 2019 I decided to make an electric guitar using
          raw wood and epoxy. The wood is a salvaged live edge from the Santa
          Cruz area. I cut it to fit in a mold, and poured colored epoxy into
          the crevasses. Once cured it creates the beatiful river look as
          pictured below. I then cut the piece to the classic telecaster design,
          and routed the holes for the pickups, electronics, and neck slot. I
          painted the guitar body in clear laquer to let the epoxy really shine.
          It is a beautiful piece of art and took about three months to
          complete,
        </p>
        <img className='img1' src={guitar1} alt='guitar' />
        <p className='p2'>
          The most difficult part of this process was pouring the epoxy. With
          little previous experience, I researched the best methods to produce
          the flowing water look. The largest roadblock I encountered was heat.
          Epoxy cures in an exothermic reaction, so it produces a lot of heat
          and can burn or crack if not cooled properly, but also needs to be
          warm to help pop its internal bubbles (I did not have a vaccum chamber
          to remove bubbles). Add on the Los Angeles summer heat and it is a
          recipe for disaster. In the end I was thrilled with how the river came
          out.
        </p>
        <img className='img2' src={guitar2} alt='guitar' />
        <img className='img3' src={guitar3} alt='guitar' />
        <div className='last-grid-item'>
          <p>
            Next I’m planning on making an epoxy acoustic guitar when I get the
            opportunity. That presesnts a whole other set of challenges with how
            thin it must be, but that’s half the fun of a project like this.
          </p>
          <img className='img4' src={guitar4} alt='guitar' />
        </div>
        </>
      )}
        
      </div>
      <ProjectTrapezoid upper={false} />
    </div>
  );
}
