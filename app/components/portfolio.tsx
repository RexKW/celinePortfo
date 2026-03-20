import Link from 'next/link'
import React from 'react'

function Portfolio() {
  return (
    <div id='portfolio' className=' min-h-screen min-w-screen relative z-2 md:gap-5 flex flex-col justify-items-center items-center p-10'>
      <div className='flex flex-col md:flex-row gap-5 items-center md:items-end'>
        <Link href="/portfolio?project=0"><div className='w-75 h-75 flex justify-center items-center bg-white'></div></Link>
        <Link href="/portfolio?project=1"><div className='w-75 h-100 md:mb-10 flex justify-center items-center bg-white'></div></Link>
        <Link href="/portfolio?project=2"><div className='w-75 md:w-100 h-75 flex justify-center items-center bg-white'></div></Link>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-5'>
        <Link href="/portfolio?project=3"><div className='w-75 md:w-100 h-50 flex justify-center items-center bg-white'></div></Link>
        <Link href="/portfolio?project=4"><div className='w-75 h-75 md:mt-2 flex justify-center items-center bg-white'></div></Link>
      </div>
    </div>
  )
}

export default Portfolio
