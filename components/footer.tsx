import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary/5 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">OB</span>
              </div>
              <span className="font-bold text-primary">Oraon Bazaar</span>
            </div>
            <p className="text-sm text-foreground/70">Empowering tribal artisans and farmers across India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-foreground/70 hover:text-primary transition">
                Home
              </Link>
              <Link href="/explore" className="text-foreground/70 hover:text-primary transition">
                Explore
              </Link>
              <Link href="/about" className="text-foreground/70 hover:text-primary transition">
                About
              </Link>
              <Link href="/contact" className="text-foreground/70 hover:text-primary transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Categories</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/categories/food" className="text-foreground/70 hover:text-primary transition">
                Food & Organic
              </Link>
              <Link href="/categories/art" className="text-foreground/70 hover:text-primary transition">
                Art & Handicraft
              </Link>
              <Link href="/categories/soil" className="text-foreground/70 hover:text-primary transition">
                Soil & Fertilizer
              </Link>
              <Link href="/categories/learning" className="text-foreground/70 hover:text-primary transition">
                Learning & Skills
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Connect With Us</h3>
            <p className="text-sm text-foreground/70 mb-4">support@oraonbazaar.com</p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-foreground/70">
            <p>Copyright © 2025 Oraon Bazaar. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
