import React from 'react';
import Trapezoid from '../components/trapezoid';
import ProjectTrapezoid from '../components/projectTrapezoid';
import arrow from '../assets/arrow.svg';
import neon from './assortedProjectsImages/neon.png'
import '../styles/components/all.css';

export default function Assorted_Projects() {
  return (
    <div className='assorted-projects-container'>
      <a href='/robot'>
        <img className='left-arrow' src={arrow} alt='left-arrow' />
      </a>
      <a href='/guitar'>
        <img className='right-arrow' src={arrow} alt='right-arrow' />
      </a>
      <Trapezoid text='Assorted Projects' upper={true} />
      <div className='guitar-grid'>
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
        <img className='img1' src={neon} alt='guitar' />
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
        <img className='img2' src={neon} alt='guitar' />
        <img className='img3' src={neon} alt='guitar' />
        <div className='last-grid-item'>
          <p>
            Next I’m planning on making an epoxy acoustic guitar when I get the
            opportunity. That presesnts a whole other set of challenges with how
            thin it must be, but that’s half the fun of a project like this.
          </p>
          <img className='img4' src={neon} alt='guitar' />
        </div>
      </div>
      <ProjectTrapezoid upper={false} />
    </div>
  );
}
