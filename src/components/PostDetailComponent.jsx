// PostDetailComponent.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetailComponent = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        // Check if id is available before making the API call
        if (id) {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await response.json();
          console.log(data);
          
          setProduct(data);
        } else {
          // Handle the case where id is undefined (e.g., show an error message)
          setError(new Error('Product ID is undefined'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);



  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

  const { title, thumbnail, category, price, description } = product;


  return (
    <>
      <div className='max-w-[1265px] max-xl:max-w-[900px] mx-auto max-xmd:px-4 max-xl:mt-10'>
        <ul className='flex py-4 mt-10 max-md:mt-2 mb-5 max-xl:mb-6 '>
          <li className=' text-gray-500'>صفحه اصلی</li>
          <li className='px-2 text-2xl font-bold leading-5'>&rsaquo;</li>
          <li className=' text-gray-500'> {category} </li>
          <li className='px-2 text-2xl font-bold leading-5'>&rsaquo;</li>
          <li className=' text-gray-500'> {title} </li>
        </ul>
        <h1 className='text-3xl Font-black'> {title}</h1>
      </div>

      <picture className='aspect-square max-w-[350px] cursor-pointer mx-auto rounded-lg overflow-hidden block relative mt-10'>
      <img style={{ maxWidth: '105%' }} className='object-fill h-full rounded-lg hover:translate-x-2 hover:rounded-lg ease-in duration-300 transition-transform duration-500 absolute ease-in-out' src={thumbnail} alt="Product Thumbnail" />

      </picture>

      <section className='w-9/12 mx-auto mt-10 '>
        <div className='flex justify-center'>
          <span className='leading-10 text-blue-900 font-semibold py-1'>{category}</span>
          <span className="dot font-black text-orange-500 text-3xl px-4 items-center">.</span>
          <span className='leading-10 text-blue-900 font-semibold py-1'>{price} USD</span>
        </div>
        <hr className="my-2 border-blue-200"></hr>

        <p className="text-3xl text-center py-2 cursor-pointer">{description}</p>
      </section>
    </>
  );
};

export default PostDetailComponent;
