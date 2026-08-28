import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Features() {
  return (
    <section id="services" className="w-full bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8 relative z-10 -mt-[4rem] pb-32">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase tracking-tight max-w-4xl mx-auto">
            WHY HUNDREDS OF CLIENTS TRUST US EVERY MONTH?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The most popular cars among our clients — a proven choice for any trip.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between h-[300px]">
            <div>
              <h3 className="text-black text-xl font-bold uppercase mb-4">FLEXIBLE RENTAL TERMS</h3>
              <p className="text-gray-600 text-sm">
                Possibility to rent for any term (from a few hours to a month). Options with and without deposit. Only favorable terms.
              </p>
            </div>
            <div className="relative h-32 mt-4 -mr-8 -mb-8 overflow-hidden rounded-br-[2rem]">
                <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full border-[16px] border-black opacity-80 translate-x-8 translate-y-8"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#1c1c1c] to-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between h-[300px] text-white group">
            <div>
              <h3 className="text-xl font-bold uppercase mb-4">CAR DELIVERY</h3>
              <p className="text-gray-400 text-sm">
                Delivery to any point in the city, airport, hotel or to an individual address.
              </p>
            </div>
            <div className="flex justify-between items-end">
              <span className="font-bold tracking-widest">Veluxe</span>
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition cursor-pointer">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between h-[300px]">
            <div>
              <h3 className="text-black text-xl font-bold uppercase mb-4">INSURANCE & SAFETY</h3>
              <p className="text-gray-600 text-sm">
                Description block for the site that will be placed in this block. This is an example layout.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto">
           <p className="text-gray-400 text-xl font-light">
             We have created a service where every detail works for your comfort and confidence. This is how easily and quickly you can rent a car without extra hassle.
           </p>
        </div>

      </div>
    </section>
  )
}
