import React from 'react';

const SmallPostCardComponent = ({ title, thumbnailUrl, productId }) => {
  return (
    <section className='flex gap-4 mt-4 bg-orange-100 rounded-xl p-4'>
      <picture className='relative w-5/12 aspect-[4/4] max-xl:w-2/6 rounded-lg block overflow-hidden'>
        <img className='absolute rounded-lg top-0 left-0 w-full h-full object-cover hover:scale-105 hover:rounded-lg ease-in duration-500' src={thumbnailUrl} alt="Small Post Image" />
      </picture>
      <div className='relative grow w-3/12 py-6'>
        <p className='text-right text-2xl text-orange-600 w-full max-xl:w-full'>{title}</p>
        <p className='text-right w-full mt-4 underline font-bold text-sm text-gray-900 hover:text-blue-600 underline-offset-4'>
          <a href={`/post/${productId}`}>ادامه مطلب</a>
        </p>
      </div>
    </section>
  );
};

export default SmallPostCardComponent;
