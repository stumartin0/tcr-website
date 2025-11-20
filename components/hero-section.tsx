"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="bg-[#f4f1ea] py-6 md:py-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-16 items-center">
          
          <div className="hidden md:grid grid-cols-2 gap-2 md:gap-3">
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="relative rounded-lg overflow-hidden h-[160px] md:h-[271px]">
                <Image 
                  src="/toy-shelves-playroom.jpg" 
                  alt="Organized playroom with colorful toys and shelving" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-[240px] md:h-[407px]">
                <Image 
                  src="/in-home-childcare.jpg" 
                  alt="In-home childcare" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="relative rounded-lg overflow-hidden h-[240px] md:h-[407px]">
                <Image 
                  src="/caregiver-with-children.jpg" 
                  alt="Caregiver with children" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-[160px] md:h-[271px]">
                <Image 
                  src="/caregiver-child-activity.png" 
                  alt="Caregiver and child learning together" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance">
              Together, We're Shaping the <em className="text-[#d95c47]">Future</em> of In-Home Childcare
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The first platform that makes legal, backed-up in-home care simple. Set your rate. Choose your caregiver. We handle payroll, taxes, and backup care — in one place.
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#d95c47] text-white hover:bg-[#c24d3a] w-full md:w-auto"
                onClick={() => window.location.assign("http://localhost:3000/welcome")}
              >
                Get Started
              </Button>
              <Button size="lg" className="bg-[#0e2b47] text-white hover:bg-[#1a3f5f] w-full md:w-auto">
                How it Works
              </Button>
              {/* Icon centered below buttons on mobile only */}
              <div className="flex justify-center md:block">
                <Image 
                  src="/image(1).png" 
                  alt="TCR Icon" 
                  width={40} 
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:hidden">
            <div className="relative rounded-lg overflow-hidden h-[240px]">
              <Image 
                src="/caregiver-with-children.jpg" 
                alt="Caregiver with children" 
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden h-[240px]">
              <Image 
                src="/in-home-childcare.jpg" 
                alt="In-home childcare" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
