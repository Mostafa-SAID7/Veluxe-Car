import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for casual car owners",
    features: [
      "Access to community forum",
      "Basic maintenance guides",
      "Monthly newsletter",
      "Limited expert consultations",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For dedicated car enthusiasts",
    features: [
      "Everything in Starter",
      "Priority expert support",
      "Advanced maintenance tracking",
      "Exclusive video tutorials",
      "Personalized recommendations",
      "Ad-free experience",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/month",
    description: "For professional mechanics",
    features: [
      "Everything in Pro",
      "Unlimited consultations",
      "Business profile listing",
      "Client management tools",
      "Revenue sharing program",
      "Priority feature requests",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to upgrade or downgrade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col ${tier.highlighted ? "ring-2 ring-primary md:scale-105 shadow-xl" : ""}`}
            >
              {tier.highlighted && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mb-4">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
              </div>
              <Button
                className={`w-full mb-8 ${
                  tier.highlighted ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                }`}
              >
                {tier.cta}
              </Button>
              <div className="space-y-4 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
