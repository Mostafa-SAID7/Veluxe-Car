"use client"

import { useState } from "react"
import { ArrowUpRight, Plus, Minus } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    num: "01",
    q: "What documents are needed to rent a car?",
    bold: "documents",
    answer: "To rent a car without a driver you need:\n• Passport or ID card\n• Driver's license (valid for at least 2 years)\n• Bank card for payment (or cash, if provided by the terms)",
  },
  {
    num: "02",
    q: "Are there age restrictions for rental?",
    bold: "age restrictions",
    answer: "Drivers must be at least 21 years old with a minimum of 2 years driving experience.",
  },
  {
    num: "03",
    q: "Does insurance come with the rental cost?",
    bold: "insurance",
    answer: "Basic insurance is included in the rental price. Comprehensive coverage is available as an additional option.",
  },
  {
    num: "04",
    q: "Is car delivery to an address possible?",
    bold: "car delivery",
    answer: "Yes! We deliver to any point: home address, hotel, airport or business center.",
  },
]

function FAQItem({ item, defaultOpen }: { item: typeof faqs[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen)

  const renderQ = () => {
    const boldLower = item.bold.toLowerCase()
    const idx = item.q.toLowerCase().indexOf(boldLower)
    if (idx === -1) return <span className="font-medium">{item.q}</span>
    return (
      <>
        <span className="font-medium">{item.q.slice(0, idx)}</span>
        <strong className="font-extrabold">{item.q.slice(idx, idx + item.bold.length)}</strong>
        <span className="font-medium">{item.q.slice(idx + item.bold.length)}</span>
      </>
    )
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <button
        id={`faq-${item.num}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="text-gray-400 text-xs font-semibold flex-shrink-0">{item.num}</span>
          <span className="text-black text-sm sm:text-base uppercase tracking-wide">{renderQ()}</span>
        </div>
        <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ml-3 transition-colors ${open ? "bg-black" : "border border-gray-200"}`}>
          {open
            ? <Minus size={14} className="text-white" />
            : <Plus size={14} className="text-gray-600" />
          }
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 pl-[3.25rem] text-gray-500 text-sm leading-relaxed whitespace-pre-line">
          {item.answer}
        </div>
      )}
    </div>
  )
}

export function CTA() {
  return (
    <>
      {/* ── FAQ ─────────────────────────────────────────── */}
      <section id="faq" className="w-full bg-[#F5F5F5] pt-6 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black text-center mb-12 tracking-tighter">
            FAQ
          </h2>
          <div className="flex flex-col gap-2.5 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.num} item={faq} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────── */}
      <section id="contact" className="relative w-full overflow-hidden bg-[#F5F5F5]">
        {/* Road image */}
        <div className="relative w-full h-48 sm:h-64">
          <Image src="/road.jpg" alt="Desert road" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5]/60 via-transparent to-transparent" />
        </div>

        {/* Dark contact panel */}
        <div className="relative bg-[#0A0A0A] rounded-t-[3rem] -mt-16 z-10 px-4 sm:px-6 lg:px-8 pt-14 pb-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase leading-tight tracking-tight mb-4">
                READY TO RENT A CAR WITHOUT EXTRA HASSLE?
              </h2>
              <p className="text-gray-500 text-sm max-w-xs mb-8 leading-relaxed">
                Individual approach, transparent conditions, luxury class cars. We take care of everything.
              </p>
              {/* Socials */}
              <div className="flex gap-3">
                {["Discord", "YouTube", "Instagram"].map((s) => (
                  <button key={s} aria-label={s} className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition text-white/40 text-xs font-bold">
                    {s[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="flex flex-col gap-3">
              {[
                { id: "cta-name", type: "text", ph: "Full name" },
                { id: "cta-phone", type: "tel", ph: "Phone number" },
                { id: "cta-email", type: "email", ph: "Email" },
              ].map(({ id, type, ph }) => (
                <input
                  key={id}
                  id={id}
                  type={type}
                  placeholder={ph}
                  className="w-full bg-transparent border border-white/15 text-white placeholder:text-gray-600 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-white/40 transition"
                />
              ))}
              <div className="pt-1">
                <button
                  id="cta-submit"
                  className="bg-white text-black font-bold px-7 py-3.5 rounded-full flex items-center gap-3 text-sm hover:bg-gray-100 transition"
                >
                  Submit
                  <div className="bg-black text-white p-1.5 rounded-full">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
