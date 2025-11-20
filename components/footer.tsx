"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronDown } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const sections = [
    {
      id: "how-it-works",
      title: "How It Works",
      links: [
        { href: "/mission", label: "Our Mission" },
        { href: "/why-pay-legally", label: "Why Pay Legally" },
        { href: "/new-approach", label: "A New Approach" },
        { href: "/how-tcr-works", label: "How TCR Works" },
        { href: "/pricing", label: "What You Pay" },
        { href: "/byo-program", label: "BYO Program" },
        { href: "/refer", label: "Refer a Friend" },
      ],
    },
    {
      id: "families",
      title: "Families",
      links: [
        { href: "/start-setup", label: "Start Setup" },
        { href: "/family-benefits", label: "Family Benefits" },
        { href: "/payroll-taxes", label: "Payroll & Taxes" },
        { href: "/find-caregiver", label: "Find a Caregiver" },
        { href: "/backup-care", label: "TCR Backup Care System" },
        { href: "/coverage", label: "Coverage Areas" },
      ],
    },
    {
      id: "caregivers",
      title: "Caregivers",
      links: [
        { href: "/get-verified", label: "Get TCR Verified" },
        { href: "/caregiver-benefits", label: "Caregiver Benefits" },
        { href: "/earn-rewards", label: "Earn Rewards" },
        { href: "/find-family", label: "Find a Family" },
        { href: "/early-access", label: "Get Early Access" },
        { href: "/resources", label: "Resources" },
      ],
    },
    {
      id: "company",
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/mission", label: "Our Mission" },
        { href: "/faq", label: "FAQ" },
        { href: "/help", label: "Help Center" },
        { href: "/press", label: "Press" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ]

  return (
    <footer className="bg-[#0E2B47] text-[#F4F1EA]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Logo - centered on mobile/tablet, left on desktop */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/tcr-logo.jpeg"
              alt="The Care Reserve"
              width={400}
              height={100}
              className="h-24 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation Grid (hidden on mobile/tablet) */}
          <div className="hidden lg:grid flex-1 grid-cols-4 gap-8 w-full mb-12">
            {sections.map((section) => (
              <div key={section.id}>
                <h4 className="font-serif text-[#D95C47] text-[19px] mb-4">{section.title}</h4>
                <nav className="flex flex-col space-y-2">
                  {section.links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm hover:text-[#d95c47] transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="hidden md:grid lg:hidden flex-1 grid-cols-2 gap-8 w-full mb-8">
            {sections.map((section) => (
              <div key={section.id}>
                <h4 className="font-serif text-[#D95C47] text-[19px] mb-4">{section.title}</h4>
                <nav className="flex flex-col space-y-2">
                  {section.links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm hover:text-[#d95c47] transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="md:hidden w-full">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-white/20">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full py-3 flex justify-between items-center text-left"
                >
                  <h4 className="font-serif text-[#D95C47] text-[19px]">{section.title}</h4>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openSection === section.id ? "max-h-96 pb-3" : "max-h-0"
                  }`}
                >
                  <nav className="flex flex-col space-y-2 pl-4">
                    {section.links.map((link) => (
                      <Link key={link.href} href={link.href} className="text-sm hover:text-[#d95c47] transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-4 mb-1">
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C8E72] hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C8E72] hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C8E72] hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C8E72] hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C8E72] hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-center md:text-left">© {currentYear} The Care Reserve<sup className="text-[0.85em] leading-none relative top-[-0.1em]">™</sup></p>

            <div className="flex items-center gap-4 text-sm flex-wrap justify-center">
              <Link href="/terms" className="hover:text-[#d95c47] transition-colors whitespace-nowrap">
                Terms of Use
              </Link>
              <Link href="/privacy" className="hover:text-[#d95c47] transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/licensing" className="hover:text-[#d95c47] transition-colors whitespace-nowrap">
                Licensing
              </Link>
              <Link href="/accessibility" className="hover:text-[#d95c47] transition-colors whitespace-nowrap">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
