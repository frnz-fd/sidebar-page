// HeaderComponent.jsx //
import React, { useState } from 'react';

const HeaderComponent = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchBurgerVisible, setSearchBurgerVisible] = useState(false);

    const handleSearchBurgerOpen = () => {
        setSearchBurgerVisible(true);
        setMenuOpen(false); // Close the hamburger menu when the search burger is opened
    };

    const handleSearchBurgerClose = () => {
        setSearchBurgerVisible(false);
    };

    const handleHamburgerMenu = () => {
        setMenuOpen(!isMenuOpen);
        setSearchBurgerVisible(false); // Close the search burger when the hamburger menu is clicked
    };

    const handleCloseClick = () => {
        setSearchBurgerVisible(false);
        setMenuOpen(false);
    };


    return (
        <header className=' w-full h-fit '>

            {/* search for products from api */}
            {isSearchBurgerVisible && (
                <div className={`bg-footer-blue h-40 pt-10 ${isSearchBurgerVisible ? 'block' : 'hidden'}`}>
                    <div className='border-b border-b-gray-300 w-11/12 h-1/2 mx-auto flex justify-between'>
                        {/*  search close button for products from api */}
                        <button type='button' onClick={handleSearchBurgerClose}>
                            <svg className='mt-4' xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </button>
                        <input className='placeholder-gray-200 text-gray-200 text-xl bg-inherit outline-none' type="text" placeholder='محصولات را جستجو کنید...' ></input>
                    </div>
                </div>
            )}


            {/* contact-us */}
            <section className="max-md: flex justify-end gap-4 py-4 px-20 max-xxl:px-5 border-b border-b-gray-200">
                <p > نیویورک،بروکلین، 3453</p>
                <a href="tel:(+1)123-456-789">123-456-789(+1) </a>

            </section>

            {/* nav-menu */}
            <section className='flex justify-between py-6 px-20 max-xxl:px-5 '>

                {/* navbar */}

                <ul className='flex w-fit gap-4 items-center text-lg font-semibold max-xl:hidden '>
                    <li className='cursor-pointer'>خانه</li>
                    <li className='cursor-pointer'>صفحات</li>
                    <li className='cursor-pointer'>نمونه کارها</li>
                    <li className='cursor-pointer'>بلاگ</li>
                    <li className='cursor-pointer'>ویژگی ها</li>
                </ul>

                {/* title */}
                <div className='mt-2 mx-4 max-xl:mx-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="30" viewBox="0 0 176 30" fill="none">
                        <path d="M147.605 1.14776C147.078 1.53234 146.551 2.0979 146.436 2.41461C146.093 3.31951 146.138 28.8149 146.482 29.1542C146.872 29.5388 149.3 29.5162 149.621 29.1316C149.781 28.9054 149.896 25.3537 149.919 17.3001L149.987 5.80797L159.724 16.3047C172.599 30.2175 171.889 29.4936 172.737 29.4936C173.562 29.4936 174.455 28.9733 175.005 28.1362C175.394 27.5707 175.417 26.5074 175.486 14.5628C175.532 5.46863 175.463 1.46448 175.303 1.14776C175.074 0.74056 174.868 0.672693 173.516 0.74056L171.981 0.808427L171.752 24.1773L161.74 13.4091C156.242 7.48202 151.27 2.14315 150.72 1.53234C149.506 0.26549 148.956 0.197623 147.605 1.14776Z" fill="#012B43"></path><path d="M6.09002 1.2835C5.47146 1.60021 4.37178 2.36937 3.66157 2.98017C2.95136 3.59098 2.14952 4.08867 1.8746 4.08867C1.59968 4.08867 1.1873 4.20178 0.935289 4.31489C0.52291 4.54112 0.5 4.88045 0.5 13.5674C0.5 21.1912 0.54582 22.7069 0.866559 23.6118C1.39349 25.1275 4.00522 27.8421 5.8151 28.7244L7.21261 29.4257H17.3159C22.883 29.4257 27.5566 29.3352 27.7399 29.2221C27.969 29.0864 28.0148 28.6113 27.9461 27.4123L27.8545 25.8061H28.473C28.8167 25.8061 29.2061 25.6704 29.3436 25.4894C29.5498 25.2632 29.5956 22.7069 29.5498 15.9202C29.4811 5.26503 29.6643 6.19255 26.9839 3.43262C24.2576 0.65007 24.5325 0.695315 15.1394 0.695315H7.21261L6.09002 1.2835ZM21.2793 4.29227L22.9517 4.428L4.28014 22.9557L4.21141 13.9294C4.1885 8.36429 4.07395 4.81258 3.93649 4.67685C3.79903 4.54112 3.70739 4.36014 3.70739 4.26965C3.70739 4.06605 18.805 4.06605 21.2793 4.29227ZM25.93 16.3047V25.8061H6.57113L16.1933 16.3047C21.4855 11.079 25.8384 6.80335 25.8613 6.80335C25.9071 6.80335 25.93 11.079 25.93 16.3047Z" fill="#012B43"></path>
                        <path d="M42.7688 1.23825C42.1503 1.53234 41.0048 2.25626 40.2716 2.86706C39.4698 3.52311 38.5305 4.06605 37.9807 4.20178L37.0413 4.428L36.9726 16.6215C36.9497 25.4442 36.9955 28.9054 37.1788 29.109C37.3392 29.3126 37.9348 29.4257 38.7825 29.4257C39.8593 29.4257 40.1571 29.3352 40.3633 28.9959C40.5007 28.747 40.5924 26.9599 40.5924 24.8107V21.0554H52.8263L61.3488 29.4257H63.4565C65.4955 29.4257 65.5642 29.4031 65.5642 28.928C65.5642 28.5661 64.3958 27.2766 61.7383 24.6298C59.4931 22.4128 58.0498 20.8292 58.2789 20.8292C58.485 20.8292 59.1953 20.7161 59.8596 20.5804C60.8906 20.3541 61.303 20.0827 62.9754 18.4991C65.7933 15.8297 65.8849 15.6034 65.9766 11.2826C66.0911 6.59975 65.9079 6.03419 63.5252 3.56835C60.6844 0.627448 61.0051 0.695315 51.7037 0.695315C44.006 0.695315 43.8914 0.695315 42.7688 1.23825ZM59.5618 4.24702L62.3568 4.38276V17.4359H40.5924V11.1242C40.5924 7.14269 40.5007 4.74472 40.3633 4.65423C40.2487 4.58636 40.1342 4.428 40.1342 4.29227C40.1342 4.06605 55.2318 3.99818 59.5618 4.24702Z" fill="#012B43"></path><path d="M73.4681 1.21563C73.3765 1.50972 73.3536 4.13391 73.3994 7.0522C73.4681 13.1602 73.4911 13.2281 75.7362 15.3772L76.9963 16.6215L75.782 17.8883C73.6514 20.1053 73.4911 20.5577 73.3994 24.9691C73.3307 27.7064 73.3994 28.8601 73.5827 29.0864C73.9263 29.4936 76.3548 29.5388 76.7443 29.1542C76.9504 28.9506 77.0192 27.4349 77.0192 23.7249V18.567H88.3367L99.3793 29.4257H101.372C102.999 29.4257 103.411 29.3578 103.526 29.0637C103.618 28.8149 102.22 27.2766 98.5774 23.6796C95.8053 20.9423 93.5143 18.5896 93.5143 18.4991C93.5143 18.4086 94.0642 18.3407 94.7286 18.3407C96.4697 18.3407 97.9818 17.5263 99.7917 15.6034C102.151 13.0697 102.106 13.2733 102.106 6.57713V0.808427L100.662 0.74056C99.7917 0.695315 99.0814 0.785805 98.8753 0.944161C98.6232 1.14776 98.5545 2.43724 98.5545 8.0702V14.9474H77.0192V8.09282C77.0192 3.07066 76.9504 1.17038 76.7443 0.966783C76.5839 0.808427 75.8508 0.695315 75.026 0.695315C73.7201 0.695315 73.5827 0.74056 73.4681 1.21563Z" fill="#012B43"></path><path d="M115.76 1.14776C115.187 1.41923 114.065 2.16577 113.24 2.82182C112.278 3.59098 111.407 4.08867 110.88 4.17916C110.239 4.29227 109.987 4.47325 109.895 4.83521C109.826 5.10667 109.78 9.35968 109.826 14.2687C109.895 24.6976 109.712 23.8832 112.69 26.7336C115.554 29.5162 114.385 29.3126 126.963 29.3805C132.942 29.4257 138.074 29.3805 138.372 29.3126C138.83 29.1995 138.876 29.0637 138.876 27.7743C138.876 26.9599 138.761 26.236 138.601 26.0776C138.395 25.874 135.256 25.8061 125.886 25.8061H113.446V16.7572H125.199C134.042 16.7572 137.02 16.6893 137.226 16.4857C137.387 16.3274 137.501 15.6261 137.501 14.9022C137.501 13.8615 137.41 13.5674 137.066 13.3638C136.768 13.2281 132.576 13.1376 125.038 13.1376H113.446V9.04296C113.446 6.53188 113.354 4.78996 113.194 4.49587L112.942 4.04342L125.68 4.11129C134.729 4.17916 138.464 4.13391 138.647 3.95293C138.784 3.8172 138.876 3.09329 138.83 2.25626L138.761 0.808428L127.765 0.763183C117.18 0.695316 116.722 0.717938 115.76 1.14776Z" fill="#012B43"></path>
                    </svg>
                </div>
                <div className='flex'>

                    {/*  search open button for products from api */}
                    <button className='mt-4 mx-4 ' type="button" onClick={handleSearchBurgerOpen}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8087 18.1083C14.1669 19.3735 12.1194 20.1243 9.89908 20.1243C4.49649 20.1243 0.116821 15.6788 0.116821 10.195C0.116821 4.71115 4.49649 0.265625 9.89908 0.265625C15.3017 0.265625 19.6813 4.71115 19.6813 10.195C19.6813 12.4487 18.9416 14.527 17.6952 16.1935L22.8478 21.4236C23.3687 21.9524 23.3687 22.8097 22.8478 23.3384C22.3269 23.8672 21.4823 23.8672 20.9613 23.3384L15.8087 18.1083ZM17.0134 10.195C17.0134 14.1832 13.8282 17.4163 9.89908 17.4163C5.96992 17.4163 2.78471 14.1832 2.78471 10.195C2.78471 6.20674 5.96992 2.97363 9.89908 2.97363C13.8282 2.97363 17.0134 6.20674 17.0134 10.195Z" fill="#000" />
                        </svg>
                    </button>

                    {/* open hamburger menu */}
                    <button className="navbar-burger" type="button" onClick={handleHamburgerMenu}>
                        <div className='border-y-black border-y-4 p-1 w-20 h-2 mt-4'></div>
                    </button>

                </div>
            </section>

            {/* hamburger menu  */}
            <div className={`navbar-menu relative z-50  ${isMenuOpen ? 'block' : 'hidden'}`}>

                {/* backdrop  */}
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" ></div>
                <div className="bg-hamburger-pattern text-white w-full h-full fixed  top-0 left-0  p-8">

                    <div className='flex justify-between'>
                        <button className="navbar-burger" type="button" onClick={handleCloseClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </button>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="176" height="30" viewBox="0 0 176 30" fill="none"><path d="M147.605 1.14776C147.078 1.53234 146.551 2.0979 146.436 2.41461C146.093 3.31951 146.138 28.8149 146.482 29.1542C146.872 29.5388 149.3 29.5162 149.621 29.1316C149.781 28.9054 149.896 25.3537 149.919 17.3001L149.987 5.80797L159.724 16.3047C172.599 30.2175 171.889 29.4936 172.737 29.4936C173.562 29.4936 174.455 28.9733 175.005 28.1362C175.394 27.5707 175.417 26.5074 175.486 14.5628C175.532 5.46863 175.463 1.46448 175.303 1.14776C175.074 0.74056 174.868 0.672693 173.516 0.74056L171.981 0.808427L171.752 24.1773L161.74 13.4091C156.242 7.48202 151.27 2.14315 150.72 1.53234C149.506 0.26549 148.956 0.197623 147.605 1.14776Z" fill="#fff"></path><path d="M6.09002 1.2835C5.47146 1.60021 4.37178 2.36937 3.66157 2.98017C2.95136 3.59098 2.14952 4.08867 1.8746 4.08867C1.59968 4.08867 1.1873 4.20178 0.935289 4.31489C0.52291 4.54112 0.5 4.88045 0.5 13.5674C0.5 21.1912 0.54582 22.7069 0.866559 23.6118C1.39349 25.1275 4.00522 27.8421 5.8151 28.7244L7.21261 29.4257H17.3159C22.883 29.4257 27.5566 29.3352 27.7399 29.2221C27.969 29.0864 28.0148 28.6113 27.9461 27.4123L27.8545 25.8061H28.473C28.8167 25.8061 29.2061 25.6704 29.3436 25.4894C29.5498 25.2632 29.5956 22.7069 29.5498 15.9202C29.4811 5.26503 29.6643 6.19255 26.9839 3.43262C24.2576 0.65007 24.5325 0.695315 15.1394 0.695315H7.21261L6.09002 1.2835ZM21.2793 4.29227L22.9517 4.428L4.28014 22.9557L4.21141 13.9294C4.1885 8.36429 4.07395 4.81258 3.93649 4.67685C3.79903 4.54112 3.70739 4.36014 3.70739 4.26965C3.70739 4.06605 18.805 4.06605 21.2793 4.29227ZM25.93 16.3047V25.8061H6.57113L16.1933 16.3047C21.4855 11.079 25.8384 6.80335 25.8613 6.80335C25.9071 6.80335 25.93 11.079 25.93 16.3047Z" fill="#fff"></path><path d="M42.7688 1.23825C42.1503 1.53234 41.0048 2.25626 40.2716 2.86706C39.4698 3.52311 38.5305 4.06605 37.9807 4.20178L37.0413 4.428L36.9726 16.6215C36.9497 25.4442 36.9955 28.9054 37.1788 29.109C37.3392 29.3126 37.9348 29.4257 38.7825 29.4257C39.8593 29.4257 40.1571 29.3352 40.3633 28.9959C40.5007 28.747 40.5924 26.9599 40.5924 24.8107V21.0554H52.8263L61.3488 29.4257H63.4565C65.4955 29.4257 65.5642 29.4031 65.5642 28.928C65.5642 28.5661 64.3958 27.2766 61.7383 24.6298C59.4931 22.4128 58.0498 20.8292 58.2789 20.8292C58.485 20.8292 59.1953 20.7161 59.8596 20.5804C60.8906 20.3541 61.303 20.0827 62.9754 18.4991C65.7933 15.8297 65.8849 15.6034 65.9766 11.2826C66.0911 6.59975 65.9079 6.03419 63.5252 3.56835C60.6844 0.627448 61.0051 0.695315 51.7037 0.695315C44.006 0.695315 43.8914 0.695315 42.7688 1.23825ZM59.5618 4.24702L62.3568 4.38276V17.4359H40.5924V11.1242C40.5924 7.14269 40.5007 4.74472 40.3633 4.65423C40.2487 4.58636 40.1342 4.428 40.1342 4.29227C40.1342 4.06605 55.2318 3.99818 59.5618 4.24702Z" fill="#fff"></path><path d="M73.4681 1.21563C73.3765 1.50972 73.3536 4.13391 73.3994 7.0522C73.4681 13.1602 73.4911 13.2281 75.7362 15.3772L76.9963 16.6215L75.782 17.8883C73.6514 20.1053 73.4911 20.5577 73.3994 24.9691C73.3307 27.7064 73.3994 28.8601 73.5827 29.0864C73.9263 29.4936 76.3548 29.5388 76.7443 29.1542C76.9504 28.9506 77.0192 27.4349 77.0192 23.7249V18.567H88.3367L99.3793 29.4257H101.372C102.999 29.4257 103.411 29.3578 103.526 29.0637C103.618 28.8149 102.22 27.2766 98.5774 23.6796C95.8053 20.9423 93.5143 18.5896 93.5143 18.4991C93.5143 18.4086 94.0642 18.3407 94.7286 18.3407C96.4697 18.3407 97.9818 17.5263 99.7917 15.6034C102.151 13.0697 102.106 13.2733 102.106 6.57713V0.808427L100.662 0.74056C99.7917 0.695315 99.0814 0.785805 98.8753 0.944161C98.6232 1.14776 98.5545 2.43724 98.5545 8.0702V14.9474H77.0192V8.09282C77.0192 3.07066 76.9504 1.17038 76.7443 0.966783C76.5839 0.808427 75.8508 0.695315 75.026 0.695315C73.7201 0.695315 73.5827 0.74056 73.4681 1.21563Z" fill="#fff"></path><path d="M115.76 1.14776C115.187 1.41923 114.065 2.16577 113.24 2.82182C112.278 3.59098 111.407 4.08867 110.88 4.17916C110.239 4.29227 109.987 4.47325 109.895 4.83521C109.826 5.10667 109.78 9.35968 109.826 14.2687C109.895 24.6976 109.712 23.8832 112.69 26.7336C115.554 29.5162 114.385 29.3126 126.963 29.3805C132.942 29.4257 138.074 29.3805 138.372 29.3126C138.83 29.1995 138.876 29.0637 138.876 27.7743C138.876 26.9599 138.761 26.236 138.601 26.0776C138.395 25.874 135.256 25.8061 125.886 25.8061H113.446V16.7572H125.199C134.042 16.7572 137.02 16.6893 137.226 16.4857C137.387 16.3274 137.501 15.6261 137.501 14.9022C137.501 13.8615 137.41 13.5674 137.066 13.3638C136.768 13.2281 132.576 13.1376 125.038 13.1376H113.446V9.04296C113.446 6.53188 113.354 4.78996 113.194 4.49587L112.942 4.04342L125.68 4.11129C134.729 4.17916 138.464 4.13391 138.647 3.95293C138.784 3.8172 138.876 3.09329 138.83 2.25626L138.761 0.808428L127.765 0.763183C117.18 0.695316 116.722 0.717938 115.76 1.14776Z" fill="#fff"></path></svg>
                        </div>

                    </div>
                    <p className=' font-bold text-3xl p-4 mt-10'>
                        قالب وردپرس تجاری و شرکتی
                    </p>

                    <div className='flex gap-44 max-sm:gap-10'>

                        <ul className='p-2 mt-36 '>
                            <li className='py-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 320 512"><path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            </li>
                            <li className='py-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </li>
                            <li className='py-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </li>
                            <li className='py-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                            </li>
                        </ul>

                        <ul className='text-right list-none relative w-[600px] mt-10 p-2'>
                            <li className='border-b border-b-gray-500 py-4'>
                                <input className=' absolute hidden' type="checkbox" id="d0" name="r"></input>
                                <label className='flex justify-between' htmlFor="d0">
                                    <p className='font-bold text-lg'> خانه </p>
                                    <svg className='mt-2' viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" ><path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path></svg>
                                </label>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden"> صفحه اصلی </div>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden"> موسسه حقوقی  </div>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">  زمینه </div>
                            </li>

                            <li className='border-b border-b-gray-500 py-4'>
                                <input className='hidden absolute' type="checkbox" id="d1" name="r"></input>
                                <label className='flex justify-between' htmlFor="d1">
                                    <p className='font-bold text-lg'> صفحات  </p>
                                    <svg className='mt-2' viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" ><path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path></svg>
                                </label>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">  درباره شرکت  </div>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">  خدمات ما   </div>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">  نماس با ما </div>
                            </li>

                            <li className='border-b border-b-gray-500 py-4 '>
                                <input className='hidden absolute' type="checkbox" id="d2" name="r"></input>
                                <label className='flex justify-between' htmlFor="d2">
                                    <p className='font-bold text-lg'>   وبلاگ </p>
                                    <svg className='mt-2' viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" ><path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path></svg>
                                </label>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">   نوار کناری وبلاگ  </div>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">   شبکه وبلاگ   </div>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">   پست تک  </div>
                            </li>

                            <li className='border-b border-b-gray-500 py-4 '>
                                <input className='hidden absolute' type="checkbox" id="d3" name="r"></input>
                                <label className='flex justify-between' htmlFor="d3">
                                    <p className='font-bold text-lg'>   نمونه کارها  </p>
                                    <svg className='mt-2' viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" ><path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path></svg>
                                </label>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">    استاندارد تمونه کارها   </div>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden">     چرخ فلک تموته کارها  </div>
                                <div className="answer transition-all duration-300 ease-in-out p-2 hidden" >   تموته کارها تک   </div>
                            </li>

                            <li className='border-b border-b-gray-500 py-4 font-bold text-lg'> امکانات </li>
                        </ul>


                    </div>
                </div>
            </div >


        </header >
    );
};

export default HeaderComponent;
