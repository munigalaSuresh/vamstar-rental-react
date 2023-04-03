/**
 * Copyright (C) Teckray Solutions
 * Written Suresh Munigala Meru <suresh.munigala@outlook.com>, April 2023
 */

import React from "react";
import '../../styles/styles.css';
import './Footer.css'

const FooterComponent = () => {
  return (

    <div className='navbar footer'>
      <h1 className='logoBlack'>Your Logo</h1>
      <p className="footer-desc">
        © 2021 Company Name <br />All rights reserved
      </p>
      <div className="menu-link mobile-menu-link menu-link">
        <ul className="items">
          <li>
            <a href="/explore">Explore</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/city" className='cities-dropdown'>Cities</a>
          </li>
          <li>
            <a href="/cell" className='call footer-call'>Call</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterComponent