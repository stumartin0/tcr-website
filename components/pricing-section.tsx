"use client"

import { useState, useRef, useEffect } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function PricingSection() {
  const [activeTab, setActiveTab] = useState('full-time')
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const tabs = [
    { id: 'part-time', label: 'Part-Time' },
    { id: 'full-time', label: 'Full-Time' },
    { id: 'sharedcare', label: 'SharedCare™' },
    { id: 'standby', label: 'Standby' },
  ]

  const usageTiers = [
    {
      id: 'part-time',
      title: 'Part-Time',
      subtitle: '<30 hrs/week',
      description: 'Covers shift level infrastructure — adaptive compliance, caregiver rewards, and backup coverage.',
      price: '$2.00',
    },
    {
      id: 'full-time',
      title: 'Full-Time',
      subtitle: '30+ hrs/week',
      description: 'Automatically reduced hourly rate — same adaptive compliance, caregiver rewards, and backup coverage.',
      price: '$1.50',
    },
    {
      id: 'sharedcare',
      title: 'SharedCare™',
      subtitle: 'Per Family',
      description: 'Share a nanny with another household for up to six kids. Shifts are hosted in either home with full compliance.',
      price: '$2',
    },
    {
      id: 'standby',
      title: 'Standby Care™',
      subtitle: 'Backup',
      description: 'Backup care if no one from your Reserve Team™ is available. Helps us reward caregiver availability.',
      price: '$2.50',
    },
  ]

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (Math.abs(distance) > minSwipeDistance) {
      const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
      
      if (distance > 0 && currentIndex < tabs.length - 1) {
        // Swipe left - next tab
        setActiveTab(tabs[currentIndex + 1].id)
      } else if (distance < 0 && currentIndex > 0) {
        // Swipe right - previous tab
        setActiveTab(tabs[currentIndex - 1].id)
      }
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  const activeCard = usageTiers.find(tier => tier.id === activeTab) || usageTiers[1]

  return (
    <section className="bg-[#0e2b47] py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-white">
          <Image 
            src="/image(1).png" 
            alt="" 
            width={32} 
            height={32} 
            className="mx-auto mt-8 mb-6"
          />
          <h2 className="font-serif text-4xl mb-4">
            Clear Pricing.<br/>Tailored to <em className="text-[#d95c47]">You</em>.
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Simple, transparent cost for every family. Payroll, compliance, and backup care — all in one place.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-[#f4f1ea] rounded-lg p-8">
            <h4 className="font-serif text-2xl mb-2 text-center text-[#0e2b47]">The Care Reserve Monthly Membership</h4>
            <h3 className="text-lg text-[#0e2b47]/80 mb-4 text-center">
              One membership. <em className="text-[#d95c47]">Everything</em> included.
            </h3>
            <p className="font-serif text-5xl mb-[10px] text-center text-[#0e2b47]">
              <span className="text-[#0e2b47]">$99</span><span className="text-2xl font-serif"><span className="text-[#d95c47]">/</span><span className="text-[#0e2b47]">mo</span></span>
            </p>
            <div className="mb-6 text-center space-y-1">
              <p className="text-sm text-[#0e2b47]/70">
                Plus $1.50-2.50/hr usage fee
              </p>
              <p className="text-xs text-[#0e2b47]/50 leading-relaxed">
                Adjusts weekly based on hours worked
              </p>
            </div>
            
            <p className="text-sm font-serif font-semibold uppercase mb-4 text-[#d95c47]">Includes:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">EIN setup, legal pay, and onboarding</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">Automated W-2 payroll and tax filings</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">Trusted backup care with Reserve Team™ & Standby Care™</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">Weekly invoices, monthly statements & detailed hours reports</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">Dependent Care FSA & Childcare Tax Credit made easy</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">Integrated, real-time state & local compliance coverage</p>
              </li>
            </ul>
            <div className="flex justify-center">
              <Button 
                className="w-full max-w-xs bg-[#d95c47] hover:bg-[#c54d3a] text-white"
                onClick={() => window.location.assign("http://localhost:3000/welcome")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl md:max-w-7xl lg:max-w-[90rem] mx-auto mb-12">
          {/* Mobile Tabs Interface (<768px) */}
          <div className="md:hidden">
            {/* Tabs Row */}
            <div className="overflow-x-auto mb-4 scrollbar-hide">
              <div className="flex gap-2 min-w-max pb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 min-h-[44px] font-medium text-base whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'text-[#e07856] border-b-2 border-[#e07856]'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Card Display */}
            <div
              key={activeTab}
              className="bg-[#f4f1ea] rounded-lg p-6 flex flex-col"
              style={{
                animation: 'fade-in 200ms ease-in-out',
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="text-center mb-2">
                <h3 className="font-serif text-2xl text-[#0e2b47]">{activeCard.title}</h3>
                <p className="text-sm text-[#0e2b47]">
                  {activeCard.id === 'part-time' ? '<30 hrs/week' : 
                   activeCard.id === 'full-time' ? '30+ hrs/week' :
                   activeCard.id === 'sharedcare' ? 'Per Family' : 'Backup'}
                </p>
                <p className="text-sm text-[#d95c47] mt-2">(auto-applied)</p>
              </div>
              <p className="text-sm text-[#0e2b47]/70 mb-4 flex-grow">
                {activeCard.description}
              </p>
              <div className="border-t pt-4 mb-4" />
              <p className="font-serif text-3xl text-center">
                <span className="text-[#0e2b47]">{activeCard.price}</span>
                <span className="text-lg font-serif">
                  <span className="text-[#d95c47]">/</span>
                  <span className="text-[#0e2b47]">hr</span>
                </span>
              </p>
            </div>
          </div>

          {/* Desktop Grid Layout (≥768px) */}
          <div className="hidden md:grid md:grid-cols-4 gap-3">
            {usageTiers.map((tier) => (
              <div key={tier.id} className="bg-[#f4f1ea] rounded-lg p-6 flex flex-col">
                <div className="text-center mb-2">
                  <h3 className={`font-serif text-2xl text-[#0e2b47] ${tier.id === 'standby' ? 'whitespace-nowrap' : ''}`}>
                    {tier.title}
                  </h3>
                  <p className="text-sm text-[#0e2b47]">
                    {tier.id === 'part-time' ? '<30 hrs/week' : 
                     tier.id === 'full-time' ? '30+ hrs/week' :
                     tier.id === 'sharedcare' ? 'Per Family' : 'Backup'}
                  </p>
                  <p className="text-sm text-[#d95c47] mt-2">(auto-applied)</p>
                </div>
                <p className="text-sm text-[#0e2b47]/70 mb-4 flex-grow">
                  {tier.description}
                </p>
                <div className="border-t pt-4 mb-4" />
                <p className="font-serif text-3xl text-center">
                  <span className="text-[#0e2b47]">{tier.price}</span>
                  <span className="text-lg font-serif">
                    <span className="text-[#d95c47]">/</span>
                    <span className="text-[#0e2b47]">hr</span>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#f4f1ea] rounded-lg p-8">
            <h4 className="font-serif text-2xl mb-2 text-center text-[#0e2b47]">Bring Your Own (BYO) Discount</h4>
            <p className="text-[#0e2b47] mb-6 text-center">
              Already have a nanny you trust? Bring them with you — make it official and get rewarded.
            </p>
            
            <p className="text-sm font-serif font-semibold uppercase mb-4 text-[#7c8e72]">How it works:</p>
            <p className="mb-4 text-center text-[#d95c47]">
              Receive $0.50/hour off every shift with a nanny you refer
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">Skip the waitlist and start immediately</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">Unlock legal payroll, tax savings, backup care, and full compliance</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">Earn referral bonuses for families and caregivers you refer</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#0e2b47]">You save money, your caregiver gains protection</p>
              </li>
            </ul>
            
            <div className="flex justify-center">
              <Button className="w-full max-w-xs bg-[#d95c47] hover:bg-[#c54d3a] text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
