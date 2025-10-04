import { PhotoCard } from "@/components/photo-card"
import { VinylPlayer } from "@/components/vinyl-player"
import { DecorativeElements } from "@/components/decorative-elements"
import { CurtainOpener } from "@/components/curtain-opener"
import {
  FilmCameraSVG,
  IceCreamSVG,
  MusicNoteSVG,
  BirthdayCakeSVG,
  BalloonSVG,
  GiftBoxSVG,
} from "@/components/cute-svgs"

export default function HomePage() {
  // Sample photo cards - you'll replace these with your actual images
  const photoCards = [
    {
      id: 1,
      image: "/pic1.jpeg",
      wishMessage:
        "55 years ago... The gorgeous lady, oh so lovely!",
      title: "🫨",
    },
    {
      id: 2,
      image: "/pic2.jpeg",
      wishMessage:
        "Always game for fun and games!",
      title: "Madcaps",
    },
    {
      id: 3,
      image: "/pic3.jpeg",
      wishMessage:
        "Match made in heaven, the awesomest couple ❤️",
      title: "Dida & Dadu",
    },
    {
      id: 4,
      image: "/pic4.jpeg",
      wishMessage:
        "😎😎😎",
      title: "Young always... With her gang!",
    },
    {
      id: 5,
      image: "/pic5.jpeg",
      wishMessage:
        "The family star... The Rockstar wife, mother, grandmother et al.!",
      title: "Grihapravesh",
    },
    {
      id: 6,
      image: "/pic6.jpeg",
      wishMessage:
        "Our Didas... The beautiful & vivacious trio",
      title: "The Sisters",
    },
  ]

  return (
    <CurtainOpener>
      <div
        className="min-h-screen bg-neutral-50 relative overflow-hidden"
        style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
      >
        {/* Decorative Elements */}
        {/* Optionally comment out or simplify DecorativeElements if too much */}
        {/* <DecorativeElements /> */}

        {/* Header */}
        <header className="text-center py-10 px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-800 mb-2">
            Happy Birthday
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-neutral-600 mb-4">Dida</h2>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            {"A celebration of love, laughter, and YOU!!!!!!"}
          </p>
        </header>

        {/* Vinyl Player */}
        <div className="flex justify-center mb-10 px-4">
          <VinylPlayer />
        </div>

        {/* Photo Cards Grid */}
        <main className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {photoCards.map((card) => (
              <PhotoCard key={card.id} image={card.image} wishMessage={card.wishMessage} title={card.title} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 px-4 relative z-10 border-t border-neutral-200">
          <p className="text-xl text-neutral-700 font-medium">{"With all our love"}</p>
          {/* Removed SVG emojis for subtlety */}
        </footer>
      </div>
    </CurtainOpener>
  )
}
