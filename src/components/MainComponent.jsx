import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import PostCardComponent from './PostCardComponent';
import SmallPostCardComponent from './SmallPostCardComponent';



const MainComponent = () => {
    // React Router hooks for navigation and location
    const navigate = useNavigate();
    const location = useLocation();

    // State variables
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = 10;
    const [selectParam, setSelectParam] = useState('title,description,price,category,thumbnail');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchData();
        updateURLParameters();
    }, [location.search, page, selectParam]);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            setLoading(true);
            // Simultaneously fetch categories and products
            const [categoriesResponse, productsResponse] = await Promise.all([
                axios.get('https://dummyjson.com/products/categories'),
                axios.get(`https://dummyjson.com/products?limit=${perPage}&skip=${(page - 1) * perPage}&select=${selectParam}`)
            ]);
            // Extract and process data
            setCategories(categoriesResponse.data);

            const productsData = productsResponse.data.products.map(product => ({
                ...product,
                thumbnailUrl: product.thumbnail,
            }));

            setProducts(productsData);
            setTotal(productsResponse.data.total);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    // Function to update state based on URL parameters
    const updateURLParameters = () => {
        const params = new URLSearchParams(location.search);
        const categoryParam = params.get('category') || 'all';
        const searchParam = params.get('search') || '';
        const selectParamFromQuery = params.get('select') || 'title,description,price,category,thumbnail';

        setSelectParam(selectParamFromQuery);
        setSelectedCategory(categoryParam);
        setSearchQuery(searchParam);
    };

    // Memoized total number of pages for pagination
    const totalPages = useMemo(() => Math.ceil(total / perPage), [total, perPage]);

    // Function to handle pagination
    const handlePagination = async (pageNumber) => {
        try {
            setLoading(true);
            const skip = (pageNumber - 1) * perPage;
            const paginationUrl = `https://dummyjson.com/products?limit=${perPage}&skip=${skip}&select=${selectParam}`;
            const response = await axios.get(paginationUrl);

            if (response.status === 200) {
                const responseData = response.data;
                const paginatedData = responseData.products.map(product => ({
                    ...product,
                    thumbnailUrl: product.thumbnail,
                }));

                setProducts(paginatedData);
                setPage(pageNumber);

                // Update the URL with the new page query parameter
                const updatedUrl = `${location.pathname}?page=${pageNumber}${location.search.replace(/([&?])page=\d+/i, '')}`;
                navigate(updatedUrl, { replace: true });
            } else {
                console.error('Invalid response status:', response.status);
            }
        } catch (error) {
            console.error('Error fetching paginated data:', error.response?.data || error.message || error);
        } finally {
            setLoading(false);
        }
    };

    // Function to handle page click in pagination
    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1;
        handlePagination(selectedPage);
    };

    // Memoized top five categories based on product count
    const topFiveCategories = useMemo(() => {
        return categories
            .map(category => ({
                name: category,
                productCount: products.filter(product => product.category === category).length,
            }))
            .sort((a, b) => b.productCount - a.productCount)
            .slice(0, 5)
            .map(category => category.name);
    }, [categories, products]);

     // Memoized products based on selected category
    const selectedCategoryProducts = useMemo(() => {
        return selectedCategory === 'all'
            ? products
            : products.filter(product => product.category === selectedCategory);
    }, [selectedCategory, products]);

    // Memoized products to display, considering search results
    const displayProducts = useMemo(() => {
        return searchResults.length > 0 ? searchResults : selectedCategoryProducts;
    }, [searchResults, selectedCategoryProducts]);

    const handleCategoryChange = category => {
        setSelectedCategory(category);
        navigate(category !== 'all' ? `?category=${category}` : '/');
    };

    const handleSearchWithParams = async () => {
        try {
            if (searchQuery.trim() === '') {
                console.log('Search query is empty');
                setSearchResults([]);
                return;
            }

            setLoading(true);

            const searchUrl = `https://dummyjson.com/products/search?q=${searchQuery}`;
            const response = await axios.get(searchUrl);

            if (response.status === 200) {
                const contentType = response.headers['content-type'];

                if (contentType && contentType.includes('application/json')) {
                    const responseData = response.data;
                    const searchData = responseData.products.map(product => ({
                        ...product,
                        thumbnailUrl: product.thumbnail,
                    }));

                    setSearchResults(searchData);
                    navigate(`?search=${searchQuery}`);
                } else if (contentType && contentType.includes('text/html')) {
                    console.error('Invalid response format. Received HTML instead of JSON');
                    const errorInfo = extractErrorInfoFromHtml(response.data);
                    console.error('Error Information:', errorInfo);
                } else {
                    console.error('Invalid response format. Unexpected content type:', contentType);
                }
            } else {
                console.error('Invalid response status:', response.status);
            }
        } catch (error) {
            console.error('Error fetching search data:', error.response?.data || error.message || error);
        } finally {
            setLoading(false);
        }
    };

    const extractErrorInfoFromHtml = (htmlContent) => {
        return {
            errorMessage: 'Error message extracted from HTML',
        };
    };

    const handleSearchButtonClick = () => {
        handleSearchWithParams();
    };

    const handleSearchInputChange = e => {
        setSearchQuery(e.target.value);
    };


    return (
        <div className='max-w-[1265px] max-xl:max-w-[900px] mx-auto max-xmd:px-4 max-xl:mt-10 max-ssm:px-1'>
            <ul className='flex w-11/12 mx-auto py-4 mt-10 max-md:mt-2 mb-14 max-xl:mb-6 '>
                <li className='px-2 text-gray-500'>صفحه اصلی</li>
                <li className='px-2 text-2xl font-bold leading-5'>&rsaquo;</li>
                <li className='px-2 text-gray-500'>
                    {selectedCategory !== 'all' ? `   ${selectedCategory}` : ' All'}
                </li>
            </ul>

            <div className='flex justify-between gap-5 px-2 max-xl:block w-11/12 mx-auto'>
                <h1 className='font-black text-3xl max-xl:text-right max-xl:pb-10 max-w-[350px] '>نوار کناری وبلاگ</h1>
                <ul className='flex flex-wrap gap-10 font-bold text-gray-400 '>
                    <li
                        className={`cursor-pointer hover:text-orange-600 w-fit ${selectedCategory === 'all' ? 'text-black' : ''}`}
                        onClick={() => handleCategoryChange('all')}
                    >
                        All
                    </li>
                    {topFiveCategories.map(category => (
                        <li
                            key={category}
                            className={`cursor-pointer hover:text-orange-600 w-fit ${selectedCategory === category ? 'text-black' : ''}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <main className="flex max-xl:block flex-row-reverse justify-center px-6 max-sm:px-1 gap-5 mt-24 max-xmd:mt-10">
                {/* Postcards section */}
                {displayProducts.length > 0 ? (
                    // Display content based on selected category or search results
                    <article className='flex flex-col'>
                        <div className="max-w-[885px] gap-5 grid grid-cols-2 grid-rows-3 max-md:grid-cols-1 max-md:grid max-md:justify-items-center  max-xl:mx-auto">

                            {searchQuery.trim() === '' ? (
                                // Display default content based on selected category
                                selectedCategoryProducts.map(product => (
                                    <PostCardComponent
                                        key={product.id}
                                        id={product.id}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                        category={product.category}
                                        thumbnailUrl={product.thumbnailUrl}
                                    />
                                ))
                            ) : searchResults.length > 0 ? (
                                // Display search results when available
                                searchResults.map(product => (
                                    <PostCardComponent
                                        key={product.id}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                        category={product.category}
                                        thumbnailUrl={product.thumbnailUrl}
                                    />
                                ))
                            ) : (
                                // Display message when no results are found for the current search query
                                loading ? (
                                    // Display loading message while fetching search results
                                    <p className="text-center text-gray-500 mt-6 max-w-[350px]">Loading...</p>
                                ) : (
                                    // Display message when no results are found for the current search query
                                    <p className="text-center text-gray-500 mt-6 max-w-[350px]">No results found for "{searchQuery}"</p>
                                )
                            )}
                        </div>

                        {/* Pagination */}
                        <div>

                            <ReactPaginate
                                previousLabel={'prev'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                pageCount={totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName={'flex justify-center mt-8 space-x-1 justify-center'}
                                pageClassName={'p-2 cursor-pointer border '}
                                pageLinkClassName={'w-7 h-7 flex items-center justify-center bg-white border text-gray-700  transition duration-300 hover:bg-gray-200'}
                                activeClassName={'bg-blue-500 text-white'}
                                previousClassName={'p-2 mx-1 cursor-pointer border  text-sm'}
                                previousLinkClassName={'w-7 h-7 flex items-center justify-center bg-white border text-gray-700  transition duration-300 hover:bg-gray-200'}
                                nextClassName={'p-2 cursor-pointer border '}
                                nextLinkClassName={'w-7 h-7 flex items-center justify-center bg-white border text-gray-700  transition duration-300 hover:bg-gray-200'}
                                breakClassName={'p-2 cursor-pointer border '}
                                breakLinkClassName={'w-7 h-7 flex items-center justify-center bg-white border text-gray-700  transition duration-300 hover:bg-gray-200'}
                            />
                        </div>

                    </article>
                ) : (
                    // Display loading message while fetching default content
                    loading ? (
                        <p className="text-center text-gray-500 mt-6 max-w-[350px]">Loading...</p>
                    ) : (
                        // Display message when no default content is found for the selected category
                        <p className="text-center text-gray-500 mt-6 max-w-[350px]">No results found for the selected category</p>
                    )
                )}

                {/* Sidebar section */}
                <aside className='min-w-[367px] max-w-[367px] max-ssm:min-w-[300px] max-xl:max-w-full max-xl:px-14 max-xmd:px-0 max-xl:mt-14'>
                    <h2 className='w-full text-right text-2xl font-semibold'>جستجو</h2>
                    <div className='flex mt-10'>
                        <button type='button' className='px-2' onClick={handleSearchButtonClick}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8087 18.1083C14.1669 19.3735 12.1194 20.1243 9.89908 20.1243C4.49649 20.1243 0.116821 15.6788 0.116821 10.195C0.116821 4.71115 4.49649 0.265625 9.89908 0.265625C15.3017 0.265625 19.6813 4.71115 19.6813 10.195C19.6813 12.4487 18.9416 14.527 17.6952 16.1935L22.8478 21.4236C23.3687 21.9524 23.3687 22.8097 22.8478 23.3384C22.3269 23.8672 21.4823 23.8672 20.9613 23.3384L15.8087 18.1083ZM17.0134 10.195C17.0134 14.1832 13.8282 17.4163 9.89908 17.4163C5.96992 17.4163 2.78471 14.1832 2.78471 10.195C2.78471 6.20674 5.96992 2.97363 9.89908 2.97363C13.8282 2.97363 17.0134 6.20674 17.0134 10.195Z" fill="#000" />
                            </svg>
                        </button>
                        <input
                            placeholder="اینجا چیزی تایپ کن..."
                            className='px-4 outline-none'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />

                    </div>

                    <hr className='my-4 mx-2 border-gray-300'></hr>

                    <h2 className='w-full mt-12 text-right text-2xl font-semibold'>بعدی را بخوانید</h2>
                    {selectedCategoryProducts.slice(0, 3).map(product => (
                        <SmallPostCardComponent
                            key={product.id}
                            title={product.title}
                            thumbnailUrl={product.thumbnailUrl}
                        />
                    ))}

                    <section>
                        <h2 className='w-full mt-12 text-right text-2xl font-semibold'>دسته بندی ها</h2>
                        <ul className='text-right mt-2'>
                            <li
                                className={`py-1 cursor-pointer font-semibold hover:text-orange-600 ${selectedCategory === null ? 'text-gray-700' : 'text-gray-500'}`}
                                onClick={() => handleCategoryChange(null)}
                            >
                                All
                            </li>
                            {topFiveCategories.map(category => (
                                <li
                                    key={category}
                                    className={`py-1 cursor-pointer font-semibold hover:text-orange-600 ${selectedCategory === category ? 'text-gray-700' : 'text-gray-500'}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className='w-full mt-12 text-right text-2xl font-semibold'> برچسب ها </h2>
                        <ul className='text-right mt-2 flex flex-wrap'>
                            <li className='py-2 px-4 font-bold bg-blue-100 text-blue-600 rounded-3xl my-1 ml-1 cursor-pointer'>دیجیتال </li>
                            <li className='py-2 px-4 font-bold bg-orange-100 text-orange-600 rounded-3xl m-1 cursor-pointer'> رشد و پیشرفت</li>
                            <li className='py-2 px-4 font-bold bg-blue-100 text-blue-600 rounded-3xl m-1 cursor-pointer'> کانون توجه</li>
                            <li className='py-2 px-4 font-bold bg-orange-100 text-orange-600 rounded-3xl m-1 cursor-pointer'>روند ها</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='w-full mt-12 text-right text-2xl font-semibold'> اینستاگرام</h2>
                        <ul className='flex gap-2 mt-2 '>
                            {selectedCategoryProducts.slice(0, 3).map(product => (
                                <li key={product.id} className=' w-6/12 p-4 max-xl:w-2/6 cursor-pointer bg-blue-100 rounded-xl'>
                                    <img className='rounded-lg w-full h-full aspect-[4/4] object-fill hover:scale-125 hover:rounded-lg ease-in duration-500' src={product.thumbnailUrl} alt={`Thumbnail for ${product.title}`} />
                                </li>
                            ))}
                        </ul>
                    </section>
                </aside>
            </main>



        </div>
    );
};

export default MainComponent;
