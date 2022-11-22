import React from 'react'
import style from './components.module.css'

const ColabCard = ({ title, description, dark }) => (
    <div className={`flex justify-between flex-col px-10 py-8 rounded-[20px] w-[250px] ml-0 mr-0 my-5 ${dark ? style.colabcard_dark : style.colabcard_light} hover:scale-105 ${style.card} cursor-default`}>
        <div className='flex flex-row'>
        <div className={`flex flex-col ml-0`}>
            <h4 className='font-poppins font-semibold text-[20px] leading-[32px]'>{title}</h4>
            <p className='font-poppins font-normal text-[16px] leading-[24px]'>{description}</p>
        </div>
        </div>
    </div>
)

export default ColabCard