import React from 'react'
import { Link } from 'react-router-dom'
 import SocialIcons from './SocialIcons';
const Footer = () => {
  return (
    <footer id='contact' className='bg-tertiary max-padd-container text-white py-12 rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='flex flex-col items-center md:items-start'>
          <Link to={'/'} className='bold-24 mb-4'>
          <h3>GMK<span className='text-secondary'>Emart</span></h3>
          </Link>
          <p className='text-center mb:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel adipisci quaerat sapiente inventore mollitia rem non qui, sunt nostrum.</p>
        </div>

        <div className='flex flex-col items-center md:items-start'>
          <h4 className='bold-24 mb-4'>Quick Link </h4>
            <ul className='space-y-2 regular-15 text-gray-30'>
              <li><a href="/" className='hover:text-secondary'>Home</a></li>
              <li><a href="/categories" className='hover:text-secondary'>Categories</a></li>
              <li><a href="/shop" className='hover:text-secondary'>Shop</a></li>
              <li><a href="/contact" className='hover:text-secondary'>Contact Us</a></li>
            </ul>
        
        </div>
        <div className='flex flex-col items-center md:items-start'>
              <h4 className='text-lg mb-4'>Contact Us </h4>
              <p>Email: <a href="" className='hover:text-secondary'>support@gmkemart.com</a> </p>
              <p>Phone: <a href=""className='hover:text-secondary'>01912000000</a> </p>
              <p>Address: 62/3 purana palton, Dhaka, Banglagesh </p>
        </div>
      </div>
        <div className="flex flex-col items-center mt-8 px-4 text-white">
          <SocialIcons />

          <hr className="h-px w-full max-w-screen-md my-4 border-t border-white/30" />

          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} <span className="font-semibold">GMKEmart</span> | All rights reserved.
          </p>
        </div>

     
    </footer>
  )
}

export default Footer