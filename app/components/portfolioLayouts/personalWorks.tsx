import React from 'react'
import { grenzeGotisch } from '../../fonts'
import Image from 'next/image'


export default function PersonalWorks() {
    return (
        <div className='flex flex-col py-20 px-10 md:px-48'>
            <div className='flex flex-col justify-between w-full items-center gap-2 md:flex-row md:items-start'>

                {/* Title */}
                <div className='order-1 md:hidden flex flex-col items-center'>
                    <p className='text-5xl'>Revolution</p>
                    <p className={`text-2xl ${grenzeGotisch.className}`}>Personal IP</p>
                </div>

                {/* Left Side (desktop grouping) */}
                <div className='flex flex-col order-3 md:order-1 md:w-[35%]'>

                    {/* Title (desktop only) */}
                    <div className='hidden md:flex flex-col'>
                        <p className='text-5xl'>Revolution</p>
                        <p className={`text-2xl ${grenzeGotisch.className}`}>Personal IP</p>
                    </div>

                    {/* Description */}
                    <p className={`mt-2 text-justify text-2xl md:text-left ${grenzeGotisch.className}`}>
                        <br />
                        Revolution is an original fantasy story project I have been developing for nearly a decade. Set in a world shaped by magic, political conflict, and forgotten history, the narrative follows several intertwined characters as they struggle against the roles and fates imposed upon them.
                    </p>

                </div>

                {/* Image */}
                <Image width={600} height={300}
                    id='borderimg'
                    src="/portfolio/personalWorks/personalWorks1.png"
                    alt=""
                    className='bg-white w-[300px] md:w-[600px] h-auto order-2 md:order-2'
                />
            </div>
            <div className='flex flex-col justify-center items-center  justify-items-center w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-20'>
                <Image width={600} height={300} src="/portfolio/personalWorks/personalWorks2.png" className='w-full h-auto  order-1' alt="" />
                <Image width={600} height={300} src="/portfolio/personalWorks/personalWorks3.png" className='w-full h-auto bg-white order-2' alt="" />
                <Image width={600} height={300} src="/portfolio/personalWorks/personalWorks4.png" className='w-full h-auto bg-white order-3 md:order-4' alt="" />
                <div className='order-4 md:order-3 w-[600px] flex justify-start w-full md:pr-20 items-end'>
                    <p className='text-2xl text-justify'>Through their journeys, relationships, and personal loss, the story explores themes of humanity, freedom, and the meaning of moving forward despite the weight of the past. <br /><br />Many of my illustrations are scences from this project, focusing on character emotion,  interactions, and the histories of the people within this world.</p>
                </div>
            </div>
            <div className='flex grid grid-cols-1  justify-items-center w-ful1 md:grid-cols-2 gap-10 mt-20'>
                <Image width={600} height={300} src="/portfolio/personalWorks/personalWorks5.png" className='w-full h-auto order-1' alt="" />
                <Image width={600} height={300} src="/portfolio/personalWorks/personalWorks6.png" className='w-full h-auto order-2' alt="" />
                <Image width={600} height={300} src="/portfolio/personalWorks/personalWorks7.png" className='w-full h-auto order-3' alt="" />
                <Image width={600} height={300} src="/portfolio/personalWorks/personalWorks8.png" className='w-full h-auto order-4' alt="" />
            </div>
        </div>
    )
}

