import React, { useState } from 'react';

import { Link } from 'gatsby';

import './index.scss';

const NavLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Tag',
    to: '/tag',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

const SiteHeader: React.FC<{
  isLightTheme: boolean;
  toggleTheme: () => void;
}> = ({ isLightTheme, toggleTheme }) => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const toggleMobileNavVisible = () => setIsOpenMobileNav((bol) => !bol);

  const location = window.location.href;

  console.log('--location--', location);

  return (
    <header className='site-header' id='siteHeader'>
      <div className='container flex'>
        <div className='logo'>
          <Link to='/' className='logo-text'>
            Wang Jun Ming's Blog
          </Link>
        </div>
        <div className='header-right flex'>
          <div className='header-nav-wrap'>
            {NavLinks.map((navItem) => (
              <div className='nav-item' key={navItem.to}>
                <Link className='link' to={navItem.to}>
                  {navItem.label}
                </Link>
              </div>
            ))}
          </div>
          <div className='nav-icon theme-icon'>
            <div className='toggle-mode' onClick={toggleTheme}>
              {isLightTheme ? (
                <span className='light'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <g data-name='Layer 2'>
                      <g data-name='sun'>
                        <rect
                          width='24'
                          height='24'
                          transform='rotate(180 12 12)'
                          opacity='0'
                        ></rect>
                        <path d='M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z'></path>
                        <path d='M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z'></path>
                        <path d='M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z'></path>
                        <path d='M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z'></path>
                        <path d='M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z'></path>
                        <path d='M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z'></path>
                        <path d='M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z'></path>
                        <path d='M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z'></path>
                        <path d='M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z'></path>
                      </g>
                    </g>
                  </svg>
                </span>
              ) : (
                <span className='dark'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <g data-name='Layer 2'>
                      <g data-name='moon'>
                        <rect width='24' height='24' opacity='0'></rect>
                        <path d='M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3zM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22 8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92z'></path>
                      </g>
                    </g>
                  </svg>
                </span>
              )}
            </div>
          </div>
          <div className='nav-icon search-icon'>
            <span className='search-icon'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M22.655 19.9989L18.6896 16.0452C19.969 14.4152 20.6632 12.4024 20.6607 10.3303C20.6607 8.48497 20.1134 6.68104 19.0882 5.14668C18.063 3.61231 16.6058 2.41642 14.9009 1.71023C13.196 1.00404 11.32 0.819271 9.51007 1.17928C7.70017 1.5393 6.03766 2.42792 4.73279 3.73279C3.42792 5.03766 2.5393 6.70017 2.17928 8.51007C1.81927 10.32 2.00404 12.196 2.71023 13.9009C3.41642 15.6058 4.61231 17.063 6.14668 18.0882C7.68104 19.1134 9.48497 19.6607 11.3303 19.6607C13.4024 19.6632 15.4152 18.969 17.0452 17.6896L20.9989 21.655C21.1073 21.7643 21.2363 21.8511 21.3784 21.9103C21.5205 21.9695 21.673 22 21.8269 22C21.9809 22 22.1334 21.9695 22.2755 21.9103C22.4176 21.8511 22.5466 21.7643 22.655 21.655C22.7643 21.5466 22.8511 21.4176 22.9103 21.2755C22.9695 21.1334 23 20.9809 23 20.8269C23 20.673 22.9695 20.5205 22.9103 20.3784C22.8511 20.2363 22.7643 20.1073 22.655 19.9989V19.9989ZM4.33259 10.3303C4.33259 8.94631 4.743 7.59337 5.51192 6.44259C6.28084 5.29182 7.37374 4.3949 8.65241 3.86526C9.93108 3.33561 11.3381 3.19704 12.6955 3.46705C14.053 3.73705 15.2998 4.40353 16.2785 5.38218C17.2571 6.36083 17.9236 7.60771 18.1936 8.96514C18.4636 10.3226 18.325 11.7296 17.7954 13.0083C17.2658 14.2869 16.3688 15.3798 15.2181 16.1487C14.0673 16.9177 12.7144 17.3281 11.3303 17.3281C9.47441 17.3281 7.69451 16.5908 6.38218 15.2785C5.06985 13.9662 4.33259 12.1862 4.33259 10.3303Z'></path>
              </svg>
            </span>
          </div>
          <div
            className='nav-icon menu-icon flex'
            onClick={toggleMobileNavVisible}
          >
            {Array(3)
              .fill(1)
              .map((_, idx) => (
                <div className='line' key={idx}></div>
              ))}
          </div>
        </div>
      </div>
      <div className={`mobile-nav-wrap ${isOpenMobileNav && 'open'} flex`}>
        <div className='close-mobile-nav-wrap' onClick={toggleMobileNavVisible}>
          X
        </div>
        <div className='nav-wrap'>
          {NavLinks.map((navItem) => (
            <div className='nav-item' key={navItem.to}>
              <Link className='link' to={navItem.to}>
                {navItem.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='backdrop' id='backdrop'></div>
      {isOpenMobileNav && <div className='full-mask'></div>}
    </header>
  );
};

export default SiteHeader;
