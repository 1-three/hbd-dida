"use client"

import type React from "react"

import { useState, useEffect } from "react"

export function CurtainOpener({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Open curtains after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Left Curtain */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-gradient-to-r from-red-800 via-red-700 to-red-600 z-50 transition-transform duration-2000 ease-in-out ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Curtain texture */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-gradient-to-b from-red-900/20 via-transparent to-red-900/20"></div>
          {/* Vertical folds */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-1 bg-red-900/40" style={{ left: `${(i + 1) * 12}%` }} />
          ))}
        </div>
        {/* Curtain rod shadow */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* Right Curtain */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gradient-to-l from-red-800 via-red-700 to-red-600 z-50 transition-transform duration-2000 ease-in-out ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Curtain texture */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-gradient-to-b from-red-900/20 via-transparent to-red-900/20"></div>
          {/* Vertical folds */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-1 bg-red-900/40" style={{ right: `${(i + 1) * 12}%` }} />
          ))}
        </div>
        {/* Curtain rod shadow */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* Curtain Rod */}
      <div className="fixed top-0 left-0 right-0 h-6 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-700 z-40 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/50 via-transparent to-amber-400/50"></div>
      </div>

      {/* Content */}
      <div className={`transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}>{children}</div>
    </div>
  )
}
