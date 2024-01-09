// PostCardComponent.jsx
import React from 'react';
import { useProducts } from '../contexts/ProductContext';

const PostCardComponent = ({ title, description, price, category, thumbnail }) => {
  return (
    <section className="max-w-[430px] max-xmd:max-w-[430px] max-md:max-w-[760px] py-2">
      <div style={{ position: 'relative', width: '100%', paddingTop: '80%' }} className='cursor-pointer mx-auto'>
        <img
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src={thumbnail}
          alt="Product Thumbnail"
        />
      </div>
      <div>
        <span className='px-2'>{category}</span>
        <span className='px-2 font-black text-3xl text-orange-500'>.</span>
        <span className='px-2'>{price} USD</span>
      </div>
      <hr className='my-2 border-gray-300'></hr>

      <p className="text-3xl text-right text-wrap cursor-pointer">{title}</p>
      <p className='text-right w-full mt-6 underline font-bold text-gray-600 underline-offset-4 cursor-pointer'>
        <a href="#"> ادامه مطلب </a>
      </p>
    </section>
  );
};

export default PostCardComponent;
