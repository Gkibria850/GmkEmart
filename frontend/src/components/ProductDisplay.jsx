import React, { useContext } from 'react';
import Item from './Item';
import { ShopContext } from '../pages/context/ShopContext';

const ProductDisplay = ({category}) => {
  const { all_products } = useContext(ShopContext);

  return (
      <section className='max-padd-container pt-16' id='shop'>
        <div className='flexBetween pb-20'>
            <h4 className='text-4xl font-extrabold leading-none font-ace flex flex-col'>
            <span className='medium-16'>see</span>
            Product
            </h4>
        </div>
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8'>
            {all_products.map((product) => {
                if(category === "all" || category=== product.category){
                    return (
                <div key={product._id}>
                <Item product={product} />
                </div>
                )
                }
                
               })}
            </div>
      
      </section>
  )
}
// 2:16
export default ProductDisplay
