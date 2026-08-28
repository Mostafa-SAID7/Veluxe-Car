import { ArrowUpRight } from "lucide-react"

export function Features() {
  return (
    <section id="services" className="w-full bg-background pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight uppercase tracking-tight max-w-3xl mx-auto">
            WHY HUNDREDS OF CLIENTS TRUST US EVERY MONTH?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            The most popular cars among our clients — a proven choice for any trip.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Card 1 — inverted card */}
          <div className="bg-foreground rounded-[2rem] p-7 flex flex-col justify-between min-h-[220px] group">
            <div>
              <h3 className="text-background text-base font-extrabold uppercase mb-3">
                FLEXIBLE RENTAL TERMS
              </h3>
              <p className="text-background/60 text-sm leading-relaxed">
                Rent for any term — from a few hours to a month. Options with and without deposit. Only favorable terms.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <div className="w-12 h-12 border-2 border-background/20 rounded-full flex items-center justify-center group-hover:bg-background group-hover:border-background transition cursor-pointer">
                <span className="text-background group-hover:text-foreground transition text-xl">⊙</span>
              </div>
            </div>
          </div>

          {/* Card 2 — dark card */}
          <div className="bg-card border border-border rounded-[2rem] p-7 flex flex-col justify-between min-h-[220px] group">
            <div>
              <h3 className="text-foreground text-base font-extrabold uppercase mb-3">
                CAR DELIVERY
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Delivery to any point — city, airport, hotel or individual address.
              </p>
            </div>
            <div className="flex justify-between items-end mt-6">
              <span className="text-foreground font-extrabold tracking-widest text-sm">Veluxe</span>
              <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition cursor-pointer">
                <ArrowUpRight size={16} className="text-foreground group-hover:text-background transition" />
              </div>
            </div>
          </div>

          {/* Card 3 — inverted card */}
          <div className="bg-foreground rounded-[2rem] p-7 flex flex-col justify-between min-h-[220px] group sm:col-span-2 md:col-span-1">
            <div>
              <h3 className="text-background text-base font-extrabold uppercase mb-3">
                INSURANCE & SAFETY
              </h3>
              <p className="text-background/60 text-sm leading-relaxed">
                Full insurance coverage included. Drive with confidence knowing you are fully protected.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <div className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center group-hover:bg-background group-hover:border-background transition cursor-pointer">
                <ArrowUpRight size={16} className="text-background/60 group-hover:text-foreground transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm sm:text-base text-center mt-14 max-w-2xl mx-auto leading-relaxed">
          We created a service where every detail works for your comfort and confidence. This is how easily and quickly you can rent a car without extra hassle.
        </p>

      </div>
    </section>
  )
}
