import FadeInContainer from '@/app/components/fadeInContainer'
import { grenzeGotisch } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

export default function MejaMakan() {
  return (
    <div className='flex flex-col py-20 px-10 lg:px-48'>
      <div >
        <FadeInContainer className='flex flex-col justify-between w-full items-center gap-2 md:flex-row md:items-start'>
          {/* Title */}
          <div className='order-1 lg:hidden flex flex-col items-center'>
            <p className='text-5xl text-center lg:text-start'>Teh Botol Sosro
              Design Competition</p>
            <p className={`${grenzeGotisch.className} text-2xl`}>Packaging Design</p>

          </div>

          {/* Left Side (desktop grouping) */}
          <div className='flex flex-col order-3 lg:order-1 lg:pr-10'>

            {/* Title (desktop only) */}
            <div className='hidden lg:flex flex-col'>

              <p className='text-5xl text-center lg:text-start '>Teh Botol Sosro<br />
                Design Competition</p>
              <p className={`${grenzeGotisch.className} text-2xl`}>Packaging Design</p>

            </div>


            {/* Description */}
            <p className={`mt-2 ${grenzeGotisch.className} text-justify text-2xl`}>

              <br />
              This illustration was created for the Teh Botol Sosro 2026 design competition: Kembali ke Tradisi Asli Indonesia, with the overarching theme of Indonesian values, traditions, and cultural heritage.
            </p>

          </div>

          {/* Image */}

          <Image width={600} height={400}
            id='borderimg'
            src="/portfolio/mejaMakan/mejaMakan1.png"
            alt=""
            className=' w-[600px] h-auto order-2 lg:order-2'
          />
        </FadeInContainer>
      </div>
      <div className='flex flex-col mt-10'>
        <FadeInContainer>
          <p className={`${grenzeGotisch.className} order-2 lg:order-1 lg:w-1/2 text-justify text-2xl`}>
            <br />
            This illustration was created for the Teh Botol Sosro 2026 design competition: Kembali ke Tradisi Asli Indonesia, with the overarching theme of Indonesian values, traditions, and cultural heritage.
          </p>
        </FadeInContainer>
        <FadeInContainer>
          <div className='flex order-1 lg:order-2  flex-col mt-5 lg:flex-row gap-5'>
            <Image width={300} height={200}
              src="/portfolio/mejaMakan/mejaMakan2.png"
              alt=""
              className=' w-full h-auto'
            />
            <Image width={300} height={200}
              src="/portfolio/mejaMakan/mejaMakan3.png"
              alt=""
              className=' w-full h-auto'
            />
            <Image width={300} height={200}
              src="/portfolio/mejaMakan/mejaMakan4.png"
              alt=""
              className=' w-full h-auto'
            />
          </div>
        </FadeInContainer>
      </div>
      <div className='flex flex- gap-5 lg:flex-row mt-10 pb-20'>
        <div className='flex flex-col basis-1/2 gap-5'>
          <FadeInContainer>
            <Image width={600} height={400}
              src="/portfolio/mejaMakan/mejaMakan5.png"
              alt=""
              className=' w-full h-auto'
            />
            <Image width={600} height={400}
              src="/portfolio/mejaMakan/mejaMakan6.png"
              alt=""
              className=' w-full h-auto'
            />
          </FadeInContainer>
        </div>

        <div className='flex flex-col basis-1/2 gap-5 relative justify-center items-center'>
          <FadeInContainer>
            <Image width={600} height={400}
              src="/portfolio/mejaMakan/mejaMakan7.png"
              alt=""
              className=' w-full h-auto'
            />
            <p className={`mt-2 ${grenzeGotisch.className} text-justify text-2xl`}>
              This Illustration shows a group of people wearing a mix of traditional attire from various regions, sitting together and enjoying a shared meal surrounded by diverse Indonesian dishes. The composition highlights food as a cultural bridge, emphasizing how Indonesia’s rich diversity can become a unifying force.
            </p>
          </FadeInContainer>
        </div>
        <Image width={300} height={600} src="/main/aboutCornerBottomFlower.svg" className='w-[55%] lg:w-[25%] h-auto absolute bottom-[-5%] ' alt="" />
        <Image width={300} height={100} src="/portfolio/portfolioBottomBorder.svg" className='w-[55%] lg:w-[25%] h-auto absolute bottom-0 left-[50%] translate-x-[-50%]' alt="" />
        <Image width={300} height={600} src="/main/aboutCornerBottomFlower.svg" className='w-[55%] lg:w-[25%] h-auto absolute bottom-[-5%] scale-x-[-1]' alt="" />
      </div>
    </div>
  )
}


