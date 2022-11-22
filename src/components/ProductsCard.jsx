import React from 'react'
import { quotes } from '../assets'
import style from './components.module.css'

const ProductsCard = ({ title, description, img, dark }) => (
    <div className={`flex justify-between flex-col px-10 py-8 rounded-[20px] w-[250px] md:ml-10 sm:ml-5 ml-0 md:mr-10 sm:mr-5 mr-0 my-5 ${dark ? 'bg-white' : 'bg-dark'} hover:scale-105 ${style.card}`}>
        <img src={img} alt="" className='opacity-100'/>
        <div className='flex flex-row'>
            <div className={`flex flex-col ml-4 ${dark ? "text-black" : "text-white"}`}>
                <h4 className='font-poppins font-semibold text-[20px] leading-[32px]'>{title}</h4>
                <p className='font-poppins font-normal text-[16px] leading-[24px]'>{description}</p>
            </div>
        </div>
    </div>
)

export default ProductsCard