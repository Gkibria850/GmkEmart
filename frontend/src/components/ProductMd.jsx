import React, { useContext, useState } from 'react';
import { FaStar, FaHeart, FaMinus, FaPlus } from 'react-icons/fa6';
import { ShopContext } from '../pages/context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { LuMoveUpRight } from "react-icons/lu";

const ProductMd = (props) => {
  const { product } = props;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const quantity = cartItems[product._id] || 0;

  return (
    <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
      {/* Image Gallery */}
      <div className="flex gap-x-2 xl:flex-1 py-5">
        <div className='flexCenter flex-col gap-[7px] flex-wrap'>
          <img src={product.image} alt='productImg' className='max-h-[89px] rounded-lg bg-gray-20' />
          <img src={product.image} alt='productImg' className='max-h-[89px] rounded-lg bg-gray-20' />
          <img src={product.image} alt='productImg' className='max-h-[89px] rounded-lg bg-gray-20' />
          <img src={product.image} alt='productImg' className='max-h-[89px] rounded-lg bg-gray-20' />
        </div>
        <div className='max-h-[377px] w-auto flex'>
          <img src={product.image} alt='productImg' className='rounded-lg bg-gray-10' />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-4 rounded-xl">
        <h4 className="bold-28">{product.name}</h4>

        <div className="flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3">
          <div>${product.price}.00</div>
          <div className="flex items-start gap-x-1 medium-16">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <p className="ml-1 text-sm">(213)</p>
          </div>
        </div>

        {/* Color & Size Options */}
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-4">
          {/* Colors */}
          <div>
            <h4 className="bold-16 mb-1">Select Color</h4>
            <div className="flex gap-3 my-2">
              {[
                { color: 'red', className: 'bg-secondaryRed' },
                { color: 'yellow', className: 'bg-secondaryYellow' },
                { color: 'blue', className: 'bg-secondaryBlue' },
                { color: 'green', className: 'bg-secondaryGreen' },
              ].map(({ color, className }) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-10 w-10 cursor-pointer rounded-sm border border-black ${className} ${
                    selectedColor === color ? 'ring-2 ring-black' : ''
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h4 className="bold-16 mb-1">Select Size</h4>
            <div className="flex gap-3 my-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border-[1.5px] border-slate-900/50 h-10 w-10 flexCenter cursor-pointer rounded-sm ${
                    selectedSize === size ? 'bg-slate-900 text-white' : 'text-black'
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add/Remove Cart */}
        <div className="flex mb-8 max-w-[555px] flex-wrap gap-3 mt-6">
          <button className="btn-secondary rounded-sm !px-4">
            <FaHeart />
          </button>

          <button
            onClick={() => addToCart(product._id)}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:opacity-90"
            disabled={!selectedColor || !selectedSize}
          >
            Go to Cart
            <LuMoveUpRight />
          </button>

          {!cartItems[product._id] ? (
            <FaPlus
              onClick={() => addToCart(product._id)}
              className="bg-tertiary text-white rounded-sm h-[38px] w-[38px] p-2 cursor-pointer"
            />
          ) : (
            <div className="bg-tertiary text-white rounded-sm flexCenter gap-2">
              <FaMinus
                onClick={() => removeFromCart(product._id)}
                className="h-8 w-8 p-2 cursor-pointer"
              />
              <p className="text-white pr-2 w-3">{cartItems[product._id]}</p>
              <FaPlus
                onClick={() => addToCart(product._id)}
                className="rounded-sm bg-secondary h-8 w-8 p-1 mr-1 cursor-pointer"
              />
            </div>
          )}
        </div>

        <p>
          <span className="medium text-tertiary">Tags :</span> Women | Jacket | winter
        </p>
        <p>
          <span className="medium text-tertiary">Tags :</span> Modern | New Arrivals
        </p>
      </div>
    </section>
  );
};

export default ProductMd;
