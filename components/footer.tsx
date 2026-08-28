import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/data"

export function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden pb-0">

      {/* Watermark */}
      <div className="w-full overflow-hidden select-none pointer-events-none" aria-hidden>
        <span
          className="block text-center font-extrabold tracking-tighter text-foreground/5 leading-none"
          style={{ fontSize: "clamp(60px, 18vw, 200px)" }}
        >
          Veluxe
        </span>
      </div>

      {/* Full-bleed car image card */}
      <div className="relative mx-0 rounded-[2.5rem] overflow-hidden -mt-10 mx-4 sm:mx-6 lg:mx-8 mb-0">
        <div className="relative h-[420px] sm:h-[500px] md:h-[560px] w-full">
          <Image
            src="/footer-car.jpg"
            alt="Luxury car on desert highway"
            fill
            className="object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

          {/* Floating labels — hidden on mobile */}
          <div className="hidden sm:block absolute left-8 top-1/2 -translate-y-[70%]">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white text-xs max-w-[160px]">
              <p className="font-bold leading-snug">ENGINE OF EMOTIONS<br /><span className="font-normal text-gray-300">UNDER THE HOOD</span></p>
            </div>
          </div>
          <div className="hidden md:block absolute right-8 top-[30%]">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white text-xs max-w-[160px] text-right">
              <p className="font-bold leading-snug">CONFIDENCE IN<br /><span className="font-normal text-gray-300">EVERY MOVE</span></p>
            </div>
          </div>
          <div className="hidden md:block absolute right-14 bottom-[30%]">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white text-xs max-w-[180px] text-right">
              <p className="font-bold leading-snug">CHOOSE CLASSIC<br /><span className="font-normal text-gray-300">PREMIUM CLASS</span></p>
            </div>
          </div>

          {/* Footer bar inside image */}
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">

              <div className="flex-shrink-0">
                <span className="text-white font-extrabold text-xl tracking-tighter block mb-1">Veluxe</span>
                <p className="text-gray-500 text-xs">2025 © Velux. All rights reserved.</p>
              </div>

              <nav className="flex flex-wrap gap-x-5 gap-y-2">
                {navLinks.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 text-xs hover:text-white transition"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Discord */}
                <button aria-label="Discord" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.103.12 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.208-.404.011-.882-.384-1.043a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                </button>
                {/* YouTube */}
                <button aria-label="YouTube" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </button>
                {/* Instagram */}
                <button aria-label="Instagram" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white" stroke="currentColor" strokeWidth={1.8}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </button>
                <Link href="#" className="text-gray-500 text-xs hover:text-white transition ml-1">Privacy policy</Link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
