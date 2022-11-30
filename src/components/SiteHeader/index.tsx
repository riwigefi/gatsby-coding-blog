import React, { useState } from 'react';

import { Link } from 'gatsby';

import SumSvg from "../../icons/sum.svg";
import MoonSvg from "../../icons/moon.svg";
import SearchSvg from "../../icons/search.svg";
import MenuSvg from "../../icons/menu.svg";

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
    <header className='site-header flex' id='siteHeader'>
      <div className='container flex'>
        <Link className='site-name' to='/'>
          Wang Jun Ming's Blog
        </Link>
        {/** pc端导航栏 */}
        <div className='header-right flex'>
          <div className='header-nav-wrap flex'>
            {NavLinks.map((navItem) => (
              <div className='nav-item' key={navItem.to}>
                <Link className='link' to={navItem.to}>
                  {navItem.label}
                </Link>
                <div className='hover-line'></div>
              </div>
            ))}
          </div>
          <div className='nav-icon theme-icon'>
            <div className='toggle-mode' onClick={toggleTheme}>
              {isLightTheme ? (
                  <MoonSvg />
              ) : (
                  <SumSvg />
              )}
            </div>
          </div>
          <div className='nav-icon search-icon'>
            <SearchSvg />
          </div>
          <div
            className='nav-icon open-mobile-menu-icon'
            onClick={toggleMobileNavVisible}
          >
            <MenuSvg />
          </div>
        </div>
      </div>
      {/** 移动端导航栏 */}
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
