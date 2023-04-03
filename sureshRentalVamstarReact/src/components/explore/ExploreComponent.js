/**
 * Copyright (C) Teckray Solutions
 * Written Suresh Munigala Meru <suresh.munigala@outlook.com>, April 2023
 */

import React from 'react';

import './Explore.css';

import explore1 from '../../images/explore.png';
import explore2 from '../../images/explore0.png';
import priceLayer from '../../images/rectangle-16@2x.svg';

const ExploreComponent = () => {
  return (
    <div className='explore'>
      <div className='title'>
        <div className="explore-heading ">Explore</div>
        <div className="explore-desc">
          From one-guest rooms to <br /> penthouses with pools and gardens
        </div>
      </div>
      <div className='explore-image-container'>
        <img alt='explore1' className="explore1" src={explore1} />
        <img alt='explore2' className="explore2" src={explore2} />
      </div>
      <div className='priceLayer'>
        <img alt='img' className='priceLayerImg' src={priceLayer} />
        <p>Room with one king-size bed</p>
        <div className='button-container'>
          <button>35$</button>
          <button>28м²</button>
          <button>Book!</button>
        </div>
      </div>
      <div className='priceLayer2'>
        <img alt='img' className='priceLayerImg' src={priceLayer} />
        <p>Penthouse for 8 person</p>
        <div className='button-container'>
          <button>2039$</button>
          <button>438м²</button>
          <button className='explore-book-button'>Book!</button>
        </div>
      </div>
    </div>
  )
}

export default ExploreComponent