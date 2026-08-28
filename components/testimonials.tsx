import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react"

const reviews = [
  {
    name: "OLENA MARCHENKO",
    stars: 5,
    text: "The rental went easily and without unnecessary questions. The car is clean, in perfect condition, picked up right at the airport. 10 minutes and we were on the road! Very convenient. Now only with you!",
    active: false,
  },
  {
    name: "IRYNA NESTERENKO",
    stars: 5,
    text: "Rented a Range Rover Vogue for the weekend — the car is just fire! Everything went perfectly: clean interior, powerful engine, incredible emotions. Comfort, power, feeling of confidence on the road. Very grateful to the manager for prompt assistance. Thank you team!",
    active: true,
  },
  {
    name: "IVAN KOVALCHUK",
    stars: 4,
    text: "Booking took a few minutes, documents were processed quickly. No hidden fees. Highly recommend for business trips!",
    active: false,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#F5F5F5] pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight uppercase tracking-tight max-w-sm">
            REAL IMPRESSIONS OF OUR CLIENTS
          </h2>
          <div className="flex gap-3 flex-shrink-0">
            <button id="prev-review" className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition">
              <ArrowLeft size={18} className="text-white" />
            </button>
            <button id="next-review" className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition">
              <ArrowRight size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Review cards */}
        <div className="relative flex items-center justify-center gap-4 py-4">

          {reviews.map((review, i) => (
            <div
              key={i}
              className={`
                rounded-[2rem] p-6 sm:p-8 transition-all duration-300 flex-shrink-0
                ${review.active
                  ? "bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d] border border-white/10 shadow-2xl z-10 w-full max-w-md scale-105"
                  : "bg-[#EAEAEA] opacity-60 scale-95 z-0 hidden sm:block w-64 lg:w-72"
                }
              `}
            >
              {review.active && (
                <div className="absolute top-6 right-6">
                  <ArrowUpRight size={18} className="text-gray-400" />
                </div>
              )}

              {/* Reviewer */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-full flex-shrink-0 ${review.active ? "bg-gray-600" : "bg-gray-300"}`} />
                <div>
                  <h4 className={`font-extrabold text-sm uppercase ${review.active ? "text-white" : "text-black"}`}>
                    {review.name}
                  </h4>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star
                        key={si}
                        size={12}
                        className={si < review.stars
                          ? review.active ? "fill-white text-white" : "fill-black text-black"
                          : "fill-gray-300 text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className={`text-sm leading-relaxed ${review.active ? "text-gray-300" : "text-gray-600"}`}>
                {review.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
