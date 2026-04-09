'use client'

import { useState } from "react"
import Loader from "./loader"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false)

  return (
    <>
      {!done && <Loader onFinish={() => setDone(true)} />}

      {/* Page is already rendered behind */}
      <div className="relative">
        {children}
      </div>
    </>
  )
}