import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, User, Star } from "lucide-react"
import Image from "next/image"

export function Pricing() {
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
      price: "65 €"
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
      price: "75 €"
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
      price: "70 €"
    }
  ]

  return (
    <section id="fleet" className="relative w-full bg-[#F5F5F5] rounded-t-[3rem] -mt-10 z-20 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div className="relative rounded-3xl overflow-hidden h-[300px] w-full">
            <Image 
              src="/hero.jpg" 
              alt="Luxury driving" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-between p-8">
              <div className="self-end bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                <span className="text-white font-bold tracking-widest text-sm">Veluxe</span>
              </div>
              <h3 className="text-white text-3xl font-bold">PREMIUM COMFORT EVERY DAY</h3>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight uppercase tracking-tight">
              RENTAL HITS — CARS THAT ARE BOOKED FIRST!
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Popular cars that are in highest demand among our clients. They are booked first — for comfort, reliability and style.
            </p>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cars.map((car, index) => (
            <div key={index} className="bg-[#EAEAEA] rounded-[2rem] p-6 hover:bg-[#E2E2E2] transition duration-300">
              <div className="text-center mb-6">
                <p className="text-black font-semibold">{car.brand}</p>
                <h4 className="text-xl text-black">{car.model}</h4>
              </div>
              
              <div className="relative h-40 w-full mb-6 mix-blend-multiply">
                <Image 
                  src={car.image} 
                  alt={`${car.brand} ${car.model}`} 
                  fill 
                  className="object-contain"
                />
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-3">
                <div className="flex items-center gap-1">
                  <User size={14} /> {car.passengers}
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-black text-black" /> {car.rating}
                </div>
              </div>

              <div className="text-xs text-gray-500 mb-6">
                {car.year} • {car.transmission} • {car.fuel}
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="text-black font-bold text-xl">{car.price}</span>
                  <span className="text-black font-medium text-sm"> / DAY</span>
                </div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black/80 transition group">
                  <ArrowUpRight size={20} className="text-white group-hover:scale-110 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/80 transition">
            Go to fleet
          </button>
        </div>

      </div>
    </section>
  )
}
