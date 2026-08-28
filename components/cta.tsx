"use client"

import { useState } from "react"
import { ArrowUpRight, Plus, Minus } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    num: "01",
    question: "WHAT DOCUMENTS ARE NEEDED TO RENT A CAR?",
    boldWords: ["DOCUMENTS", "NEEDED"],
    answer: "To rent a car without a driver you need:\n• Passport or ID card\n• Driver's license (valid for at least 2 years)\n• Bank card for payment (or cash, if provided by the terms)"
  },
  {
    num: "02",
    question: "ARE THERE AGE RESTRICTIONS FOR RENTAL?",
    boldWords: ["AGE", "RESTRICTIONS"],
    answer: "Drivers must be at least 21 years old with at least 2 years of driving experience."
  },
  {
    num: "03",
    question: "DOES INSURANCE COME WITH THE RENTAL COST?",
    boldWords: ["INSURANCE"],
    answer: "Basic insurance is included in the rental price. Comprehensive coverage is available as an additional option."
  },
  {
    num: "04",
    question: "IS CAR DELIVERY TO AN ADDRESS POSSIBLE?",
    boldWords: ["CAR", "DELIVERY"],
    answer: "Yes! We deliver to any point: home address, hotel, airport or business center."
  }
]

function FAQItem({ item }: { item: typeof faqs[0] }) {
  const [open, setOpen] = useState(item.num === "01")

  const formatQuestion = (text: string) => {
    return text.split(" ").map((word, i) => {
      const clean = word.replace(/[^A-Z]/g, "")
      if (item.boldWords.includes(clean)) {
        return <strong key={i} className="font-extrabold">{word} </strong>
      }
      return <span key={i}>{word} </span>
    })
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300">
      <button
        id={`faq-btn-${item.num}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
      >
        <div className="flex items-center gap-6">
          <span className="text-gray-400 font-semibold text-sm w-6">{item.num}</span>
          <span className="text-black font-medium text-sm md:text-base">
            {formatQuestion(item.question)}
          </span>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${open ? "bg-black" : "border border-gray-300"}`}>
          {open ? <Minus size={16} className="text-white" /> : <Plus size={16} className="text-black" />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 pl-[4.5rem] text-gray-600 text-sm leading-relaxed whitespace-pre-line">
          {item.answer}
        </div>
      )}
    </div>
  )
}

export function CTA() {
  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="w-full bg-[#F5F5F5] pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-extrabold text-black text-center mb-16 tracking-tighter">
            FAQ
          </h2>
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {faqs.map(faq => <FAQItem key={faq.num} item={faq} />)}
          </div>
        </div>
      </section>

      {/* CTA Section — Road image with contact form */}
      <section id="contact" className="relative w-full overflow-hidden">
        {/* Road image as full-bleed background */}
        <div className="relative w-full h-72 md:h-96">
          <Image src="/road.jpg" alt="Desert road" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5] via-transparent to-transparent" />
        </div>

        {/* Dark rounded contact panel */}
        <div className="relative bg-[#0A0A0A] rounded-t-[3rem] -mt-20 z-10 px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-tight tracking-tight mb-4">
                READY TO RENT A CAR WITHOUT EXTRA HASSLE?
              </h2>
              <p className="text-gray-400 text-sm max-w-sm mb-10">
                Individual approach, transparent conditions, luxury class cars. We take care of everything — you just need to sit behind the wheel.
              </p>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={1.5}><path d="M21 2H3v16h5l4 4 4-4h5V2z"/><path d="M8 10h8M8 14h5"/></svg>
                </div>
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={1.5}><path d="M22.54 6.42A2.78 2.78 0 0020.77 4.65C19.12 4.2 12 4.2 12 4.2s-7.12 0-8.77.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.23 19.35C4.88 19.8 12 19.8 12 19.8s7.12 0 8.77-.45a2.78 2.78 0 001.77-1.77A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg>
                </div>
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="flex flex-col gap-4">
              <input
                id="cta-name"
                type="text"
                placeholder="Full name"
                className="w-full bg-transparent border border-white/20 text-white placeholder:text-gray-500 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-white/50 transition"
              />
              <input
                id="cta-phone"
                type="tel"
                placeholder="Phone number"
                className="w-full bg-transparent border border-white/20 text-white placeholder:text-gray-500 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-white/50 transition"
              />
              <input
                id="cta-email"
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-white/20 text-white placeholder:text-gray-500 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-white/50 transition"
              />
              <div className="mt-2">
                <button
                  id="cta-submit"
                  className="bg-white text-black font-bold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-200 transition"
                >
                  Submit
                  <div className="bg-black text-white p-2 rounded-full">
                    <ArrowUpRight size={16} />
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
