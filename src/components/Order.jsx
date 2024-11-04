import React from 'react';
import bgimg from "../assets/thewhooper.jpg";
import OrderNav from './OrderNav';

import { AccordionTransition } from './AccordionTransition';
import OrderNews from './OrderNews';

export const Order = () => {
  return (
    <div
      className='im'
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <OrderNav />
      <AccordionTransition />
      <OrderNews />
    </div>
  );
};