import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div id='contact' className='min-h-[50vh] min-w-screen relative overflow-hidden z-100 text-white bg-[#ffffff] bg-[radial-gradient(circle_at_0%_0%,#111625,transparent_65%),radial-gradient(circle_at_25%_0%,#253c3f,transparent_75%),radial-gradient(circle_at_25%_75%,#486664,transparent_80%),radial-gradient(circle_at_75%_0%,#173a50,transparent_65%),radial-gradient(circle_at_100%_0%,#122b4d,transparent_65%),radial-gradient(circle_at_50%_50%,#325153,transparent_65%),radial-gradient(circle_at_0%_100%,#131724,transparent_65%),radial-gradient(circle_at_100%_100%,#122b4d,transparent_85%),radial-gradient(circle_at_100%_0%,#113a5c,transparent_85%)] flex justify-center items-center'>
      <img src="/footer/FooterStars.svg" className='absolute  w-full h-full object-cover z-0 left-0' alt="" />
      <img src="/footer/FooterGrain.png" className='absolute w-full h-full z-1 left-0 mix-blend-difference ' alt="" />
      <div className='flex flex-col h-full w-full'>
        <p className='text-4xl md:hidden text-center mb-5'>Interested in <br/>working together?</p>
        <div className='flex flex-row w-full h-full justify-center items-center'>
        <img src="/footer/footerFlower.svg" alt="" className='flex max-w-[30%] md:max-w-[10%] relative z-2 basis-[20%] max-h-[50%] ' />
        <div className='flex flex-col relative items-center lg:px-20 justify-center z-2'>
          <p className='hidden text-3xl md:flex md:text-6xl text-center'>Interested in <br />working together?</p>
          <ul className='flex flex-col items-center mt-5 gap-5'>
            <li className='flex flex-row gap-3'><img src="/main/gmailIcon.svg" className='w-6' alt="" /><p>celineenam@gmail.com</p></li>
            <li className='flex flex-row gap-3'><img src="/main/phoneIcon.svg" className='w-6' alt="" /><p>+62 813 333 7231</p></li>
          </ul>
          <div className='flex flex-col mt-10 justify-center items-center md:flex-row gap-5'>
              <div className='flex flex-row justify-center items-center gap-5'>
                <Link href={'https://vgen.co/Pixerunii'}><img src="/footer/vgenIcon.svg" className='w-10 h-auto' alt="" /></Link>
                <Link href={'https://x.com/pixerunii'}><img src="/footer/XIcon.svg" className='w-10 h-auto' alt="" /></Link>
                <Link href={'https://www.instagram.com/pixerunii'}><img src="/footer/InstagramIcon.svg" className='w-10 h-auto' alt="" /></Link>
              </div>
              <div className='flex flex-row justify-center items-center gap-5'>
                <Link href={'https://www.behance.net/Pixerunii'}><img src="/footer/BehanceIcon.svg" className='w-10 h-auto' alt="" /></Link>
                <img src="/footer/LinkedInIcon.svg" className='w-10 h-auto' alt="" />
              </div>
          </div>
        </div>
        <img src="/footer/footerFlower.svg" alt="" className='flex max-w-[30%] md:max-w-[10%] relative z-2 basis-[20%] max-h-[50%] scale-x-[-1]' />
      </div>
      </div>
      
      <div>

      </div>
    </div>
  )
}

export default Footer
