import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react"
import { reviews } from "@/data"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-muted pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight uppercase tracking-tight max-w-sm">
            REAL IMPRESSIONS OF OUR CLIENTS
          </h2>
          <div className="flex gap-3 flex-shrink-0">
            <button id="prev-review" className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center hover:bg-foreground/80 transition">
              <ArrowLeft size={18} className="text-background" />
            </button>
            <button id="next-review" className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center hover:bg-foreground/80 transition">
              <ArrowRight size={18} className="text-background" />
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
                  ? "bg-card border border-border shadow-2xl z-10 w-full max-w-md scale-105"
                  : "bg-background opacity-60 scale-95 z-0 hidden sm:block w-64 lg:w-72"
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
                <div className={`w-11 h-11 rounded-full flex-shrink-0 ${review.active ? "bg-muted-foreground/50" : "bg-muted-foreground/30"}`} />
                <div>
                  <h4 className={`font-extrabold text-sm uppercase ${review.active ? "text-foreground" : "text-foreground"}`}>
                    {review.name}
                  </h4>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star
                        key={si}
                        size={12}
                        className={si < review.stars
                          ? "fill-foreground text-foreground"
                          : "fill-muted-foreground/30 text-muted-foreground/30"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className={`text-sm leading-relaxed ${review.active ? "text-muted-foreground" : "text-muted-foreground"}`}>
                {review.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
