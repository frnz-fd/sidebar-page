// MainComponent.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import PostCardComponent from './PostCardComponent.jsx';
import SmallPostCardComponent from './SmallPostCardComponent.jsx';
import { useProducts } from '../contexts/ProductContext.jsx'; 
import { useSearch } from '../contexts//SearchContext.jsx'; 
const MainComponent = () => {
    // Use the custom hooks to access the contexts
    const { searchQuery, updateSearchQuery } = useSearch();
    const { products, smallProducts, categories, selectedCategory, setSelectedCategory } = useProducts();

    useEffect(() => {
        // Implement your search functionality using the searchQuery
        // For example:
        axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`)
            .then(response => console.log('Search results for products:', response.data))
            .catch(error => console.error('Error searching products:', error));
    }, [searchQuery]);

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Filter products based on selected category
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <>
            <article className='max-w-[1265px] max-xl:max-w-[900px] mx-auto max-xmd:px-4 max-xl:mt-10'>
                <ul className='flex py-4 mt-24 max-md:mt-2 mb-14 max-xl:mb-6 '>
                    <li className='px-2 text-gray-500'>صفحه اصلی</li>
                    <li className='px-2 text-2xl font-bold leading-5'>&rsaquo;</li>
                    <li className='px-2 text-gray-500'>
                        {selectedCategory !== null ? `   ${selectedCategory}` : ' All'}
                    </li>
                </ul>

                <div className='flex justify-between px-2 max-xl:block'>
                    <h1 className='font-black text-3xl max-xl:text-right max-xl:pb-10 w-[350px] py-6'>نوار کناری وبلاگ</h1>
                    <ul className='flex flex-wrap gap-2 font-bold text-gray-400 mr-10 '>
                        {/* Update onClick event to call handleCategoryChange */}
                        <li
                            className={`cursor-pointer w-fit ${selectedCategory === null ? 'text-black' : ''}`}
                            onClick={() => handleCategoryChange(null)}
                        >
                            All
                        </li>
                        {categories.map(category => (
                            <li
                                key={category}
                                className={`cursor-pointer w-fit ${selectedCategory === category ? 'text-black' : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </li>
                        ))}


                    </ul>
                </div>
            </article >

            <main className="flex max-xl:block flex-row-reverse justify-center px-6 gap-5 mt-24 max-xmd:mt-10">
                {/* postcards part */}
                <article className='max-w-[885px] gap-5 grid grid-cols-2 max-md:grid-cols-1  max-xl:mx-auto'>
                    {filteredProducts.map(product => (
                        <PostCardComponent
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            category={product.category}
                            thumbnail={product.thumbnailUrl}
                        />
                    ))}
                </article>

                {/* sidebar part */}
                <article className='min-w-[367px] max-w-[367px] max-xl:max-w-full max-xl:px-14  max-xmd:px-0 max-xl:mt-14'>
                    <h2 className='w-full text-right text-2xl font-semibold '>جستجو</h2>
                    <div className='flex mt-10'>
                        <div className='px-2'>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8087 18.1083C14.1669 19.3735 12.1194 20.1243 9.89908 20.1243C4.49649 20.1243 0.116821 15.6788 0.116821 10.195C0.116821 4.71115 4.49649 0.265625 9.89908 0.265625C15.3017 0.265625 19.6813 4.71115 19.6813 10.195C19.6813 12.4487 18.9416 14.527 17.6952 16.1935L22.8478 21.4236C23.3687 21.9524 23.3687 22.8097 22.8478 23.3384C22.3269 23.8672 21.4823 23.8672 20.9613 23.3384L15.8087 18.1083ZM17.0134 10.195C17.0134 14.1832 13.8282 17.4163 9.89908 17.4163C5.96992 17.4163 2.78471 14.1832 2.78471 10.195C2.78471 6.20674 5.96992 2.97363 9.89908 2.97363C13.8282 2.97363 17.0134 6.20674 17.0134 10.195Z" fill="#000" />
                            </svg>
                        </div>
                        <input placeholder="اینجا چیزی تایپ کن..." className='px-4 outline-none' value={searchQuery}
                            onChange={(e) => updateSearchQuery(e.target.value)}></input>
                    </div>
                    <hr className='my-4 mx-2 border-gray-300'></hr>


                    <h2 className='w-full mt-12 text-right text-2xl font-semibold '>بعدی را بخوانید</h2>
                    {filteredProducts.slice(0, 3).map(product => (
                        <SmallPostCardComponent
                            key={product.id}
                            title={product.title}
                            thumbnailUrl={product.thumbnailUrl}
                        />
                    ))}
                    <section>
                        <h2 className='w-full mt-12 text-right text-2xl font-semibold'>دسته بندی ها</h2>
                        <ul className='text-right mt-2'>
                            <li className={`py-1 cursor-pointer font-semibold ${selectedCategory === null ? 'text-gray-700' : 'text-gray-500'}`} onClick={() => handleCategoryChange(null)}>
                                همه
                            </li>
                            {categories.map(category => (
                                <li
                                    key={category}
                                    className={`py-1 cursor-pointer font-semibold ${selectedCategory === category ? 'text-gray-700' : 'text-gray-500'}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </section>



                    <section>
                        <h2 className='w-full mt-12 text-right text-2xl font-semibold '> برچسب ها </h2>
                        <ul className='text-right mt-2 flex flex-wrap'>
                            <li className='py-2 px-4 font-bold bg-gray-100 rounded-3xl my-1 ml-1 cursor-pointer'>دیجیتال </li>
                            <li className='py-2 px-4 font-bold bg-gray-100 rounded-3xl m-1 cursor-pointer'> رشد و پیشرفت</li>
                            <li className='py-2 px-4 font-bold bg-gray-100 rounded-3xl m-1 cursor-pointer'> کانون توجه</li>
                            <li className='py-2 px-4 font-bold bg-gray-100 rounded-3xl m-1 cursor-pointer'>روند ها</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='w-full mt-12 text-right text-2xl font-semibold'> اینستاگرام</h2>
                        <ul className='flex gap-2 mt-2 '>
                            {filteredProducts.slice(0, 3).map(product => (
                                <li key={product.id} className='relative w-6/12 pt-28 max-xl:pt-[300px] max-xl:w-2/6 cursor-pointer'>
                                    <img className='absolute top-0 left-0 w-full h-full object-cover' src={product.thumbnailUrl} alt={`Thumbnail for ${product.title}`} />
                                </li>
                            ))}
                        </ul>
                    </section>


                </article>
            </main>
        </>
    );
};
export default MainComponent;