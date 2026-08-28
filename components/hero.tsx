import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pb-24 pt-28 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Luxury car on salt flats"
          fill
          className="object-cover opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
      </div>

      {/* Stats — top right */}
      <div className="absolute top-32 right-6 sm:right-10 z-10 text-right space-y-3 hidden sm:block">
        <div>
          <p className="text-white font-extrabold text-sm uppercase tracking-wider">1000+ HAPPY</p>
          <p className="text-white/60 text-xs uppercase tracking-wider">CLIENTS</p>
        </div>
        <div>
          <p className="text-white font-extrabold text-sm uppercase tracking-wider">250+ CARS</p>
          <p className="text-white/60 text-xs uppercase tracking-wider">PREMIUM CLASS</p>
        </div>
      </div>

      {/* Social icons — left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-4">
        {["▶", "◈", "◉"].map((icon, i) => (
          <div key={i} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition text-white/60 text-xs">
            {icon}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Headline */}
        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight uppercase">
            FIND A CAR IN 30 SECONDS! SIMPLE TERMS, INSTANT RESULT
          </h1>
        </div>

        {/* Booking Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 p-2 rounded-full flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full shadow-2xl">

          <div className="flex-1 bg-white rounded-full px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition min-w-0">
            <span className="text-gray-500 text-sm font-medium truncate">Location</span>
            <span className="text-gray-400 text-xs ml-2 flex-shrink-0">⌄</span>
          </div>

          <div className="flex-1 bg-white rounded-full px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition min-w-0">
            <span className="text-gray-500 text-sm font-medium truncate">Pick-up Date</span>
            <span className="text-gray-400 text-xs ml-2 flex-shrink-0">⌄</span>
          </div>

          <div className="flex-1 bg-white rounded-full px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition min-w-0">
            <span className="text-gray-500 text-sm font-medium truncate">Return Date</span>
            <span className="text-gray-400 text-xs ml-2 flex-shrink-0">⌄</span>
          </div>

          <button className="bg-black text-white rounded-full px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-black/80 transition-all flex-shrink-0 font-bold text-sm">
            Order Car
            <div className="bg-white/20 p-1.5 rounded-full">
              <ArrowUpRight size={14} />
            </div>
          </button>

        </div>
      </div>
    </section>
  )
}
