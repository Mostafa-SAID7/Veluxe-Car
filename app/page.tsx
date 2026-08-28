import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Pricing } from "@/components/pricing"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

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
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#0A0A0A" }}>
      <Header />

      {/* ══ 1. HERO — DARK ══════════════════════════════════════════════ */}
      <div className="relative z-0">
        <Hero />
      </div>

      {/* ══ 2. FLEET — LIGHT  (lifts off the dark hero) ════════════════
           Rounded top corners reveal the dark hero background in corners. */}
      <div
        className="relative z-10 bg-[#F5F5F5] rounded-t-[3rem] -mt-12"
        style={{ boxShadow: "0 -8px 60px rgba(0,0,0,0.5)" }}
      >
        <Pricing />
      </div>

      {/* ══ 3. FEATURES — DARK  (lifts off the light fleet) ════════════
           Rounded top corners reveal the light fleet background in corners. */}
      <div
        className="relative z-20 bg-[#0A0A0A] rounded-t-[3rem] -mt-12"
        style={{ boxShadow: "0 -8px 60px rgba(0,0,0,0.6)" }}
      >
        <Features />
        {/* Stats continues on the same dark surface — no divider */}
        <Stats />
      </div>

      {/* ══ 4. TESTIMONIALS — LIGHT  (lifts off the dark section) ══════
           Rounded top corners reveal the dark background in corners. */}
      <div
        className="relative z-30 bg-[#F5F5F5] rounded-t-[3rem] -mt-12"
        style={{ boxShadow: "0 -8px 60px rgba(0,0,0,0.5)" }}
      >
        <Testimonials />

        {/* CTA (FAQ + road + contact form) continues on light, then
            internally transitions to dark with its own rounded panel */}
        <CTA />
      </div>

      {/* ══ 5. FOOTER — DARK  (lifts off the light CTA) ════════════════
           Large rounded top creates the "dark notch" seen at the bottom
           of the FAQ/CTA section in the screenshots. */}
      <div
        className="relative z-40 bg-[#0A0A0A] rounded-t-[3rem] -mt-12"
        style={{ boxShadow: "0 -8px 60px rgba(0,0,0,0.8)" }}
      >
        <Footer />
      </div>
    </main>
  )
}
