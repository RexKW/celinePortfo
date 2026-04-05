import { grenzeGotisch } from '@/app/fonts'
import React from 'react'

export default function MejaMakan() {
  return (
    <div className='flex flex-col py-20 px-10 md:px-48'>
      <div className='flex flex-col justify-between w-full items-center gap-2 md:flex-row md:items-start'>

        {/* Title */}
        <div className='order-1 md:hidden flex flex-col items-center'>
          <p className='text-5xl'>Aloysius & Valtair</p>
          <p className={`${grenzeGotisch.className} text-2xl`}>Character Scene Illustration</p>
        </div>

        {/* Left Side (desktop grouping) */}
        <div className='flex flex-col order-3 md:order-1 md:w-[35%]'>

          {/* Title (desktop only) */}
          <div className='hidden md:flex flex-col'>
            <p className='text-5xl'>Aloysius & Valtair</p>
            <p className={`${grenzeGotisch.className} text-2xl`}>Character Scene Illustration</p>
          </div>

          {/* Description */}
          <p className={`mt-2 ${grenzeGotisch.className} text-justify text-2xl md:text-left`}>
            <br />
            The client provided detailed descriptions of two original characters along with references for their personalities, visual traits, and relationship dynamic. The goal was to illustrate a tense yet intimate dance scene set in a warm-lit ballroom environment.
          </p>

        </div>

        {/* Image */}
        <img
          src=""
          alt=""
          className='bg-white w-[300px] md:w-[600px] h-[200px] md:h-[400px] order-2 md:order-2'
        />
      </div>
      <div>
        
      </div>
    </div>
  )
}


