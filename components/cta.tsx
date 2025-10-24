import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Join the Community?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Start your free trial today and get access to expert advice, maintenance guides, and a supportive community of
          car enthusiasts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
            Start Free Trial <ArrowRight size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
