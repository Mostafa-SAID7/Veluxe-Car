import { Card } from "@/components/ui/card"
import { Wrench, Users, BookOpen, TrendingUp, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Expert Guidance",
    description: "Access maintenance tips from certified mechanics and experienced car owners.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Connect with thousands of car enthusiasts and get real-time advice.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Browse comprehensive guides for all vehicle types and maintenance tasks.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your vehicle maintenance history and upcoming service schedules.",
  },
  {
    icon: Shield,
    title: "Verified Experts",
    description: "All mechanics are verified and rated by our community members.",
  },
  {
    icon: Zap,
    title: "Quick Solutions",
    description: "Get instant answers to your car maintenance questions.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need for Car Care</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and community support to keep your vehicle in perfect condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
