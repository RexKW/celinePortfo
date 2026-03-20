import React from 'react'

function About() {
  return (
    <div id='about' className=' min-h-screen h-full min-w-screen relative flex flex-col justify-center items-center'>
      <div className='relative pt-64 md:pt-100 h-full z-50 flex flex-col justify-center items-center'>
        <div>
          <img src="/main/pixerunii.svg" className='w-[100vw] md:w-[60vw] mt-[-20%]  z-50 h-full' alt="" />
        </div>
        <div className='flex flex-col sm:flex-row w-screen h-full md:px-64 justify-between p-20'>
          <img src="/main/Character.svg" className='h-[50vh] basis-1/4' alt="" />
          <div className='flex flex-col justify-center items-start basis-3/4'>
            <p>Hi, I’m Celine! , a digital illustrator specializing in fantasy character and narrative illustration. My work focuses on visual storytelling, depicting characters, environments, and scenes that feel part of a larger world.</p>
            <p><br/>I have experience in character design, IP development, and concepting, bringing ideas from early concepts to fully realized scenes.</p>
            <div className='flex flex-row gap-5'>

            </div>
          </div>
        </div>
      </div>
      <img src="/main/SideCurtains.svg" className='w-screen absolute top-[-10%] md:top-[-5%] z-3' alt="" />
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
