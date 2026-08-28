import { ArrowUpRight } from "lucide-react"

export function Features() {
  return (
    <section id="services" className="w-full bg-[#0A0A0A] pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight max-w-3xl mx-auto">
            WHY HUNDREDS OF CLIENTS TRUST US EVERY MONTH?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            The most popular cars among our clients — a proven choice for any trip.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Card 1 — White */}
          <div className="bg-white rounded-[2rem] p-7 flex flex-col justify-between min-h-[220px] group">
            <div>
              <h3 className="text-black text-base font-extrabold uppercase mb-3">
                FLEXIBLE RENTAL TERMS
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Rent for any term — from a few hours to a month. Options with and without deposit. Only favorable terms.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <div className="w-12 h-12 border-2 border-black/10 rounded-full flex items-center justify-center group-hover:bg-black group-hover:border-black transition cursor-pointer">
                <span className="text-black group-hover:text-white transition text-xl">⊙</span>
              </div>
            </div>
          </div>

          {/* Card 2 — Dark glassmorphic */}
          <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-7 flex flex-col justify-between min-h-[220px] group">
            <div>
              <h3 className="text-white text-base font-extrabold uppercase mb-3">
                CAR DELIVERY
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Delivery to any point — city, airport, hotel or individual address.
              </p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <span className="text-white font-extrabold tracking-widest text-sm">Veluxe</span>
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition cursor-pointer">
                <ArrowUpRight size={16} className="text-white group-hover:text-black transition" />
              </div>
            </div>
          </div>

          {/* Card 3 — White */}
          <div className="bg-white rounded-[2rem] p-7 flex flex-col justify-between min-h-[220px] group sm:col-span-2 md:col-span-1">
            <div>
              <h3 className="text-black text-base font-extrabold uppercase mb-3">
                INSURANCE & SAFETY
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Full insurance coverage included. Drive with confidence knowing you are fully protected.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-black group-hover:border-black transition cursor-pointer">
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-sm sm:text-base text-center mt-14 max-w-2xl mx-auto leading-relaxed">
          We created a service where every detail works for your comfort and confidence. This is how easily and quickly you can rent a car without extra hassle.
        </p>

      </div>
    </section>
  )
}
