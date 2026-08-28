import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Pricing } from "@/components/pricing"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/ui/section-divider"

/**
 * Veluxe Section Divider System
 * ─────────────────────────────
 * Each section overlaps the previous one using a negative top-margin.
 * The rounded top corners of each section expose the PREVIOUS section's
 * background color in the corners, creating the "card lifting off" look
 * identical to the Veluxe Behance design.
 *
 * Stack order (z-index increases downward so each card sits ON TOP):
 *  Hero (dark)         z-0   bg-[#0A0A0A]  ← root bg
 *  Pricing (light)     z-10  bg-[#F5F5F5]  rounded-t-[3rem] -mt-10
 *  Features (dark)     z-20  bg-[#0A0A0A]  rounded-t-[3rem] -mt-10
 *  Stats (dark)        —     continues dark, no divider needed
 *  Testimonials (light)z-30  bg-[#F5F5F5]  rounded-t-[3rem] -mt-10
 *  CTA (light→dark)    z-40  bg-[#F5F5F5]  no top divider (same bg)
 *  Footer (dark)       z-50  bg-[#0A0A0A]  dark rounded notch at top
 */
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      {/* ══ 1. HERO — DARK ══════════════════════════════════════════════ */}
      <div className="relative z-0">
        <Hero />
      </div>

      {/* ══ 2. FLEET — MUTED  (center tab overlap) ════════════════ */}
      <div className="relative z-10 -mt-12 text-muted">
        <SectionDivider />
        <div className="bg-muted relative z-20">
          <Pricing />
        </div>
      </div>

      {/* ══ 3. FEATURES — DARK base  (lifts off the light fleet) ════════ */}
      <div className="relative z-20 -mt-12 text-background">
        <SectionDivider />
        <div className="bg-background relative z-20">
          <Features />
          <Stats />
        </div>
      </div>

      {/* ══ 4. TESTIMONIALS — MUTED  (lifts off the dark section) ══════ */}
      <div className="relative z-30 -mt-12 text-muted">
        <SectionDivider />
        <div className="bg-muted relative z-20">
          <Testimonials />
          <CTA />
        </div>
      </div>

      {/* ══ 5. FOOTER — DARK base  (lifts off the light CTA) ═══════════ */}
      <div className="relative z-40 -mt-12 text-background">
        <SectionDivider />
        <div className="bg-background relative z-20">
          <Footer />
        </div>
      </div>
    </main>
  )
}
