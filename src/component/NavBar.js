import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const ShoeCompanyNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-16 mx-auto px-4 text-font_color'>
      <h1 className='text-3xl font-bold text-[#38bdf8]'>Shoe Company</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex space-x-6'>
        <li className='h5'>Home</li>
       {/* <li className='h5'>Men's</li>
        <li className='h5'>Women's</li>
  <li className='h5'>Kids</li>*/}
        <li className='h5'>Products</li>
        <li className='h5'>About Us</li>
        
      </ul>

      {/* Mobile Navigation */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={`md:hidden fixed top-0 right-0 w-[60%] h-full bg-[#ffff] border-r border-r-gray-900 z-50 transition-transform transform ${nav ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <h1 className='text-3xl font-bold text-[#38bdf8] p-4'>Shoe Company</h1>
        <li className='border-b border-gray-600 p-4'>Home</li>
        {/*<li className='border-b border-gray-600 p-4'>Men's</li>
        <li className='border-b border-gray-600 p-4'>Women's</li>
<li className='border-b border-gray-600 p-4'>Kids</li>*/}
         <li className='border-b border-gray-600 p-4'>Products</li>
        <li className='border-b border-gray-600 p-4'>About Us</li>
       
      </ul>
    </div>
  );
};

export default ShoeCompanyNavbar;
