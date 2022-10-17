import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import './index.scss';

const SiteFooter = () => {
  return (
    <footer className='site-footer'>
      <div className='avatar-container'>
        <StaticImage
          className='avatar'
          alt='Wall heaven fantasy'
          src='../../images/avatar.png'
        />
      </div>
      <div className='self-production'>
        Personal blog by Wang Jun Ming.
        <br />
        Life is short,coding is long.
      </div>
    </footer>
  );
};

export default SiteFooter;
