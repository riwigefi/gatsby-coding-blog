import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import './index.scss';

const SiteFooter = () => {
  return (
    <footer className='site-footer'>
      <div className='row flex'>
        <div className='navigation flex-column'>
          <div className='title'>Navigation</div>
          <div className='item'>Home</div>
          <div className='item'>About</div>
          <div className='item'>Blog</div>
          <div className='item'>Tag</div>
          <div className='item'>Contact</div>
          <div className='item'>404 Page</div>
        </div>
        <div className='social-media flex-column'>
          <div className='title'>Social Media</div>
          <div className='item'>Twitter</div>
          <div className='item'>Facebook</div>
          <div className='item'>Dribble</div>
          <div className='item'>Discard</div>
        </div>
        <div className='tag-list flex-column'>
          <div className='title'>Tag</div>
          <div className='tag-list-inner flex'>
            <div className='item'>React</div>
            <div className='item'>Vue</div>
            <div className='React'>Java</div>
            <div className='item'>Data Structure</div>
            <div className='item'>Lifestyle</div>
          </div>
        </div>

        <div className='self-production'>
          <StaticImage
            className='avatar'
            alt='Wall heaven fantasy'
            src='../../images/avatar.png'
          />
          <p> Personal blog by Wang Jun Ming.</p>
          <p> Play fun with coding</p>
        </div>
      </div>
      <div className='site-description'>
        @ 2022 Jun Ming - All right Reserved.Publish with Gatsby
      </div>
    </footer>
  );
};

export default SiteFooter;
