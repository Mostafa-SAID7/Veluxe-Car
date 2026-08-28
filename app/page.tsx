import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Pricing } from "@/components/pricing"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <Header />

      {/* ── DARK HERO ─────────────────────── */}
      <Hero />

      {/*
        Section Divider: Dark → Light
        The Fleet section has rounded-t-[3rem] so it creates a "hump" over the dark hero below.
        We add a white SVG wave on top for extra polish.
      */}
      <div className="relative -mt-16 z-20">
        {/* White bump riding up into the dark section */}
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20 fill-[#F5F5F5]" preserveAspectRatio="none">
          <path d="M0,80 L0,60 Q360,0 720,0 Q1080,0 1440,60 L1440,80 Z" />
        </svg>
      </div>

      {/* ── LIGHT FLEET ───────────────────── */}
      <div className="bg-[#F5F5F5] -mt-1">
        <Pricing />
      </div>

      {/*
        Section Divider: Light → Dark
        Black wave curves up from the dark section.
      */}
      <div className="relative -mt-1 z-20">
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20 fill-[#0A0A0A]" preserveAspectRatio="none">
          <path d="M0,0 L0,40 Q360,80 720,80 Q1080,80 1440,40 L1440,0 Z" />
        </svg>
      </div>

      {/* ── DARK FEATURES ─────────────────── */}
      <div className="bg-[#0A0A0A] -mt-1">
        <Features />
      </div>

      {/* ── DARK STATS / 3 STEPS ─────────── */}
      <div className="bg-[#0A0A0A]">
        <Stats />
      </div>

      {/*
        Section Divider: Dark → Light (before Testimonials)
        White bump curves up.
      */}
      <div className="relative -mt-1 z-20">
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20 fill-[#F5F5F5]" preserveAspectRatio="none">
          <path d="M0,80 L0,60 Q360,0 720,0 Q1080,0 1440,60 L1440,80 Z" />
        </svg>
      </div>

      {/* ── LIGHT TESTIMONIALS ────────────── */}
      <div className="bg-[#F5F5F5] -mt-1">
        <Testimonials />
      </div>

      {/* ── CTA (FAQ + Contact) ────────────
          CTA starts in light (FAQ) and transitions itself to dark via internal rounded panel.
      */}
      <CTA />

      {/* ── FOOTER ────────────────────────── */}
      <Footer />
    </main>
  )
}
