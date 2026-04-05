import React from 'react'
import { grenzeGotisch } from '../../fonts'
import Image from 'next/image'


export default function Commissions() {
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
                <Image width={600} height={300}
                    id='borderimg'
                    src="/portfolio/commissionWork/commissionWork1.png"
                    alt=""
                    className='bg-white w-[600px] h-auto order-2 md:order-2'
                />
            </div>
            <div className='flex flex-col justify-center items-center  justify-items-center w-full gap-10 mt-20'>
                <div className='flex flex-col w-full gap-5 md:flex-row'>
                    <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork2.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                    <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork3.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                    <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork4.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                </div>
                <div className='flex justify-start w-full  gap-10 mt-5'>
                    <p className={`text-justify text-2xl md:w-[50%] ${grenzeGotisch.className}`}>I began by creating composition thumbnails to explore different staging, character positioning, and movement. This stage focused on finding a dynamic interaction that communicated both the elegance of the dance and the subtle tension between the characters.</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center  justify-items-center w-full gap-10 mt-20'>
                <div className='flex flex-col w-full gap-5 md:flex-row'>
                    <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork5.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                    <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork6.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                    <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork7.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                </div>
                <div className='flex justify-end  w-full gap-10 mt-5'>
                    <p className={`text-justify md:text-end md:w-[50%] text-2xl ${grenzeGotisch.className}`}>I began by creating composition thumbnails to explore different staging, character positioning, and movement. This stage focused on finding a dynamic interaction that communicated both the elegance of the dance and the subtle tension between the characters.</p>
                </div>
            </div>

            <div className='mt-20 flex flex-col justify-center items-center'>
                <Image width={1200} height={600} src="/portfolio/commissionWork/commissionWork8.png" className='w-full h-auto' alt="" />
                <p className={`${grenzeGotisch.className} text-2xl`}>Final Illustration</p>
            </div>


            {/*Second Project*/}
            <div className='flex flex-col mt-20'>
                <div className='flex flex-col justify-between w-full items-center gap-2 md:gap-15 md:flex-row md:items-end'>

                    {/* Title */}
                    <div className='order-1 md:hidden flex flex-col items-center'>
                        <p className='text-5xl'>Alfr, Leif, & Arlo</p>
                        <p className={`${grenzeGotisch.className} text-2xl`}>Character Scene Illustration</p>
                    </div>

                    {/* Image */}
                    <Image width={600} height={300}
                        id='borderimg'
                        src="/portfolio/commissionWork/commissionWork9.png"
                        alt=""
                        className=' bg-white w-[600px] h-auto order-2 md:order-1'
                    />

                    {/* Right side (desktop grouping) */}
                    <div className='flex flex-col order-3 justify-end  h-full md:order-2 basis-1/2'>

                        {/* Title (desktop only) */}
                        <div className='hidden md:flex flex-col'>
                            <p className='text-5xl'>Alfr, Leif, & Arlo</p>
                            <p className={`${grenzeGotisch.className} text-2xl`}>Character Scene Illustration</p>
                        </div>

                        {/* Description */}
                        <p className={`${grenzeGotisch.className} mt-2 text-2xl text-justify md:text-left`}>
                            <br/>
                            This commission was created from a client brief describing three original characters set in a Nordic inspired fantasy world.
                        </p>

                    </div>



                </div>
                <div className='flex flex-col justify-center items-start  justify-items-center w-full gap-10 mt-20'>
                    <div className='flex flex-col w-full gap-5 md:flex-row'>
                        <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork10.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                        <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork11.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                        <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork12.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                    </div>
                    <p className={`text-justify text-2xl md:w-[50%] ${grenzeGotisch.className}`}>The client requested a scene depicting the characters interacting on a flag-filled mountain, with ideas ranging from inspecting firearms to studying a map or playfully debating whether one of them should wear shoe</p>
                    <p className={`text-justify order-4 md:order-3 text-2xl md:w-[50%] ${grenzeGotisch.className}`}>Using the brief and character notes provided, I explored several thumbnail compositions to determine the most engaging narrative moment before developing the sketch, color, and final rendered illustration.</p>
                    <div className='flex flex-col order-3 md:order-4 w-full gap-5 md:flex-row'>
                        <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork13.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                        <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork14.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                        <Image width={400} height={200} src="/portfolio/commissionWork/commissionWork15.png" className='flex basis-1/3 h-[200px] bg-white' alt="" />
                    </div>

                </div>
                <div className='mt-20 flex flex-col justify-center items-center'>
                    <Image width={1200} height={600} src="/portfolio/commissionWork/commissionWork16.png" className='w-full h-auto' alt="" />
                    <p className={`${grenzeGotisch.className} text-2xl`}>Final Illustration</p>
                </div>
            </div>

        </div>
    )
}

