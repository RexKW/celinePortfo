import { grenzeGotisch } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

export default function WebSurfer() {
  return (
    <div className='flex flex-col py-20 px-10 md:px-48'>
      <div className='flex flex-col md:flex-row gap-10'>
        <Image width={600} height={700} src="/portfolio/webSurfers/webSurfers1.png" alt="" className='w-[600px] h-auto basis-2/5' />
        <div className='flex flex-col'>
          <p className='text-5xl'>WebSurfers</p>
          <p className={`text-2xl ${grenzeGotisch.className} text-justify`}>IP Development</p>
          <p className={`text-2xl ${grenzeGotisch.className} text-justify`}>WebSurfers is an original animated IP that explores internet safety through storytelling and visual worldbuilding.
            <br />
            <br />
            The project focuses on translating abstract internet concepts into a visual narrative world. Different layers of the internet are designed as distinct environments, each representing various aspects of online culture.</p>
        </div>
      </div>
      <div className='flex flex-col mt-10 lg:flex-row items-center justify-center'>

        <div className='flex flex-col'>
          <p className='text-5xl'>Concept</p>
          <p className={`text-2xl ${grenzeGotisch.className} text-justify`}>The story follows two sibling web surfers, Byte and Pix, who navigate the internet. As they travel through different layers of the web, they encounter digital threats, online cultures, and everyday situations that reflect real issues users face online.</p>
        </div>
        <Image width={600} height={700} src="/portfolio/webSurfers/webSurfers2.png" alt="" className='w-[600px] h-auto' />
      </div>
      <div className='flex flex-col w-full mt-20 md:flex-col'>
        <p className='text-5xl mb-5'>Exploration Stage</p>
        {/*desktop*/}
        <div className='hidden w-full lg:flex lg:flex-col gap-5'>
          <div className='flex w-full flex-row gap-5'>
            <Image width={400} height={300} src="/portfolio/webSurfers/webSurfers3.png" alt="" className='w-full h-[280px]' />
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers4.png" alt="" className='w-full h-[280px]' />
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers5.png" alt="" className='w-full h-[280px]' />
          </div>
          <div className='flex w-full flex-row gap-5'>
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers6.png" alt="" className='w-full h-auto' />
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers7.png" alt="" className='w-full h-auto' />
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers8.png" alt="" className='w-full h-auto' />
          </div>
        </div>

        {/*phone*/}
        <div className='lg:hidden w-full flex flex-col gap-2'>

          <div className='flex w-full flex-row gap-2'>
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers3.png" alt="" className='w-2/3 h-auto' />
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers4.png" alt="" className='w-1/3 h-auto' />
          </div>

          <div className='flex w-full flex-row gap-2'>
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers5.png" alt="" className='w-1/2 h-auto' />
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers6.png" alt="" className='w-1/2 h-auto' />
          </div>

          <div className='flex w-full flex-row gap-2'>
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers7.png" alt="" className='w-1/2 h-auto' />
            <Image width={200} height={300} src="/portfolio/webSurfers/webSurfers8.png" alt="" className='w-1/2 h-auto' />
          </div>
        </div>
        <p className={`text-2xl ${grenzeGotisch.className} text-justify`}>Byte and Pix were created to represent different ways people interact with the internet.
          <br /><br />
          Byte’s design draws from streetwear, skate culture, and techwear, reflecting a laid-back and trend-aware teen user. Pix’s maximalist aesthetic, inspired by decora and kidcore fashion, represents creativity, self-expression, and the chaotic energy of online spaces.
        </p>
      </div>
      <div className='flex flex-col mt-20'>
        <p className='text-5xl mb-5'>Final Lineup</p>
        <div className='hidden w-full lg:flex lg:flex-col gap-5'>
          <Image width={1200} height={300} src="/portfolio/webSurfers/webSurfers9.png" alt="" className='w-full h-auto' />
          <Image width={1200} height={300} src="/portfolio/webSurfers/webSurfers10.png" alt="" className='w-full h-auto' />
        </div>
        <div className='lg:hidden w-full flex flex-col gap-5'>
          <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers9Alt.png" alt="" className='w-full h-auto' />
          <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers10Alt.png" alt="" className='w-full h-auto' />
          <div className='flex flex-row'>
            <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers9Alt2.png" alt="" className='w-1/2 h-auto' />
            <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers10Alt2.png" alt="" className='w-1/2 h-auto' />
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-20'>
        <p className='text-5xl'>final Lineup</p>
        <div className='flex grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5'>
          <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers11.png" alt="" className='w-full h-auto' />
          <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers12.png" alt="" className='w-full h-auto' />
          <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers13.png" alt="" className='w-full h-auto' />
          <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers14.png" alt="" className='w-full h-auto' />
          <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers15.png" alt="" className='w-full h-auto' />
          <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers16.png" alt="" className='w-full h-auto' />
        </div>
      </div>
      <div className='flex flex-col mt-20'>
        <p className='text-5xl'>Supporting Materials</p>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='flex flex-col mt-10  items-center'>
            <p className={`text-2xl ${grenzeGotisch.className}`}>Instagram Mockup</p>
            <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers17.png" alt="" className='w-full h-auto lg:h-[600px]' />
          </div>
          <div>
            <Image width={600} height={300} src="/portfolio/webSurfers/webSurfers18.png" alt="" className='w-full h-auto lg:h-[600px]' />
          </div>
        </div>
      </div>

    </div>
  )
}


