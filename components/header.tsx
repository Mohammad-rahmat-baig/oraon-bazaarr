"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">OB</span>
            </div>
            <span className="hidden font-bold text-primary md:inline">Oraon Bazaar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/explore" className="text-sm font-medium text-foreground hover:text-primary transition">
              Explore
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-foreground hover:text-primary transition">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Link
              href="/login"
              className="hidden px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition md:inline-flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Sign In
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground md:hidden">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/explore" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
                Explore
              </Link>
              <Link href="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
                Contact
              </Link>
              <Link
                href="/login"
                className="mx-4 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg text-center"
              >
                Sign In
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
