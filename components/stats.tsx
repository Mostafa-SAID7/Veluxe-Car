import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Stats() {
  return (
    <section className="w-full bg-[#0A0A0A] pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="relative rounded-[2.5rem] overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image src="/hero.jpg" alt="Luxury car" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 min-h-[480px] items-center">

            {/* Left — headline + cta */}
            <div className="flex flex-col justify-between h-full gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">
                RENT A CAR IN JUST 3 STEPS
              </h2>

              <div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6">
                  We made sure that renting a car is not only fast, but also pleasant. Maximum comfort, minimum effort.
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-3 hover:bg-gray-100 transition">
                  Order a car
                  <div className="bg-black text-white p-1.5 rounded-full">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right — steps */}
            <div className="flex flex-col gap-3">

              {/* Step 1 — expanded */}
              <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-6 group cursor-pointer hover:bg-black/70 transition">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-white transition" />
                </div>
                <h3 className="text-white text-lg font-extrabold uppercase mb-2">CHOOSE CAR</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Go to the fleet. Filter by type, date, price or city. Pick the car that suits you.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white/8 backdrop-blur-md border border-white/5 rounded-[1.5rem] px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-white/15 transition group">
                <div className="flex items-center gap-5">
                  <span className="text-white/50 font-bold">2</span>
                  <h3 className="text-white text-sm font-extrabold uppercase">MAKE PAYMENT</h3>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition" />
              </div>

              {/* Step 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-[1.5rem] px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-white/10 transition group">
                <div className="flex items-center gap-5">
                  <span className="text-white/50 font-bold">3</span>
                  <h3 className="text-white text-sm font-extrabold uppercase">GET CAR</h3>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
