import React from 'react'
import { banner, instagram, facebook } from '../assets'
import styles from "./components.module.css"
import { colabs } from '../constansts'
import ColabCard from './ColabCard'

const About = ({dark}) => {
  return (
    <section id='products' className={`flex md:flex-col flex-col sm:py-16 py-6`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className='flex-1 font-dancing font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[72px]'>
                Quienes somos
            </h2>
        </div>

        <div className='flex md:flex-row flex-col sm:py-16 py-6'>
            <div className={`${styles.container} md:my-0`}>
                <div className={`${styles.container} md:my-0`}>
                    <img src={banner} alt="pencilillustration" className='w-[100%} h-[100%] relative z-[5] px-0 py-0'/>
                </div>
            </div>

            <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>

                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-dancing font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[72px]'>
                        Artista
                    </h1>
                </div>

                <p className={`font-poppins font-normal text-[18px] leading-[30.8px]`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna eros, blandit eu congue eget, 
                pulvinar ac velit. Suspendisse consequat mauris non urna elementum venenatis. 
                Suspendisse id elit non nunc rhoncus ultricies.
                </p>

            </div>
        </div>


        <div className='flex md:flex-row flex-col sm:py-16 py-6 px-32'>
            <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>

                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-dancing font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[72px]'>
                        Colaboradores
                    </h1>
                </div>

                <div className='w-full flex justify-between items-center md:flex-row flex-col flex-wrap mb-3 relative z-[1] '>
                    {colabs.map((card) => (
                        <ColabCard key={card.id} {...card} dark={dark}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About