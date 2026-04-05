import React from 'react'
import { grenzeGotisch } from '../fonts'

function About() {
  return (
    <div id='about' className=' min-h-screen text-white h-full min-w-screen relative flex flex-col justify-center items-center'>
      <img src="/main/headerBGStars.svg" className='w-[80vw] absolute z-5 top-[10%] md:top-[15%] ' alt="" />
      <div className='relative pt-50 md:pt-100 h-full z-50 flex flex-col justify-center items-center'>
        <div className='relative'>
          <img src="/main/pixerunii.svg" className='w-[100vw] md:w-[60vw] mt-[-20%] relative  z-50 h-full' alt="" />
          
        </div>
        <div className='flex flex-col pb-64 lg:pb-32 md:flex-row w-screen h-full lg:px-64 justify-between p-15 lg:p-20'>
          <img src="/main/Character.svg" className='h-[50vh] basis-1/4' alt="" />
          <div className={`${grenzeGotisch.className} flex text-2xl flex-col mt-10 lg:mt-0 justify-center items-start basis-3/4`}>
            <p className='text-center lg:text-start'>Hi, I’m Celine! , a digital illustrator specializing in fantasy character and narrative illustration. My work focuses on visual storytelling, depicting characters, environments, and scenes that feel part of a larger world.</p>
            <p className='text-center lg:text-start'><br/>I have experience in character design, IP development, and concepting, bringing ideas from early concepts to fully realized scenes.</p>
            <div className='flex w-full flex-row gap-5 mt-10  justify-center lg:justify-start'>
              <ul className='flex w-full flex-row gap-5 justify-center lg:justify-start'>
                <li><img src="/main/AI.svg" className='w-10' alt="" /></li>
                <li><img src="/main/AI.svg" className='w-10' alt="" /></li>
                <li><img src="/main/AI.svg" className='w-10' alt="" /></li>
                <li><img src="/main/AI.svg" className='w-10' alt="" /></li>
                <li><img src="/main/AI.svg" className='w-10' alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src="/main/SideCurtains.svg" className='w-screen absolute top-[-10%] md:top-[-5%] z-3' alt="" />
      <img src="/main/starsAboutBottom.svg" className='w-[35%] lg:w-[35%] absolute z-2 bottom-0' alt="" />
      <img src="/main/aboutCornerBottomFlower.svg" className='w-[35%] lg:w-[20%] absolute z-2 bottom-0 right-0 lg:right-5' alt="" />
      <img src="/main/aboutCornerBottomFlower.svg" className='w-[35%] lg:w-[20%] absolute z-2 bottom-0 left-0 lg:left-5 scale-x-[-1]' alt="" />
      {/* <div className="h-[125vh] w-screen absolute z-1 top-[-35%] blur-2xl 
        bg-[radial-gradient(ellipse_60%_60%_at_center,#efbe35ee_0%,#efbe35aa_25%,#ab732755_50%,transparent_80%)]">
        </div>
      <div className="h-[125vh] w-screen absolute z-0 top-[-25%]
      bg-[radial-gradient(ellipse_70%_70%_at_center,#ab7327cc_0%,#ab732788_35%,#ab732744_65%,transparent_90%)]">
      </div> */}
      </div>
  )
}

export default About
