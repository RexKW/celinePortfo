import React from 'react'

function Footer() {
  return (
    <div id='contact' className='min-h-[50vh]  min-w-screen relative overflow-hidden z-100  bg-[#f8f5f2] bg-[radial-gradient(circle_at_0%_0%,#111625,transparent_65%),radial-gradient(circle_at_25%_0%,#253c3f,transparent_65%),radial-gradient(circle_at_75%_0%,#173a50,transparent_65%),radial-gradient(circle_at_100%_0%,#122b4d,transparent_65%),radial-gradient(circle_at_50%_50%,#325153,transparent_65%),radial-gradient(circle_at_0%_100%,#131724,transparent_65%),radial-gradient(circle_at_100%_100%,#122b4d,transparent_65%)] flex justify-center items-center'>
      <img src="/footer/FooterStars.svg" className='absolute w-full z-0 left-0' alt="" />
       <img src="/footer/FooterGrain.png" className='absolute w-full z-1 left-0' alt="" />
      <div className='flex flex-row'>
          
          <div className='flex flex-col relative z-2'>
              <p className='text-3xl text-center'>Interested in <br/>working together?</p>
              <ul className='flex flex-col'>
                <li className='flex flex-row'><p>celineenam@gmail.com</p></li>
                <li className='flex flex-row'><p>celineenam@gmail.com</p></li>
              </ul>
          </div>
          <img src="" alt="" />
      </div>
    </div>
  )
}

export default Footer
