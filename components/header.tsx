"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/50" : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-extrabold text-2xl tracking-tighter text-foreground">Veluxe</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10">
          <Link href="#fleet" className="text-sm text-foreground/80 hover:text-foreground font-medium transition">
            Fleet
          </Link>
          <Link href="#services" className="text-sm text-foreground/80 hover:text-foreground font-medium transition">
            Services
          </Link>
          <Link href="#terms" className="text-sm text-foreground/80 hover:text-foreground font-medium transition">
            Terms
          </Link>
          <Link href="#about" className="text-sm text-foreground/80 hover:text-foreground font-medium transition">
            About Us
          </Link>
          <Link href="#contact" className="text-sm text-foreground/80 hover:text-foreground font-medium transition">
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="bg-white text-black px-4 py-2.5 rounded-full text-sm font-semibold flex items-center">
            UA / EN
          </div>
          <Button variant="default" className="bg-white text-black hover:bg-white/90 rounded-full px-6 flex items-center gap-2 h-[44px]">
            <span className="font-semibold">Contact us</span>
            <div className="bg-black text-white p-1.5 rounded-full">
              <Phone size={14} />
            </div>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-6">
          <div className="flex flex-col space-y-4">
            <Link href="#fleet" className="text-lg font-medium text-foreground hover:text-primary transition">
              Fleet
            </Link>
            <Link href="#services" className="text-lg font-medium text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="#terms" className="text-lg font-medium text-foreground hover:text-primary transition">
              Terms
            </Link>
            <Link href="#about" className="text-lg font-medium text-foreground hover:text-primary transition">
              About Us
            </Link>
            <Link href="#contact" className="text-lg font-medium text-foreground hover:text-primary transition">
              Contact
            </Link>
            <div className="flex gap-4 pt-4 border-t border-border/50">
              <Button variant="outline" className="flex-1 rounded-full border-white/20">
                EN
              </Button>
              <Button className="flex-1 bg-white text-black hover:bg-white/90 rounded-full">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
