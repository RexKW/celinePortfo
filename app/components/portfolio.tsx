import Link from 'next/link'
import React from 'react'

function Portfolio() {
  return (
    <div id='portfolio' className=' min-h-screen min-w-screen relative z-2 md:gap-5 flex flex-col justify-items-center items-center p-10'>
      <div className='flex flex-col md:flex-row gap-5 items-center md:items-end'>
        <Link href="/portfolio?project=0"><div id='borderimg' className='w-75 h-75 flex justify-center items-center bg-[url(/main/portfolioSection/webSurfer.png)] bg-cover bg-center bg-no-repeat'></div></Link>
        <Link href="/portfolio?project=1"><div id='borderimg' className='w-75 h-90 md:mb-10 flex justify-center items-center bg-[url(/main/portfolioSection/chromaClub.png)] bg-cover bg-center bg-no-repeat'></div></Link>
        <Link href="/portfolio?project=2"><div id='borderimg' className='w-75 md:w-100 h-75 flex justify-center items-center bg-[url(/main/portfolioSection/mejaMakan.png)] bg-cover bg-center bg-no-repeat'></div></Link>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-5'>
        <Link href="/portfolio?project=3"><div id='borderimg' className='w-75 md:w-100 h-50 flex justify-center items-center bg-[url(/main/portfolioSection/personalWorks.png)] bg-cover bg-center bg-no-repeat'></div></Link>
        <Link href="/portfolio?project=4"><div id='borderimg' className='w-75 h-75 md:mt-2 flex justify-center items-center bg-[url(/main/portfolioSection/commissions.png)] bg-cover bg-center bg-no-repeat'></div></Link>
      </div>
      <img src="/main/portfolioLeafTopCorner.svg" className='w-[20%] hidden lg:absolute lg:flex lg:w-[5%] z-2 top-5 -rotate-20 left-0 lg:left-10' alt="" />
      <img src="/main/portfolioLeafTopCorner.svg" className='w-[20%] hidden lg:absolute lg:flex lg:w-[5%] z-2 top-5 right-0 rotate-20  lg:right-10 scale-x-[-1]' alt="" />
      <img src="/main/portfolioFlowerBottomCorner.svg" className='w-[20%] hidden lg:absolute lg:flex lg:w-[15%] z-2 bottom-5 left-0 lg:left-10' alt="" />
      <img src="/main/portfolioFlowerBottomCorner.svg" className='w-[20%] hidden lg:absolute lg:flex lg:w-[15%] z-2 bottom-5 right-0 lg:right-10 scale-x-[-1]' alt="" />
    </div>
  )
}

export default Portfolio
