import React, { useState } from 'react';
import { BiSolidOffer } from 'react-icons/bi';


const Offer = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const offers = [
    '7.5% discount on every spent with Myntra Kotak Credit Card, TCA',
    'Additional 10% off on orders above $100',
    'Free shipping on orders above $50',
   
  ];

  const visibleOffers = showMore ? offers : offers.slice(0, 1);

  return (
    <div className='control-offer p-3 rounded'>
      <span className='cartBold'>
        <BiSolidOffer /> Bank offers
      </span>
      <ul>
        {visibleOffers.map((offer, index) => (
          <li key={index}>{offer}</li>
        ))}
      </ul>
      {offers.length > 1 && (
        <button className='ps-2 pe-2 rounded empty-button' onClick={toggleShowMore}>
          {showMore ? 'Hide' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default Offer;
