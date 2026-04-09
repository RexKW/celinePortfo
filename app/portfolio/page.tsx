'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import NavbarMain from "../components/navbarMain"
import Footer from "../components/footer"
import Image from "next/image"
import NavbarPorfo from "../components/navbarPortfo"
import ChromaClub from "../components/portfolioLayouts/chromaClub"
import PersonalWorks from "../components/portfolioLayouts/personalWorks"
import Commissions from "../components/portfolioLayouts/commission"
import WebSurfer from "../components/portfolioLayouts/webSurfer"
import MejaMakan from "../components/portfolioLayouts/mejaMakan"
import PageWrapper from "./pageWrapper"

// ---------------------------------------------------------
// 1. THE FEATURE COMPONENT (Extract the dynamic logic here)
// ---------------------------------------------------------
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

// ---------------------------------------------------------
// 2. THE PAGE COMPONENT (Statically rendered shell)
// ---------------------------------------------------------
export default function PortfolioPage() {
  return (
    <PageWrapper>
      <div className="min-h-full text-white overflow-x-hidden bg-[radial-gradient(circle_at_0%_0%,#162433,transparent_85%),radial-gradient(circle_at_100%_50%,#113a5c,transparent_100%),radial-gradient(circle_at_50%_100%,#486664,transparent_85%)] flex flex-col items-center justify-center">
        <NavbarPorfo />
        
        <div className="min-h-[200vh] w-full flex relative pt-30 md:pt-50 bg-fixed bg-[length:100vw] bg-start bg-no-repeat justify-start items-center flex-col">
          <Image
            src="/portfolio/backdropGrainPortfolio.png"
            alt="Background"
            fill
            className="object-cover opacity-[25%] mix-blend-difference z-3 pointer-events-none"
          />
          <div className="absolute inset-0 z-0 bg-[url(/portfolio/portfoBackdrop.svg)] bg-[length:1200px] bg-repeat"></div>

          {/* This Suspense boundary makes Vercel happy! */}
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading project...</div>}>
            <PortfolioProjectViewer />
          </Suspense>

        </div>
        <Footer />
      </div>
    </PageWrapper>
  )
}