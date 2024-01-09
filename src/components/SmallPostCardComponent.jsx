// SmallPostCardComponent.jsx
import React from 'react';
import axios from 'axios'; // Add this line
import { useProducts } from '../contexts/ProductContext';

const SmallPostCardComponent = ({ thumbnailUrl, title }) => {
  return (
    <>
      <section className='flex gap-4 mt-4'>
        <div className='relative w-7/12 pt-32 max-xl:pt-56 max-xl:w-2/6'>
          <img className='absolute top-0 left-0 w-full h-full object-cover' src={thumbnailUrl} alt="Small Post Image" />
        </div>
        <div className='relative grow w-3/12'>
          <p className='text-right text-xl text-balance w-full max-xl:w-full'>{title}</p>
          <p className='text-right w-full mt-4 underline font-bold text-sm text-gray-600 underline-offset-4'>
            <a href="#"> ادامه مطلب </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default SmallPostCardComponent;
