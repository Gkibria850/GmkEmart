import React, { useEffect, useState } from 'react';

const Offer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-08-12T12:15:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className='max-padd-container bg-banner bg-center bg-cover h-[555px] my-8 p-8 rounded-xl'>
      <div className='flex items-center flex-col gap-1 mt-40 max-w-xl'>
        <h3 className='uppercase medium-20'>Sales Fever</h3>
        <h2 className='uppercase bold-44'>20% off Everything</h2>
        <span className='italic font-ace'>Offer ends in</span>
        <div className='flex gap-x-7 mt-2'>
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} className='bg-white p-2 rounded-lg text-center'>
              <span className='font-bold text-4xl'>{timeLeft[unit]}</span>
              <span className='block capitalize'>{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
import React, { useContext } from 'react'
import { FaStar, FaHeart,FaMinus, FaPlus  } from 'react-icons/fa6'
import { ShopContext } from '../pages/context/ShopContext';
import { LuMoveUpRight } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const ProductMd = (props) => {
    const {product} = props;
    const {cartItems,addToCart,removeFromCart} = useContext(ShopContext);
    const navigate = useNavigate();

  return (
    <section className='max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4'>
        <div className='flex gap-x-2 xl:flex-1 py-5'>
            <div className='flexCenter flex-col gap-[7px] flex-wrap'>
                 <img
                 src={product.image}
                 alt='productImg'
                 className='max-h-[89px] rounded-lg bg-gray-20'
                 />
                 <img
                 src={product.image}
                 alt='productImg'
                 className='max-h-[89px] rounded-lg bg-gray-20'
                 />
                 <img
                 src={product.image}
                 alt='productImg'
                 className='max-h-[89px] rounded-lg bg-gray-20'
                 />
                 <img
                 src={product.image}
                 alt='productImg'
                 className='max-h-[89px] rounded-lg bg-gray-20'
                 />
            </div>
            <div className='max-h-[377px] w-auto flex'>
                 <img
                 src={product.image}
                 alt='productImg'
                 className=' rounded-lg bg-gray-10'
                 />
            </div>
        </div>
        <div className='flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl'>
            <h4 className='bold-28'>{product.name}</h4>
            <div className='flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3'>
              <div>${product.price}.00</div>
              <div className='flex items-start gap-x-1 medium-16'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <p>(213)</p>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-x-10 gap-y3 my-4'>
                <div>
                    <h4 className='bold-16'>Select Color</h4>
                    <div className='flex gap-3 my-3'>
                        <div className='h-10 w-10 flexcenter cursor-pointer rounded-sm bg-secondaryRed border-b-black active-color'>
                            </div>
                        <div className='h-10 w-10 flexcenter cursor-pointer rounded-sm bg-secondaryYellow border-b-black'>
                            </div>
                        <div className='h-10 w-10 flexcenter cursor-pointer rounded-sm bg-secondaryBlue border-b-black '>
                            </div>
                        <div className='h-10 w-10 flexcenter cursor-pointer rounded-sm bg-secondaryGreen border-b-black '>
                            </div>

                            </div>
                        </div>
                           <div>
                            <h4 className='bold-16'>Select Size</h4>
                            <div className='flex gap-3 my-3'>
                                <div className='border-[1.5px] border-slate-900/50 h-10 w-10 flexCenter cursor-pointer rounded-sm'>
                                   S 
                                </div>
                                <div className='border-[1.5px] border-slate-900/50 h-10 w-10 flexCenter cursor-pointer rounded-sm'>
                                  M
                                </div>
                                <div className='border-[1.5px] border-slate-900/50 h-10 w-10 flexCenter cursor-pointer rounded-sm'>
                                  L
                                </div>
                                <div className='border-[1.5px] border-slate-900/50 h-10 w-10 flexCenter cursor-pointer rounded-sm'>
                                   Xl
                                </div>

                            </div>
                            </div>
                    </div>
                </div>
            </div>
           
        </div>
    </section>
  )
}

export default ProductMd