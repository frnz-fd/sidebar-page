import React from 'react';
import { Link } from 'react-router-dom';

const PostCardComponent = ({ id, title, thumbnailUrl, category, price}) => {
  console.log('Thumbnail URL:', thumbnailUrl);
  return (
    <section className="max-w-[430px] p-4 bg-blue-100 rounded-xl">
      <picture className='aspect-square max-w-[350px] cursor-pointer mx-auto rounded-lg block overflow-hidden '>
        <img style={{ maxWidth: '105%' }} className='object-cover h-full rounded-lg hover:translate-x-2 hover:rounded-lg ease-in duration-300 transition-transform duration-500 ease-in-out' src={thumbnailUrl} alt="Product Thumbnail" />
      </picture>
      <div className='flex justify-center'>
        <span className='leading-10 text-blue-900 font-semibold py-1'>{category}</span>
        <span className="dot font-black text-orange-500 text-3xl px-4 items-center">.</span>
        <span className='leading-10 text-blue-900 font-semibold py-1'>{price} USD</span>
      </div>
      <hr className="my-2 border-orange-100"></hr>

      <p className="text-3xl text-center cursor-pointer text-blue-600">{title}</p>
      <p className='text-right w-full mt-6 underline font-bold text-gray-900 hover:text-orange-600 underline-offset-8 cursor-pointer'>
      <Link to={`/product/${id}`}>ادامه مطلب</Link>
      </p>
    </section>
  );
};

export default PostCardComponent;