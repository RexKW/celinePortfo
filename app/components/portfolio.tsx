import Link from 'next/link'
import React from 'react'
import { grenzeGotisch } from '../layout'

function Portfolio() {
  return (
    <div id='portfolio' className=' min-h-screen text-white min-w-screen relative z-2 md:gap-5 flex flex-col justify-items-center items-center p-10'>
      <div className='flex flex-col justify-center items-center group'>
       <div className='flex flex-col md:flex-row gap-5 items-center md:items-end'>
        <Link href="/portfolio?project=0">
          <div id='borderimg' className='card w-75 h-75 transition-all duration-300 ease-in-out hover:!scale-110 flex justify-center items-center bg-[url(/main/portfolioSection/webSurfer.png)] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat'>
            <div className='flex flex-col relative w-full h-full p-3 justify-end items-start'>
              <div className='flex flex-col relative z-3'>
                <p className='text-5xl '>Websurfer</p>
                <p className={`${grenzeGotisch.className}`}>IP DEVELOPMENT</p>
              </div>
              <div className='bg-linear-to-b z-2 absolute  bottom-0 left-0 from-transparent to-black w-full h-full transition animation duration-200 active:to-transparent active:from-white active:bg-radial'></div>
            </div>
          </div>
        </Link>
        <Link href="/portfolio?project=1">
          <div id='borderimg' className='card w-60 h-72 transition-all duration-300 ease-in-out hover:!scale-110 md:mb-20 flex justify-center items-center bg-[url(/main/portfolioSection/chromaClub.png)] flex flex-col justify-center items-center  bg-cover bg-center bg-no-repeat'>
            <div className='flex flex-col relative w-full h-full p-3 justify-end items-start'>
              <div className='flex flex-col relative z-3'>
                <p className='text-5xl '>Chroma<br/>Club</p>
                <p className={`${grenzeGotisch.className} leading-none`}>Character Design<br/>for Branding</p>
              </div>
              <div className='bg-linear-to-b z-2 absolute bottom-0 left-0 from-transparent to-black w-full h-full transition animation duration-200 active:to-transparent active:from-white active:bg-radial'></div>
            </div>
          </div>
        </Link>
        <Link href="/portfolio?project=2">
          <div id='borderimg' className='card w-75 md:w-100 transition-all duration-300 ease-in-out hover:!scale-110 h-75 flex justify-center items-center bg-[url(/main/portfolioSection/mejaMakan.png)] flex flex-col justify-center items-center  bg-cover bg-center bg-no-repeat'>
            <div className='flex flex-col relative w-full h-full p-3 justify-end items-start'>
              <div className='flex flex-col relative z-3'>
                <p className='text-5xl '>Meja<br/>Makan</p>
                <p className={`${grenzeGotisch.className}`}>Teh Botol Sosro Packaging</p>
              </div>
              <div className='bg-linear-to-b z-2 absolute bottom-0 left-0 from-transparent to-black w-full h-full transition animation duration-200 active:to-transparent active:from-white active:bg-radial'></div>
            </div>
          </div>
        </Link>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-5'>
        <Link href="/portfolio?project=3">
          <div id='borderimg' className='card w-75 md:w-100 transition-all duration-300 ease-in-out hover:!scale-110 h-60 flex justify-center items-center bg-[url(/main/portfolioSection/personalWorks.png)] flex flex-col justify-center items-center  bg-cover bg-center bg-no-repeat'>
            <div className='flex flex-col relative w-full h-full p-3 justify-end items-start'>
              <div className='flex flex-col relative z-3'>
                <p className='text-5xl '>Personal<br/>Works</p>
                <p className={`${grenzeGotisch.className}`}>2D Illustration & Personal IP</p>
              </div>
              <div className='bg-linear-to-b z-2 absolute bottom-0 left-0 from-transparent to-black w-full h-full transition animation duration-200 active:to-transparent active:from-white active:bg-radial'></div>
            </div>
          </div>
        </Link>
        <Link href="/portfolio?project=4">
          <div id='borderimg' className='card w-75 h-75  transition-all duration-300 ease-in-out hover:!scale-110 md:mt-2 flex justify-center items-center bg-[url(/main/portfolioSection/commissions.png)] flex flex-col justify-center items-center  bg-cover bg-center bg-no-repeat'>
            <div className='flex flex-col relative w-full h-full p-3 justify-end items-start'>
              <div className='flex flex-col relative z-3'>
                <p className='text-5xl '>Commissions</p>
                <p className={`${grenzeGotisch.className}`}>2D Illustration</p>
              </div>
              <div className='bg-linear-to-b z-2 absolute bottom-0 left-0 from-transparent to-black w-full h-full transition animation duration-200 active:to-transparent active:from-white active:bg-radial'></div>
            </div>
          </div>
        </Link>
      </div>
      </div>
     
      <img src="/main/portfolioLeafTopCorner.svg" className='w-[20%] hidden lg:absolute lg:flex lg:w-[5%] z-2 top-5 -rotate-20 left-0 lg:left-10' alt="" />
      <img src="/main/portfolioLeafTopCorner.svg" className='w-[20%] hidden lg:absolute lg:flex lg:w-[5%] z-2 top-5 right-0 rotate-20  lg:right-10 scale-x-[-1]' alt="" />
      <img src="/main/portfolioFlowerBottomCorner.svg" className='w-[20%] hidden lg:absolute lg:flex lg:w-[15%] z-2 bottom-5 left-0 lg:left-10' alt="" />
      <img src="/main/portfolioFlowerBottomCorner.svg" className='w-[20%] hidden lg:absolute lg:flex lg:w-[15%] z-2 bottom-5 right-0 lg:right-10 scale-x-[-1]' alt="" />
    </div>
  )
}

export default Portfolio
