/**
 * Copyright (C) Teckray Solutions
 * Written Suresh Munigala Meru <suresh.munigala@outlook.com>, April 2023
 */

import React from "react";

import HeaderComponent from '../header/HeaderComponent';

import '../../styles/styles.css';
import './Home.css';

import bgLayer from '../../images/rectangle-3@1x.svg';
import downArrow from '../../images/downArrow.png';
import wavwVector from '../../images/waveVector.png';

const HomeComponent = () => {
  return (
    <div className='home'>
      <HeaderComponent />
      <div className="homePage">
        <div className="center">
          <h1>Rethink your <br /> living & renting</h1>
          <p>Make your stay painless with us</p>
        </div>
      </div>
      <img alt='img' className="layer1" src={bgLayer} />
      <div className="info">
        <div className="bg-info">
          <select className="cities select">
            <option >Cities</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="hyderabad">Hyderabad</option>
          </select>
          <select className="dates select">
            <option >Dates</option>
            <option value="date1">01-02-2023</option>
            <option value="date2">01-03-2023</option>
            <option value="date3">01-04-2023</option>
          </select>
          <select className="guests select">
            <option >Guests</option>
            <option value="guest1">1</option>
            <option value="guest2">2</option>
            <option value="guest3">3</option>
          </select>
          <button className="search">Search</button>
        </div>
      </div>
      <img alt='img' className="downArrow" src={downArrow} />
      <img alt='img' className="wave" src={wavwVector} />
    </div>
  )
}

export default HomeComponent