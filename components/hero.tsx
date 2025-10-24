import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-secondary py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              Join 50,000+ Car Enthusiasts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Your Complete Car Maintenance Community
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-lg">
              Connect with expert mechanics, share maintenance tips, and keep your vehicle running smoothly with our
              trusted community platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                Start Free Trial <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary-foreground/20 rounded-2xl backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚗</div>
                <p className="text-primary-foreground/80">Your automotive hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
