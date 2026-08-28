import { ArrowUpRight, Youtube, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pb-24 pt-28 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Luxury car on salt flats"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/10 to-transparent" />
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
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-3">
        {[
          { icon: Youtube, label: "YouTube" },
          { icon: Instagram, label: "Instagram" },
          { icon: Twitter, label: "Twitter" },
        ].map(({ icon: Icon, label }) => (
          <button key={label} aria-label={label} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition text-white/70 hover:text-white">
            <Icon size={15} />
          </button>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Headline */}
        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight uppercase">
            FIND A CAR IN 30 SECONDS! SIMPLE TERMS, INSTANT RESULT
          </h1>
        </div>

        {/* Booking Form — always dark pill */}
        <div className="bg-[#222222] p-2 rounded-full flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full shadow-2xl mt-12">

          <div className="flex-1 min-w-0">
            <Select>
              <SelectTrigger className="w-full bg-background text-foreground/60 border-0 rounded-full px-6 py-7 shadow-none hover:bg-muted transition text-sm font-medium focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kyiv">Kyiv</SelectItem>
                <SelectItem value="lviv">Lviv</SelectItem>
                <SelectItem value="odesa">Odesa</SelectItem>
                <SelectItem value="airport">Airport</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 min-w-0">
            <Select>
              <SelectTrigger className="w-full bg-background text-foreground/60 border-0 rounded-full px-6 py-7 shadow-none hover:bg-muted transition text-sm font-medium focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Pick-up Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 min-w-0">
            <Select>
              <SelectTrigger className="w-full bg-background text-foreground/60 border-0 rounded-full px-6 py-7 shadow-none hover:bg-muted transition text-sm font-medium focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Return Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-day">1 Day</SelectItem>
                <SelectItem value="3-days">3 Days</SelectItem>
                <SelectItem value="1-week">1 Week</SelectItem>
                <SelectItem value="1-month">1 Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button className="bg-foreground text-background rounded-full px-8 py-4 flex items-center justify-center gap-3 hover:bg-foreground/90 transition-all flex-shrink-0 font-extrabold text-sm">
            Order Car
            <div className="bg-background/20 w-6 h-6 rounded-full flex items-center justify-center">
              <ArrowUpRight size={12} className="text-background" />
            </div>
          </button>

        </div>
      </div>
    </section>
  )
}
