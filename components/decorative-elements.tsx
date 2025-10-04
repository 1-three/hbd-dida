import {
  FilmCameraSVG,
  IceCreamSVG,
  VintageRadioSVG,
  TheaterMaskSVG,
  PopcornSVG,
  CircusTentSVG,
  PaletteSVG,
  MusicNoteSVG,
} from "./cute-svgs"

export function DecorativeElements() {
  return (
    <>
      {/* Corner Decorations */}
      <div className="fixed top-4 left-4 z-0 opacity-60">
        <div className="w-16 h-16 float-animation">
          <FilmCameraSVG className="w-full h-full" />
        </div>
      </div>

      <div className="fixed top-4 right-4 z-0 opacity-60">
        <div className="w-16 h-16 float-animation" style={{ animationDelay: "1s" }}>
          <IceCreamSVG className="w-full h-full" />
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-0 opacity-60">
        <div className="w-16 h-16 float-animation" style={{ animationDelay: "2s" }}>
          <VintageRadioSVG className="w-full h-full" />
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-0 opacity-60">
        <div className="w-16 h-16 float-animation" style={{ animationDelay: "0.5s" }}>
          <TheaterMaskSVG className="w-full h-full" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-1/4 z-0 opacity-40">
        <div className="w-12 h-12 sparkle">
          <PopcornSVG className="w-full h-full" />
        </div>
      </div>

      <div className="fixed top-1/3 right-1/3 z-0 opacity-40">
        <div className="w-12 h-12 sparkle" style={{ animationDelay: "1.5s" }}>
          <CircusTentSVG className="w-full h-full" />
        </div>
      </div>

      <div className="fixed bottom-1/3 left-1/3 z-0 opacity-40">
        <div className="w-12 h-12 sparkle" style={{ animationDelay: "2.5s" }}>
          <PaletteSVG className="w-full h-full" />
        </div>
      </div>

      <div className="fixed bottom-1/4 right-1/4 z-0 opacity-40">
        <div className="w-12 h-12 sparkle" style={{ animationDelay: "3s" }}>
          <MusicNoteSVG className="w-full h-full" />
        </div>
      </div>

      {/* Film Strip Border */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 z-0 opacity-20">
        <div className="flex justify-around items-center h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-2 h-4 bg-gray-900 rounded-sm" />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 z-0 opacity-20">
        <div className="flex justify-around items-center h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-2 h-4 bg-gray-900 rounded-sm" />
          ))}
        </div>
      </div>
    </>
  )
}
