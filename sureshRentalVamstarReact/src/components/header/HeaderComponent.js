/**
 * Copyright (C) Teckray Solutions
 * Written Suresh Munigala Meru <suresh.munigala@outlook.com>, April 2023
 */

import React from "react";

import downArrow from '../../images/downArrow.png';

const HeaderComponent = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>Your Logo</h1>
      <div className="menu-link mobile-menu-link menu-link">
        <ul>
          <li>
            <a href="/explore">Explore</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/city" className='cities-dropdown'>Cities </a>
            <img alt='img' className="cityDownArrow" src={downArrow} />
          </li>
          <li>
            <a href="/cell" className='call'>Call</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent