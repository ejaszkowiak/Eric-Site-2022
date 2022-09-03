import React, { useEffect, useState } from 'react';
import Trapezoid from '../components/trapezoid';
import ProjectTrapezoid from '../components/projectTrapezoid';
import arrow from '../assets/arrow.svg';
import neon from './assortedProjectsImages/neon.png';
import deep from './assortedProjectsImages/deep.png';
import blender1 from './assortedProjectsImages/blender1.png';
import blender2 from './assortedProjectsImages/blender2.png';
import blender3 from './assortedProjectsImages/blender3.png';
import blender4 from './assortedProjectsImages/blender4.png';
import '../styles/components/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Assorted_Projects() {
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
    <div className='assorted-projects-container'>
      <a className='floatingHomeIcon' href='/'>
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <a href='/robot'>
        <img className='left-arrow' src={arrow} alt='left-arrow' />
      </a>
      <a href='/guitar'>
        <img className='right-arrow' src={arrow} alt='right-arrow' />
      </a>
      <Trapezoid text='Assorted Projects' upper={true} />
      <div className='assorted-projects-grid'>

      {isMobile ? (
      <>
        <h1>LED Neon Sign</h1>
        <img className='img1' src={neon} alt='guitar' />
        <p>
            This “neon” sign is actually made up of LED strips with a silicone
            layer on top to diffuse the light. To make this, I used a laser
            cutter to create the backing out of acrylic, then I placed the LED
            strips in and wired them together. The “Renderfarm” is the room at
            Pixar where all the animations are rendered, and they have a
            similarly designed neon sign at the entrance.
          </p>
  <h1>Deepfakes</h1>
        <img className='img2' src={deep} alt='deepfake' />
          <p className='p2'>
            I like to dabble in the deepfake software DeepFaceLab. It uses
            machine learning to create a model of a face to apply to another. In
            the picture to the right I am creating a model of Tobey Maguire to
            place on my own. Deepfakes are fascinating to me and I can’t help
            but mess around with the technology.
          </p>
          <h1>Blender Rendering</h1>
          <div className='photo-group-1'>
            <img className='img3' src={blender1} alt='blender1' />
            <img className='img4' src={blender2} alt='blender2' />
          </div>
          <p className='p3'>
            Recently I dove into Blender, the free 3D rendering software to
            create digital art and animation. I love creating space and nebula
            themed art, and have been developing my texturing and modeling
            skill. In fact, I designed and rendered the spinning nebula cube on
            the splash page of my website. I’m used to engineering modeling
            software like SolidWorks or Catia, so modeling for art purposes is a
            bit of a shift for me.
          </p>
          <div className='photo-group-2'>
            <img className='img5' src={blender3} alt='blender3' />
            <img className='img6' src={blender4} alt='blender4' />
          </div>
      </>
      ) : (
      <>
        <img className='img1' src={neon} alt='guitar' />
        <div className='text1'>
          <h1>LED Neon Sign</h1>
          <p>
            This “neon” sign is actually made up of LED strips with a silicone
            layer on top to diffuse the light. To make this, I used a laser
            cutter to create the backing out of acrylic, then I placed the LED
            strips in and wired them together. The “Renderfarm” is the room at
            Pixar where all the animations are rendered, and they have a
            similarly designed neon sign at the entrance.
          </p>
        </div>
        <div className='text2'>
          <h1>Deepfakes</h1>
          <p className='p2'>
            I like to dabble in the deepfake software DeepFaceLab. It uses
            machine learning to create a model of a face to apply to another. In
            the picture to the right I am creating a model of Tobey Maguire to
            place on my own. Deepfakes are fascinating to me and I can’t help
            but mess around with the technology.
          </p>
        </div>

        <img className='img2' src={deep} alt='deepfake' />
        <img className='img3' src={blender1} alt='blender1' />
        <div className='text3'>
          <h1>Blender Rendering</h1>
          <p className='p3'>
            Recently I dove into Blender, the free 3D rendering software to
            create digital art and animation. I love creating space and nebula
            themed art, and have been developing my texturing and modeling
            skill. In fact, I designed and rendered the spinning nebula cube on
            the splash page of my website. I’m used to engineering modeling
            software like SolidWorks or Catia, so modeling for art purposes is a
            bit of a shift for me.
          </p>
        </div>
      </>
      )}
        
      </div>
      <div className='last-item'>
        <img className='img4' src={blender2} alt='blender2' />
        <img className='img5' src={blender3} alt='blender3' />
        <img className='img6' src={blender4} alt='blender4' />
      </div>
      <ProjectTrapezoid upper={false} />
    </div>
  );
}
