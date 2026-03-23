import React from 'react'

function Footer() {
  return (
    <div id='contact' className='min-h-[50vh] min-w-screen relative overflow-hidden z-100 text-white bg-[#ffffff] bg-[radial-gradient(circle_at_0%_0%,#111625,transparent_65%),radial-gradient(circle_at_25%_0%,#253c3f,transparent_75%),radial-gradient(circle_at_25%_75%,#486664,transparent_80%),radial-gradient(circle_at_75%_0%,#173a50,transparent_65%),radial-gradient(circle_at_100%_0%,#122b4d,transparent_65%),radial-gradient(circle_at_50%_50%,#325153,transparent_65%),radial-gradient(circle_at_0%_100%,#131724,transparent_65%),radial-gradient(circle_at_100%_100%,#122b4d,transparent_85%),radial-gradient(circle_at_100%_0%,#113a5c,transparent_85%)] flex justify-center items-center'>
      <img src="/footer/FooterStars.svg" className='absolute  w-full h-full object-cover z-0 left-0' alt="" />
      <img src="/footer/FooterGrain.png" className='absolute w-full h-full z-1 left-0 mix-blend-difference ' alt="" />
      <div className='flex flex-row w-full h-full justify-center items-center'>
          <img src="/footer/footerFlower.svg" alt="" className='flex max-w-[10%] relative z-2 basis-[20%] max-h-[50%] '/>
          <div className='flex flex-col relative items-center lg:px-20 justify-center z-2'>
              <p className='text-4xl md:text-5xl text-center'>Interested in <br/>working together?</p>
              <ul className='flex flex-col items-center mt-5 gap-5'>
                <li className='flex flex-row'><p>celineenam@gmail.com</p></li>
                <li className='flex flex-row'><p>+62 813 333 7231</p></li>
              </ul>
          </div>
          <img src="/footer/footerFlower.svg" alt="" className='flex max-w-[10%] relative z-2 basis-[20%] max-h-[50%] scale-x-[-1]'/>
      </div>
    </div>
  )
}

export default Footer
