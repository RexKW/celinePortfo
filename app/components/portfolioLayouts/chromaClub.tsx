import React from 'react'
import { grenzeGotisch } from '../../fonts'
import Image from 'next/image'


export default function ChromaClub() {
  return (
    <div className='flex flex-col py-20 px-10 lg:px-48'>
      <div className='flex flex-col lg:flex-row gap-10 '>
        <img src="/portfolio/chromaClub/chromaClubCharacters.png" alt="" className='w-[600px] h-[700px] basis-2/5' />
        <div className='flex flex-col basis-3/5 lg:pt-30'>
          <div>
            <p className='text-5xl'>The Chroma Club</p>
            <p className={`text-2xl ${grenzeGotisch.className}`}>Character Design for Branding</p>
            <p className={`text-2xl ${grenzeGotisch.className} text-justify`}>The Chroma Club is an original IP developed for Saekjo Studio, a personal color analysis brand based in Surabaya.
              <br />
              <br />
              Based on the client’s brief, the project includes a mascot as the brand representative and four character that embody the personalities of the four seasonal color types. </p>
            <br />
            <br />
          </div>
          <div>
            <p className='text-5xl'>Backstory</p>
            <p className={`text-2xl ${grenzeGotisch.className} text-justify`}>
              The Chroma Club is a group dedicated on helping people find their confidence through personal colour and self-expression.  hideout that brings together four girls, each representing a season, who share a passion for beauty, colour, and self-discovery.  </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col mt-20'>
        <p className='text-5xl text-center lg:text-start mb-10'>Exploration Stage</p>
        <div className='flex flex-col justify-center items-center gap-10'>
          <div className='flex flex-col justify-center items-center gap-10 lg:flex-row'>
            <img src="/portfolio/chromaClub/chromaClubExplore1.png" className='w-full lg:w-1/2 h-auto object-cover' />
            <img src="/portfolio/chromaClub/chromaClubExplore2.png" className='w-full lg:w-1/2 h-auto object-cover' />
          </div>
          <div className='flex flex-col justify-center items-center gap-10 lg:flex-row'>
            <img src="/portfolio/chromaClub/chromaClubExplore3.png"
              className='w-full lg:w-3/5 lg:h-[400px] object-cover' />

            <img src="/portfolio/chromaClub/chromaClubExplore4.png"
              className='w-full lg:w-3/5 lg:h-[400px] object-cover' />
          </div>
          <div className='flex flex-col justify-center items-center '>
            <img src="/portfolio/chromaClub/chromaClubExplore5.png"
              className='w-full h-auto object-cover' />
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-20'>
        <p className='text-5xl lg:pl-10 text-center lg:text-start mb-10'>Final Lineup</p>
        <div className='flex flex-col justify-center items-center gap-10 lg:px-10'>
          <div className='flex flex-col justify-between w-full items-center gap-2 lg:flex-row lg:items-start'>

            {/* Title */}
            <div className='order-1 lg:hidden flex flex-col items-center'>
              <p className='text-3xl'>Nari</p>
              <p className='text-xl'>Guardian</p>
            </div>

            {/* Image */}
            <img
              src="/portfolio/chromaClub/chromaClubFinalLineup1.png"
              alt=""
              className='w-[300px] lg:w-[600px] h-auto order-2 lg:order-1'
            />

            {/* Right side (desktop grouping) */}
            <div className='flex flex-col order-3 lg:order-2'>

              {/* Title (desktop only) */}
              <div className='hidden lg:flex flex-col'>
                <p className='text-5xl'>Nari</p>
                <p className={`text-2xl ${grenzeGotisch.className}`}>Guardian</p>
              </div>

              {/* Description */}
              <p className={`t-2 text-2xl text-justify ${grenzeGotisch.className}`}>
                <br />
                Nari guides each girl to discover the colour that reflect their true selves by their flower changing tail.
                <br />
                <br />
                When Nari touch a person, the tail on their back will bloom into a flower corresponting to a specific season.
              </p>

            </div>

          </div>
          <div className='flex w-full grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-4'>
            <div className='flex flex-col items-center'>
              <img src="/portfolio/chromaClub/chromaClubFinalLineup2.png" alt="" className='w-[300px] h-auto' />
              <p className={`text-xl ${grenzeGotisch.className}`}>Spring</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src="/portfolio/chromaClub/chromaClubFinalLineup3.png" alt="" className='w-[300px] h-auto' />
              <p className={`text-xl ${grenzeGotisch.className}`}>Summer</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src="/portfolio/chromaClub/chromaClubFinalLineup4.png" alt="" className='w-[300px] h-auto mb-2' />
              <p className={`text-xl ${grenzeGotisch.className}`}>Autumn</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src="/portfolio/chromaClub/chromaClubFinalLineup5.png" alt="" className='w-[300px] h-auto mb-2' />
              <p className={`text-xl ${grenzeGotisch.className}`}>Winter</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src="/portfolio/chromaClub/chromaClubFinalLineup6.png" alt="" className=' w-auto h-full' />
              <div className='text-center flex flex-col'>
                <p className='text-5xl'>Bomi</p>
                <p className={`text-xl ${grenzeGotisch.className}`}>Spring<br /><br />Founder of the Chroma Club, Bomi is a soft and gentle florist with a nurturing heart.</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img src="/portfolio/chromaClub/chromaClubFinalLineup7.png" alt="" className=' w-auto h-full mt-5' />
              <div className='text-center mt-1 flex lg:mt-6 flex-col'>
                <p className='text-5xl'>Solha</p>
                <p className={`text-xl ${grenzeGotisch.className}`}>Summer<br /><br />A fresh graduate working in marketing. Straightforward and down-to-earth</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img src="/portfolio/chromaClub/chromaClubFinalLineup8.png" alt="" className='w-full h-auto lg:w-[300px] w-full h-auto lg:h-auto mt-20 items-center' />
              <div className='text-center mt-10 flex flex-col'>
                <p className='text-5xl'>Haeul</p>
                <p className={`text-xl ${grenzeGotisch.className}`}>Autumn<br /><br />The local librarian who finds beauty in calmness. She is quite, introverted, and grounded</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img src="/portfolio/chromaClub/chromaClubFinalLineup9.png" alt="" className='w-full h-auto lg:w-[300px] mt-20 w-full h-auto lg:h-auto items-center' />
              <div className='text-center flex flex-col mt-10'>
                <p className='text-5xl'>Jiseol</p>
                <p className={`text-xl ${grenzeGotisch.className}`}>Winter<br /><br />the university student with bold ideas and a curious spirit. </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <img src="/portfolio/chromaClub/chromaClubFinalLineup10.png" alt="" className='w-full h-auto' />
            <img src="/portfolio/chromaClub/chromaClubFinalLineup11.png" alt="" className='w-full h-auto' />
            <img src="/portfolio/chromaClub/chromaClubFinalLineup12.png" alt="" className='w-full h-auto' />
            <img src="/portfolio/chromaClub/chromaClubFinalLineup13.png" alt="" className='w-full h-auto' />
          </div>
          <div className='flex flex-col mt-20 w-full'>
            <p className='text-5xl'>Supporting Materials</p>
            <div className='flex flex-col mt-10 lg:flex-row gap-10'>
              <div className='flex flex-col basis-1/2 justify-center items-center'>
                <p className={`text-center text-2xl ${grenzeGotisch.className}`}>Introduction Poster</p>
                <img src="/portfolio/chromaClub/chromaClubSupportingMaterials1.png" className='w-auto h-[600px]' alt="" />
              </div>
              <div className='flex flex-col basis-1/2 justify-center items-center'>
                <p className={`text-center text-2xl ${grenzeGotisch.className}`}>Instagram Post</p>
                <img src="/portfolio/chromaClub/chromaClubSupportingMaterials2.png" className='w-auto h-[600px]' alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

