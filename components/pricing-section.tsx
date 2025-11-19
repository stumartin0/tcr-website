"use client"

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function PricingSection() {
  return (
    <section className="bg-[#0e2b47] py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-white">
          <Image 
            src="/image(1).png" 
            alt="" 
            width={48} 
            height={48} 
            className="mx-auto mb-6"
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
                <p>EIN setup, legal pay, and onboarding</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p>Automated W-2 payroll and tax filings</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p>Trusted backup care with Reserve Team™ & Standby Care™</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p>Weekly invoices, monthly statements & detailed hours reports</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p>Dependent Care FSA & Childcare Tax Credit made easy</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p>Integrated, real-time state & local compliance coverage</p>
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
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-[#f4f1ea] rounded-lg p-6 flex flex-col">
              <div className="text-center mb-2">
                <h3 className="font-serif text-lg text-[#0e2b47]">Part-Time</h3>
                <p className="text-sm text-[#0e2b47]">{'<'}30 hrs/week</p>
                <p className="text-sm text-[#d95c47] mt-2">(auto-applied)</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                Covers shift level infrastructure — adaptive compliance, caregiver rewards, and backup coverage.
              </p>
              <div className="border-t pt-4 mb-4" />
              <p className="font-serif text-3xl text-center"><span className="text-[#0e2b47]">$2.00</span><span className="text-lg font-serif"><span className="text-[#d95c47]">/</span><span className="text-[#0e2b47]">hr</span></span></p>
            </div>
            
            <div className="bg-[#f4f1ea] rounded-lg p-6 flex flex-col">
              <div className="text-center mb-2">
                <h3 className="font-serif text-lg text-[#0e2b47]">Full-Time</h3>
                <p className="text-sm text-[#0e2b47]">30+ hrs/week</p>
                <p className="text-sm text-[#d95c47] mt-2">(auto-applied)</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                Automatically reduced hourly rate — same adaptive compliance, caregiver rewards, and backup coverage.
              </p>
              <div className="border-t pt-4 mb-4" />
              <p className="font-serif text-3xl text-center"><span className="text-[#0e2b47]">$1.50</span><span className="text-lg font-serif"><span className="text-[#d95c47]">/</span><span className="text-[#0e2b47]">hr</span></span></p>
            </div>
            
            <div className="bg-[#f4f1ea] rounded-lg p-6 flex flex-col">
              <div className="text-center mb-2">
                <h3 className="font-serif text-lg text-[#0e2b47]">SharedCare™</h3>
                <p className="text-sm text-[#0e2b47]">Per Family</p>
                <p className="text-sm text-[#d95c47] mt-2">(auto-applied)</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                Share a nanny with another household for up to six kids. Shifts are hosted in either home with full compliance.
              </p>
              <div className="border-t pt-4 mb-4" />
              <p className="font-serif text-3xl text-center"><span className="text-[#0e2b47]">$2</span><span className="text-lg font-serif"><span className="text-[#d95c47]">/</span><span className="text-[#0e2b47]">hr</span></span></p>
            </div>
            
            <div className="bg-[#f4f1ea] rounded-lg p-6 flex flex-col">
              <div className="text-center mb-2">
                <h3 className="font-serif text-lg text-[#0e2b47] whitespace-nowrap">Standby Care™</h3>
                <p className="text-sm text-[#0e2b47]">Backup</p>
                <p className="text-sm text-[#d95c47] mt-2">(auto-applied)</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                Backup care if no one from your Reserve Team™ is available. Helps us reward caregiver availability.
              </p>
              <div className="border-t pt-4 mb-4" />
              <p className="font-serif text-3xl text-center"><span className="text-[#0e2b47]">$2.50</span><span className="text-lg font-serif"><span className="text-[#d95c47]">/</span><span className="text-[#0e2b47]">hr</span></span></p>
            </div>
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
                <p>Skip the waitlist and start immediately</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p>Unlock legal payroll, tax savings, backup care, and full compliance</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p>Earn referral bonuses for families and caregivers you refer</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p>You save money, your caregiver gains protection</p>
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
