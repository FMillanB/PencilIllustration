import React, {useState, useEffect} from 'react'
import { banner, instagram, facebook } from '../assets'
import styles from "./components.module.css"

const Main = () => {
  return (
    <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6'>
        <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>

            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-dancing font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[72px]'>
                    Pencil <br className='sm:block hidden'/> {" "}
                    <span className=''>Illustration</span> <br className='sm:block hidden'/> {" "}
                </h1>
            </div>

            <p className={`font-poppins font-normal text-[18px] leading-[30.8px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna eros, blandit eu congue eget, 
            pulvinar ac velit. Suspendisse consequat mauris non urna elementum venenatis. 
            Suspendisse id elit non nunc rhoncus ultricies.
            </p>

        </div>

        <div className={`${styles.container} md:my-0`}>
          <img src={banner} alt="pencilillustration" className='w-[100%} h-[100%] relative z-[5] px-0 py-0'/>
          <div className='flex flex-row items-center py-0 m-0'>
            <img src={instagram} alt="" className='px-4 w-[60px] py-2 m-0 cursor-pointer'/>
            <img src={facebook} alt="" className='px-4 w-[60px] py-2 m-0 cursor-pointer' />
          </div>
        </div>
    </section>
  )
}

export default Main