import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../constansts'
import ProductsCard from './ProductsCard'

const Products = ({dark}) => {
  return (
    <section id='products' className={`sm:py-16 py-6 flex justify-center items-center flex-col relative p-10 rounded-2xl ${dark ? 'bg-dark-nav' : 'bg-light-nav'}`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full ml-16'>
                Mis Productos
            </h2>

            <div className='w-full md:mt-0 mt-6'>
                <p className='font-poppins font-normal text-[18px] leading-[30.8px] text-left max-w-[450px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna eros.</p>
            </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row flex-col flex-wrap mb-3 relative z-[1] '>
            {products.map((card) => (
                <ProductsCard key={card.id} {...card} dark={dark} />
            ))}
        </div>
    </section>
  )
}

export default Products