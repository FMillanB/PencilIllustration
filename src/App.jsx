import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import style from './App.module.css'
import { Main, Products, About, Footer } from './components'
import {navLinks} from './constansts/index';
import { close, menu, logobanner, logobannerlight, list, moon } from './assets';
import {Switch, Collapse} from "@mui/material"
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#000000',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    borderRadius: 20 / 2,
  },
}));

function App() {
  const [dark, setDark] = useState(false)
  const [responsive, setResponsive] = useState(false)

  return (
    <div className={`${dark ? "bg-dark text-white" : " bg-light text-black"} w-full overflow-hidden`}>
      <div className={`sm:px-16 px-6 flex justify-center items-center ${dark ? "bg-dark-nav" : "bg-light-nav"}`}>
        <div className='xl:max-w-[1280px] w-full'>
          <nav className='w-full flex py-6 justify-between items-center'>
            <div className={style.logoa}>
              <img src={`${dark ? logobannerlight : logobanner}`} alt="pencilillustration"/> 
              <span className='font-dancing'>pencilIllustration</span>
            </div>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>

              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} onChange={() => setDark((prev) => !prev)}/>}
              />
              
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${style.navLinks} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                  <a href={`#${nav.id}`} className={`border-t-4`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} onChange={() => setDark((prev) => !prev)}/>}
              />
              <img src={responsive ? close : list} alt="menu" className='w-[28px] h-[28px] object-contain fill-black' onClick={() => setResponsive((prev) => !prev)}/>

              <div className={`${responsive ? 'flex' : 'hidden'} ${dark ? 'bg-[#4b3a33] text-white' : 'bg-black text-white'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
                <ul className=' list-none flex flex-col justify-end items-center flex-1'>
                  {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                      <a href={`#${nav.id}`}>
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className='flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Main />
          <Products dark={dark}/>
          <About dark={dark}/>
        </div>
      </div>

      <div className={`flex justify-center items-start ${dark ? "bg-dark-nav text-white" : "bg-light-nav text-black"}`}>
            <Footer dark={dark} />
          </div>
    </div>
  )
}

export default App
