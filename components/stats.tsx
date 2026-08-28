import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Stats() {
  return (
    <section className="w-full bg-[#0A0A0A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#EAEAEA] rounded-[3rem] p-4 relative overflow-hidden">
          
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero.jpg" 
              alt="Car on road" 
              fill 
              className="object-cover object-bottom opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase tracking-tight">
                RENT A CAR<br/>IN JUST 3 STEPS
              </h2>
              
              <div className="mt-auto pt-32">
                <p className="text-gray-300 text-sm max-w-sm">
                  We made sure that renting a car is not only fast, but also pleasant. From the first click to starting the engine — maximum comfort, minimum effort.
                </p>
                <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-4 hover:bg-gray-200 transition">
                  Order a car 
                  <div className="bg-black text-white p-2 rounded-full">
                    <ArrowUpRight size={16} />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              
              {/* Step 1 */}
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-black/60 transition cursor-pointer group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-white text-3xl font-bold">1</span>
                  <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white transition" />
                </div>
                <h3 className="text-white text-2xl font-bold uppercase mb-2">CHOOSE CAR</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Go to the fleet. Filter by type, date, price or city. Choose the car that suits you best.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 hover:bg-white/20 transition cursor-pointer flex justify-between items-center group">
                <div className="flex items-center gap-6">
                  <span className="text-white/60 text-xl font-bold">2</span>
                  <h3 className="text-white text-xl font-bold uppercase">MAKE PAYMENT</h3>
                </div>
                <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white transition" />
              </div>

              {/* Step 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 hover:bg-white/10 transition cursor-pointer flex justify-between items-center group">
                <div className="flex items-center gap-6">
                  <span className="text-white/60 text-xl font-bold">3</span>
                  <h3 className="text-white text-xl font-bold uppercase">GET CAR</h3>
                </div>
                <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white transition" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
