"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2 } from "lucide-react"

function MusicalNoteSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z"
        fill="currentColor"
      />
    </svg>
  )
}

function DoubleNoteSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 3V13.55C7.41 13.21 6.73 13 6 13C3.79 13 2 14.79 2 17S3.79 21 6 21 10 19.21 10 17V7H14V3H8Z"
        fill="currentColor"
      />
      <path
        d="M16 1V11.55C15.41 11.21 14.73 11 14 11C11.79 11 10 12.79 10 15S11.79 19 14 19 18 17.21 18 15V5H22V1H16Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // You'll replace this with your actual audio file
  const audioSrc = "/audiofile.mp3" // Replace with your audio file path

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => setIsPlaying(false)
      audio.addEventListener("ended", handleEnded)
      return () => audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Vinyl Record */}
      <div className="relative">
        <div
          className={`w-48 h-48 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl transition-all duration-300 ${
            isPlaying ? "vinyl-spin" : ""
          } ${isHovered ? "scale-110" : "scale-100"}`}
        >
          {/* Record grooves */}
          <div className="absolute inset-4 rounded-full border border-gray-600 opacity-30" />
          <div className="absolute inset-8 rounded-full border border-gray-600 opacity-20" />
          <div className="absolute inset-12 rounded-full border border-gray-600 opacity-10" />

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
          </div>

          {/* Vintage label text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white text-xs font-bold mt-20">
            </div>
          </div>
        </div>

        {/* Phonograph arm */}
        <div
          className={`absolute -right-8 top-8 w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full transform origin-left transition-transform duration-500 ${
            isPlaying ? "rotate-12" : "rotate-0"
          }`}
        >
          <div className="absolute right-0 top-0 w-3 h-3 bg-amber-700 rounded-full transform -translate-y-1" />
        </div>
      </div>

      {/* Control Panel */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-4 shadow-lg border border-amber-300">
          <div className="flex items-center gap-3">
            <Button
              onClick={togglePlay}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-10 h-10 p-0"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </Button>

            <div className="flex items-center gap-1 text-amber-800">
              <Volume2 className="h-4 w-4" />
              <span className="text-xs font-medium">{isPlaying ? "Playing..." : "Click to play"}</span>
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="script-font text-sm text-amber-800 font-semibold"></p>
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Floating musical notes */}
      {isPlaying && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-4 -left-4 w-6 h-6 text-primary float-animation">
            <MusicalNoteSVG className="w-full h-full" />
          </div>
          <div
            className="absolute -top-6 -right-2 w-5 h-5 text-secondary float-animation"
            style={{ animationDelay: "0.5s" }}
          >
            <DoubleNoteSVG className="w-full h-full" />
          </div>
          <div
            className="absolute -bottom-2 -left-6 w-4 h-4 text-accent float-animation"
            style={{ animationDelay: "1s" }}
          >
            <MusicalNoteSVG className="w-full h-full" />
          </div>
          <div
            className="absolute -bottom-4 -right-4 w-5 h-5 text-primary float-animation"
            style={{ animationDelay: "1.5s" }}
          >
            <DoubleNoteSVG className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  )
}
