'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
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

export default function PortfolioPage() {

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
    <PageWrapper>
    <div className="min-h-full text-white overflow-x-hidden bg-[radial-gradient(circle_at_0%_0%,#162433,transparent_85%),radial-gradient(circle_at_100%_50%,#113a5c,transparent_100%),radial-gradient(circle_at_50%_100%,#486664,transparent_85%)] flex flex-col items-center justify-center">
      <NavbarPorfo />
      <div className="min-h-[200vh] w-full flex relative pt-30 md:pt-50 bg-fixed bg-[length:100vw] bg-start bg-no-repeat  justify-start items-center flex-col">

        <Image
          src="/portfolio/backdropGrainPortfolio.png"
          alt="Background"
          fill
          className="object-cover opacity-[25%] mix-blend-difference z-3 pointer-events-none"
        />
        <div className="absolute inset-0 z-0 
          bg-[url(/portfolio/portfoBackdrop.svg)] 
          bg-[length:1200px] bg-repeat">
        </div>
        <div className="flex flex-col relative z-2 px-10 lg:px-0">
          <div className="flex flex-row gap-2 items-center">
            <button className="text-3xl" onClick={prev}><img className='scale-x-[-1] w-20 h-20' src="/portfolio/navArrow.svg" alt="" /></button>
            <h1 className="text-4xl md:text-8xl text-center min-w-[50vw]">{project.title}</h1>
            <button className="text-3xl" onClick={next}><img className='w-20 h-20' src="/portfolio/navArrow.svg" alt="" /></button>
          </div>
          <img src="/portfolio/bottomNavigationAsset.svg" alt="" />
        </div>
        <div className="relatvie z-10">
          {Number(projectParam) == 0 &&
            <WebSurfer />
          }
          {Number(projectParam) == 1 &&
            <ChromaClub />
          }
          {Number(projectParam) == 2 &&
            <MejaMakan />
          }
          {Number(projectParam) == 3 &&
            <PersonalWorks />
          }
          {Number(projectParam) == 4 &&
            <Commissions />
          }
        </div>

      </div>


      <Footer />
    </div>
    </PageWrapper>
  )
}