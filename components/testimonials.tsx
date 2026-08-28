import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#F5F5F5] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight uppercase tracking-tight max-w-xl">
            REAL IMPRESSIONS OF OUR CLIENTS
          </h2>
          <div className="flex gap-4">
            <button className="w-14 h-14 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition">
              <ArrowLeft size={24} className="text-white" />
            </button>
            <button className="w-14 h-14 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition">
              <ArrowRight size={24} className="text-white" />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-10">
          
          {/* Left Card (Background) */}
          <div className="hidden md:block absolute left-0 w-1/3 bg-[#EAEAEA] rounded-[2rem] p-8 opacity-60 scale-90 -translate-x-10 z-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-black uppercase">OLENA MARCHENKO</h4>
                <div className="flex text-black">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-black" />)}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              The rental went easily and without unnecessary questions. The car is clean, in perfect condition. Picked up right at the airport.
            </p>
          </div>

          {/* Center Card (Foreground) */}
          <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-br from-[#1c1c1c] to-[#0A0A0A] rounded-[2rem] p-10 shadow-2xl border border-white/10 group">
            <div className="absolute top-8 right-8">
               <ArrowUpRight size={24} className="text-gray-400 group-hover:text-white transition" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-400 rounded-full border-2 border-white/20"></div>
              <div>
                <h4 className="font-bold text-white uppercase text-lg">IRYNA NESTERENKO</h4>
                <div className="flex text-white">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-white" />)}
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Rented a Range Rover Vogue for the weekend — the car is just fire! Everything went perfectly: clean interior, powerful engine, incredible emotions. Comfort, power, feeling of confidence on the road. Very grateful to the manager for prompt assistance and loyalty. Thank you team for such a service!
            </p>
          </div>

          {/* Right Card (Background) */}
          <div className="hidden md:block absolute right-0 w-1/3 bg-[#EAEAEA] rounded-[2rem] p-8 opacity-60 scale-90 translate-x-10 z-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-black uppercase">IVAN KOVALCHUK</h4>
                <div className="flex text-black">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-black" />)}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Booking a car took just a few minutes, documents were processed quickly. No hidden fees. Highly recommend!
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
