'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import NavbarMain from "../components/navbarMain"
import Footer from "../components/footer"
import Image from "next/image"
import NavbarPorfo from "../components/navbarPortfo"
import ChromaClub from "./components/chromaClub"
import PersonalWorks from "./components/personalWorks"
import Commissions from "./components/commission"
import WebSurfer from "./components/webSurfer"
import MejaMakan from "./components/mejaMakan"
import PageWrapper from "../components/pageWrapper"
import Grainient from "@/components/Grainient"

function PortfolioProjectViewer() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const projectParam = searchParams.get("project")

  const projects = [
    { title: "Websurfer" },
    { title: "Chroma Club" },
    { title: "Meja Makan" },
    { title: "Personal Works" },
    { title: "Commissions" }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (projectParam !== null) {
      setIndex(Number(projectParam))
    }
  }, [projectParam])

  const next = () => {
    const newIndex = (index + 1) % projects.length
    router.replace(`/portfolio?project=${newIndex}`)
  }

  const prev = () => {
    const newIndex = (index - 1 + projects.length) % projects.length
    router.replace(`/portfolio?project=${newIndex}`)
  }

  const project = projects[index]

  return (
    <>
      <div className="flex flex-col relative z-2 px-10 lg:px-0">
        <div className="flex flex-row gap-2 items-center">
          <button className="text-3xl" onClick={prev}>
            <img className='scale-x-[-1] w-20 h-20' src="/portfolio/navArrow.svg" alt="Previous" />
          </button>
          <h1 className="text-4xl md:text-8xl text-center min-w-[50vw]">{project.title}</h1>
          <button className="text-3xl" onClick={next}>
            <img className='w-20 h-20' src="/portfolio/navArrow.svg" alt="Next" />
          </button>
        </div>
        <img src="/portfolio/bottomNavigationAsset.svg" alt="" />
      </div>
      
      <div className="relative z-10">
        {index === 0 && <WebSurfer />}
        {index === 1 && <ChromaClub />}
        {index === 2 && <MejaMakan />}
        {index === 3 && <PersonalWorks />}
        {index === 4 && <Commissions />}
      </div>
    </>
  )
}


export default function PortfolioPage() {
  return (
    <PageWrapper>
      <div className="min-h-full relative text-white overflow-x-hidden bg-[radial-gradient(circle_at_0%_0%,#162433,transparent_85%),radial-gradient(circle_at_100%_50%,#113a5c,transparent_100%),radial-gradient(circle_at_50%_100%,#486664,transparent_85%)] flex flex-col items-center justify-center">
        <NavbarPorfo />
        <Grainient
            color1="#162433"
            color2="#486664"
            color3="#113A5C"
            timeSpeed={0.6}
            colorBalance={0.05}
            warpStrength={2}
            warpFrequency={4}
            warpSpeed={3}
            warpAmplitude={80}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={0}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
            className="absolute z-0 inset-0 w-full h-full "
          />
        <div className="min-h-[200vh] w-full flex relative pt-30 md:pt-50 bg-fixed bg-[length:100vw] bg-start bg-no-repeat justify-start items-center flex-col">
          <Image
            src="/portfolio/backdropGrainPortfolio.png"
            alt="Background"
            fill
            className="object-cover opacity-[25%] mix-blend-difference z-3 pointer-events-none"
          />
          <div className="absolute inset-0 z-0 bg-[url(/portfolio/portfoBackdrop.svg)] opacity-[50%] bg-[length:1200px] bg-repeat">
                </div>

          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><img
                    src="/loading/curtainLoading.jpg"
                    className="h-full w-1/2 object-cover"
                />
                <img
                    src="/loading/curtainLoading.jpg"
                    className="h-full w-1/2 object-cover scale-x-[-1]"
                /></div>}>
            <PortfolioProjectViewer />
          </Suspense>

        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}