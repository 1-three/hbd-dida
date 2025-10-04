"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Heart } from "lucide-react"
import Image from "next/image"

interface PhotoCardProps {
  image: string
  wishMessage: string
  title: string
}

function SparkleSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.09 8.26L22 6L14.09 9.74L12 18L9.91 9.74L2 12L9.91 8.26L12 0Z" fill="#F6E05E" />
      <path d="M12 4L13.09 9.26L18 8L13.09 10.74L12 16L10.91 10.74L6 12L10.91 9.26L12 4Z" fill="#FBB6CE" />
    </svg>
  )
}

function HeartSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
        fill="#E53E3E"
      />
    </svg>
  )
}

export function PhotoCard({ image, wishMessage, title }: PhotoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="relative group">
      {/* Main Card */}
      <Card
        className={`cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
          isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={handleCardClick}
      >
        <CardContent className="p-0 relative overflow-hidden rounded-lg">
          <div className="relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={300}
              height={300}
              className="w-full h-64 object-cover sepia-filter rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="script-font text-white text-xl font-semibold drop-shadow-lg">{title}</h3>
              <p className="text-white text-sm mt-1 drop-shadow-md">Click to see your wish!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wish Card (Popup) */}
      {isFlipped && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full bg-[#101a2b] border-0 shadow-2xl transform animate-in zoom-in-95 duration-300 overflow-hidden">
            <CardContent className="p-0 relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-blue-100 hover:text-white hover:bg-blue-900/30 rounded-full w-8 h-8 p-0"
                onClick={handleCardClick}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Header Section with Image */}
              <div className="relative bg-gradient-to-br from-[#1e3357] via-[#223c6a] to-[#16213a] p-8 pb-20">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-4 left-4 w-20 h-20">
                    <HeartSVG className="w-full h-full" />
                  </div>
                  <div className="absolute bottom-8 right-8 w-16 h-16">
                    <SparkleSVG className="w-full h-full" />
                  </div>
                </div>

                <div className="relative z-10">
                  <Heart className="h-6 w-6 text-blue-200 mx-auto mb-3 animate-pulse" />
                  <h3 className="script-font text-3xl font-bold text-blue-100 text-center mb-6 drop-shadow-lg">
                    {title}
                  </h3>
                </div>

                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-400 rounded-full blur-xl opacity-40"></div>
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      width={200}
                      height={200}
                      className="relative w-32 h-32 object-cover rounded-full border-4 border-blue-100 shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-20 pb-8 px-8">
                <div className="bg-gradient-to-br from-[#1e3357] to-[#223c6a] rounded-2xl p-6 shadow-inner">
                  <p className="text-blue-100 text-center leading-relaxed text-base font-medium">
                    {wishMessage}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
