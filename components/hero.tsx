import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pb-32 pt-32 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.jpg" 
          alt="Luxury car on salt flats" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Headline */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight uppercase">
            FIND A CAR IN 30 SECONDS! SIMPLE TERMS, INSTANT RESULT
          </h1>
        </div>

        {/* Booking Form Panel */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-full flex flex-col md:flex-row gap-2 items-center justify-between w-full shadow-2xl">
          
          <div className="flex-1 w-full bg-white rounded-full px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
            <span className="text-gray-500 font-medium">Location</span>
            <span className="text-black">⌄</span>
          </div>

          <div className="flex-1 w-full bg-white rounded-full px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
            <span className="text-gray-500 font-medium">Pick-up Date</span>
            <span className="text-black">⌄</span>
          </div>

          <div className="flex-1 w-full bg-white rounded-full px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
            <span className="text-gray-500 font-medium">Return Date</span>
            <span className="text-black">⌄</span>
          </div>

          <Button className="w-full md:w-auto bg-black text-white rounded-full px-8 py-7 h-auto flex items-center gap-3 hover:bg-black/80 transition-all">
            <span className="font-bold text-lg">Order Car</span>
            <div className="bg-white/20 p-2 rounded-full">
              <ArrowUpRight size={18} />
            </div>
          </Button>

        </div>
      </div>
    </section>
  )
}
