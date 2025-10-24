import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold">A</span>
              </div>
              <span className="font-bold text-lg">AutoCare</span>
            </div>
            <p className="text-background/70">Your trusted car maintenance community.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@autocare.com" className="hover:text-background transition">
                  hello@autocare.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-background transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-background/70 text-sm">
          <p>&copy; 2025 AutoCare Community. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
