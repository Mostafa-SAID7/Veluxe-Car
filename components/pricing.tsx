import { ArrowUpRight, User, Star } from "lucide-react"
import Image from "next/image"

const cars = [
  {
    brand: "BMW",
    model: "3 SERIES (G20)",
    image: "/fleet1.jpg",
    passengers: 5,
    rating: 5.0,
    year: "2022",
    transmission: "automatic",
    fuel: "gasoline",
    price: "65 €",
  },
  {
    brand: "MERCEDES-BENZ",
    model: "E-CLASS W213",
    image: "/fleet2.jpg",
    passengers: 5,
    rating: 5.0,
    year: "2022",
    transmission: "automatic",
    fuel: "gasoline",
    price: "75 €",
  },
  {
    brand: "BMW",
    model: "3 SERIES (G20 LCI)",
    image: "/fleet1.jpg",
    passengers: 5,
    rating: 5.0,
    year: "2022",
    transmission: "automatic",
    fuel: "gasoline",
    price: "70 €",
  },
]

export function Pricing() {
  return (
    <section id="fleet" className="w-full bg-[#F5F5F5] pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header: image card + title */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
          {/* Left: preview card */}
          <div className="relative rounded-[2rem] overflow-hidden h-56 sm:h-64 md:h-72 w-full">
            <Image src="/hero.jpg" alt="Luxury driving" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
              <div className="self-end bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                <span className="text-white font-bold tracking-widest text-xs">Veluxe</span>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/10">
                  PREMIUM COMFORT EVERY DAY
                </span>
                <br />
                <span className="inline-block bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/10">
                  STYLE THAT SPEAKS FOR ITSELF
                </span>
              </div>
            </div>
          </div>

          {/* Right: title + description */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight uppercase tracking-tight">
              RENTAL HITS — CARS THAT ARE BOOKED FIRST!
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
              Popular cars that are in highest demand among our clients. They are booked first — for comfort, reliability and style.
            </p>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-[#EAEAEA] rounded-[2rem] p-5 hover:bg-[#E0E0E0] transition-colors duration-300 flex flex-col"
            >
              <div className="text-center mb-4">
                <p className="text-black font-semibold text-xs uppercase tracking-wide">{car.brand}</p>
                <h4 className="text-black font-medium text-sm">{car.model}</h4>
              </div>

              <div className="relative h-32 w-full mb-4 mix-blend-multiply flex-shrink-0">
                <Image src={car.image} alt={`${car.brand} ${car.model}`} fill className="object-contain" />
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500 font-medium mb-1.5">
                <div className="flex items-center gap-1">
                  <User size={12} /> {car.passengers}
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-black text-black" /> {car.rating}
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-4">{car.year} • {car.transmission} • {car.fuel}</p>

              <div className="flex items-end justify-between mt-auto">
                <div>
                  <span className="text-black font-extrabold text-lg">{car.price}</span>
                  <span className="text-black text-xs font-medium"> / day</span>
                </div>
                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black/80 transition group flex-shrink-0">
                  <ArrowUpRight size={16} className="text-white group-hover:scale-110 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center md:justify-end">
          <button className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-black/80 transition">
            Go to fleet
          </button>
        </div>

      </div>
    </section>
  )
}
