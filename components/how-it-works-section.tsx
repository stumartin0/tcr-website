"use client"

import { Button } from '@/components/ui/button'

export function HowItWorksSection() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-[#f4f1ea]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0e2b47] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#0e2b47] leading-relaxed max-w-2xl mx-auto">
            You're the employer. We make it simple and legal in four easy steps.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#d95c47] flex items-center justify-center">
                <span className="text-white font-semibold text-xl md:text-2xl">1</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-[#0e2b47] mb-3">
                Get Started
              </h3>
              <p className="text-base text-[#0e2b47] leading-relaxed">
                Tell us about your family and care needs. If you have a nanny, bring them with you. If not, we'll help you find background checked, TCR Verified™ caregivers in your area.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#d95c47] flex items-center justify-center">
                <span className="text-white font-semibold text-xl md:text-2xl">2</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-[#0e2b47] mb-3">
                Get Set Up in Minutes
              </h3>
              <p className="text-base text-[#0e2b47] leading-relaxed">
                Our platform builds your unified household-employer system — EIN, payroll, and if required, workers' comp — all validated for the household employer rules where you live.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#d95c47] flex items-center justify-center">
                <span className="text-white font-semibold text-xl md:text-2xl">3</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-[#0e2b47] mb-3">
                Build Your Backup Plan — with Reserve Team™
              </h3>
              <p className="text-base text-[#0e2b47] leading-relaxed">
                Add up to 4 trusted caregivers to your Reserve Team™ for planned backups. Access Standby Care™ for short-notice coverage when your Reserve Team isn't available.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#d95c47] flex items-center justify-center">
                <span className="text-white font-semibold text-xl md:text-2xl">4</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-[#0e2b47] mb-3">
                Schedule, Pay, and Track — All in One Place
              </h3>
              <p className="text-base text-[#0e2b47] leading-relaxed">
                Every week, confirm hours. We handle payroll, taxes, and billing — you get one clean weekly invoice, monthly Dependent Care FSA-ready statements, and audit-ready tax docs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 mb-0">
          <Button 
            className="bg-[#d95c47] hover:bg-[#c54d3a] text-white px-6 py-3"
            onClick={() => window.location.assign("http://localhost:3000/welcome")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

