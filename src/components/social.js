import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div className="icon-column">
      <a className=' my-5 me-2' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a className=' my-5 me-2' href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a className=' my-5 me-2' href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
