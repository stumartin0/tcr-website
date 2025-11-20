'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)

  return (
    <nav className="w-full border-b border-[#d95c47] bg-[#0e2b47] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-0.5">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/tcr-logo.jpeg"
                alt="The Care Reserve Logo" 
                width={128} 
                height={37}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Center: Nav Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-6 flex-1 ml-8">
            <Link href="/how-tcr-works" className="text-lg font-sans text-white hover:text-[#d95c47] transition-colors">
              How it Works
            </Link>
            <Link href="/families" className="text-lg font-sans text-white hover:text-[#d95c47] transition-colors">
              Families
            </Link>
            <Link href="/caregivers" className="text-lg font-sans text-white hover:text-[#d95c47] transition-colors">
              Caregivers
            </Link>
            <div className="relative group">
              <button className="text-lg font-sans text-white hover:text-[#d95c47] transition-colors">
                Support
              </button>
              <div className="absolute hidden group-hover:block bg-background border border-border rounded-lg shadow-lg w-48 top-full -mt-2 z-[60]">
                <div className="py-1">
                  <Link href="/contact" className="block px-4 py-2 text-sm text-foreground hover:bg-[#0e2b47] hover:text-white transition-colors">
                    Contact
                  </Link>
                  <Link href="/help-center" className="block px-4 py-2 text-sm text-foreground hover:bg-[#0e2b47] hover:text-white transition-colors">
                    Help Center
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 text-sm text-foreground hover:bg-[#0e2b47] hover:text-white transition-colors">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA Buttons - Desktop Only */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              className="bg-[#d95c47] text-white hover:bg-[#d95c47]/90"
              onClick={() => window.location.assign("http://localhost:3000/welcome")}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="bg-[#7c8e72] text-white border-[#7c8e72] hover:bg-[#7c8e72]/90"
              onClick={() => window.location.assign("http://localhost:3000/login")}
            >
              Login
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-[#d95c47] rounded"></span>
            <span className="w-6 h-0.5 bg-[#d95c47] rounded"></span>
            <span className="w-6 h-0.5 bg-[#d95c47] rounded"></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e2b47] border-t border-border py-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/how-tcr-works" 
                className="text-lg font-sans text-white hover:text-[#d95c47] transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                href="/families" 
                className="text-lg font-sans text-white hover:text-[#d95c47] transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Families
              </Link>
              <Link 
                href="/caregivers" 
                className="text-lg font-sans text-white hover:text-[#d95c47] transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Caregivers
              </Link>
              <div className="px-4">
                <button 
                  onClick={() => setSupportOpen(!supportOpen)}
                  className="text-lg font-sans text-white hover:text-[#d95c47] transition-colors py-2 w-full text-left"
                >
                  Support
                </button>
                {supportOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    <Link 
                      href="/contact" 
                      className="text-sm text-white hover:text-[#d95c47] transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link 
                      href="/help-center" 
                      className="text-sm text-white hover:text-[#d95c47] transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Help Center
                    </Link>
                    <Link 
                      href="/faq" 
                      className="text-sm text-white hover:text-[#d95c47] transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3 px-4 mt-2">
                <Button 
                  className="bg-[#d95c47] text-white hover:bg-[#d95c47]/90 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.location.assign("http://localhost:3000/welcome")
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-[#7c8e72] text-white border-[#7c8e72] hover:bg-[#7c8e72]/90 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.location.assign("http://localhost:3000/login")
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
