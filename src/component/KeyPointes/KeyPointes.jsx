import React from 'react';
import './KeyPointer.css';

const dats = [
  {
    p1: 'On Site Upto',
    main: '1 Year',
    p2: 'Warranty',
  },
  {
    p1: 'In-House',
    main: '8 Hours',
    p2: 'Testing',
  },
  {
    p1: 'Know the',
    main: 'Performance',
    p2: 'Place the Order',
  },
  {
    p1: 'Pan India',
    main: 'Free',
    p2: 'Delivery',
  },
];

const KeyPointes = () => {
  return (
    <div className="main_card">
      <div className="cards">
        {dats.map((e, index) => (
          <div key={index} className="cart_Item">
            <p className="titel">{e.p1}</p>
            <h2>{e.main}</h2>
            <p>{e.p2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyPointes;