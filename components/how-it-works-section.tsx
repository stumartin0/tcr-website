"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HowItWorksSection() {
  return (
    <section className="pt-8 md:pt-12 pb-8 md:pb-12 bg-[#f4f1ea]">
      <div className="container mx-auto px-4">
        {/* Dashboard and Phone Images - overlapping */}
        <div className="w-full mb-12 md:mb-16 relative">
          {/* Dashboard Image - full width */}
          <div className="w-full">
            <img
              src="/mock-family-dashboard.jpeg"
              alt="The Care Reserve family dashboard"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Phone Image - positioned to overlap with bottom 20px below dashboard */}
          <div className="absolute bottom-[-325px] md:bottom-[-220px] left-1/2 transform -translate-x-1/2 z-10 flex justify-center">
            <div className="phone-mockup scale-[0.3] md:scale-50 origin-center">
              <div className="phone-screen">
                <img
                  src="/family-dashboard-schedule-mobile.jpeg"
                  alt="Schedule management showing hours breakdown"
                  className="w-full h-auto rounded-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Caption */}
        <p className="text-[16px] font-serif text-[#0e2b47] text-center mt-[92px] mb-6 md:mt-8 md:mb-12">
          Manage your family's care from <em className="text-[#d95c47]">any</em> device.
        </p>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl mt-24 md:mt-0">
        <div className="text-center mb-12 md:mb-16">
          <Image 
            src="/image(1).png" 
            alt="" 
            width={32} 
            height={32} 
            className="mx-auto mt-8 mb-6"
          />
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
                Make Your Backup Plan — with Reserve Team™
              </h3>
              <p className="text-base text-[#0e2b47] leading-relaxed">
                Bring your own or invite TCR Verified™ caregivers to build your Reserve Team™ — your first-call for backup. When unavailable, access Standby Care™: you choose who comes, never auto-assigned.
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

