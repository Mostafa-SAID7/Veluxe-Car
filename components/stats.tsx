export function Stats() {
  const stats = [
    { number: "50K+", label: "Active Members" },
    { number: "100K+", label: "Maintenance Tips" },
    { number: "4.9★", label: "Community Rating" },
    { number: "24/7", label: "Expert Support" },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
