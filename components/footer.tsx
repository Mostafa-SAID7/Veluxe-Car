import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] px-4 sm:px-6 lg:px-8 pt-0 pb-0 overflow-hidden">

      {/* Large watermark text */}
      <div className="relative w-full overflow-hidden">
        <span
          className="block text-center font-extrabold tracking-tighter text-[#111111] select-none pointer-events-none"
          style={{ fontSize: "clamp(80px, 20vw, 220px)", lineHeight: 0.85 }}
          aria-hidden
        >
          Veluxe
        </span>
      </div>

      {/* Full-width car image with dark rounded card overlay */}
      <div className="relative w-full rounded-[2rem] overflow-hidden -mt-12">
        <div className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="/footer-car.jpg"
            alt="Luxury car on desert highway"
            fill
            className="object-cover"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

          {/* Floating labels on image */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-white text-sm max-w-[180px]">
              <p className="font-bold">ENGINE OF EMOTIONS<br/><span className="font-normal text-gray-300">UNDER THE HOOD</span></p>
            </div>
          </div>
          <div className="absolute right-8 top-1/3">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-white text-sm max-w-[180px] text-right">
              <p className="font-bold">CONFIDENCE IN<br/><span className="font-normal text-gray-300">EVERY MOVE</span></p>
            </div>
          </div>
          <div className="absolute right-16 bottom-1/3">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-white text-sm max-w-[200px] text-right">
              <p className="font-bold">CHOOSE CLASSIC<br/><span className="font-normal text-gray-300">PREMIUM CLASS</span></p>
            </div>
          </div>

          {/* Footer Nav — sits inside the image at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div>
                <span className="text-white font-extrabold text-2xl tracking-tighter block mb-2">Veluxe</span>
                <p className="text-gray-400 text-xs">2025 © Velux. All rights reserved.</p>
              </div>

              <nav className="flex flex-wrap gap-6">
                {["Home", "Fleet", "Services", "Terms", "About Us", "Contact"].map(item => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                {/* Discord */}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.103.12 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                </div>
                {/* YouTube */}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </div>
                {/* Instagram */}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth={1.8}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <Link href="#" className="text-gray-400 text-xs hover:text-white transition ml-2">Privacy policy</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dark "notch" bump at bottom pointing down — matching Veluxe design */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0A0A0A] rounded-t-none" style={{
          clipPath: "ellipse(50% 100% at 50% 100%)"
        }} />
      </div>

    </footer>
  )
}
