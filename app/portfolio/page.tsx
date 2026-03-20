'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import PortfoLayout1 from "../components/portfoLayout1"
import PortfoLayout2 from "../components/portfoLayout2"

export default function PortfolioPage() {

  const searchParams = useSearchParams()
  const router = useRouter()

  const projectParam = searchParams.get("project")

  const projects = [
    { title: "AI Detector" },
    { title: "Spotify Clone" },
    { title: "Ecommerce Website" },
    { title: "Blockchain App" }
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
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-3xl">{project.title}</h1>

      <div className="flex gap-10 mt-10">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>

      {Number(projectParam) == 0 &&
        <PortfoLayout1/>
      }
      {Number(projectParam) == 1 &&
        <PortfoLayout2/>
      }

    </div>
  )
}