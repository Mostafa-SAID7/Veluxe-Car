import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Car Owner",
    content: "AutoCare Community helped me save thousands on unnecessary repairs. The expert advice is invaluable!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Certified Mechanic",
    content: "As a mechanic, I love connecting with customers here. The platform is intuitive and professional.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "DIY Enthusiast",
    description:
      "The maintenance guides are incredibly detailed. I fixed my transmission issue following the step-by-step tutorial.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Fleet Manager",
    content: "Managing maintenance for 50+ vehicles is now effortless. The tracking system is a game-changer.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Loved by Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what thousands of satisfied members have to say about AutoCare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">&quot;{testimonial.content}&quot;</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
