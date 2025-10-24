"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-xl text-foreground">AutoCare</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition">
            Features
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition">
            Pricing
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition">
            Community
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline">Sign In</Button>
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-primary">
              Community
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary">
              Contact
            </a>
            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1 bg-transparent">
                Sign In
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
