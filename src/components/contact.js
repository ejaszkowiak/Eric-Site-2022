import React from 'react';
import '../styles/components/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  library.add(faCoffee, faGithub, faLinkedinIn);
  return (
    <div className='contact-container'>
      <h2>Want to get in touch?</h2>
      <div className='button-container'>
        <a href='mailto:ejaszkowiak@gmail.com'>Let's Talk</a>
      </div>
      <div className='links'>
        <a href='https://www.linkedin.com/in/eric-jaszkowiak/'>
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </a>
        <a href='https://github.com/ejaszkowiak'>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </div>
      <p className='credit'>
        Made with{' '}
        <a href='https://github.com/domogami'>
          <FontAwesomeIcon icon='coffee' />
        </a>
        by{' '}
        <a href='https://dominicklee.net'>
          <b>Dom</b>
        </a>
      </p>
    </div>
  );
}
