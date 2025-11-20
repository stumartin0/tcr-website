"use client"

import { Button } from '@/components/ui/button'

// New Era Section Component
export function NewEraSection() {
  return (
    <section className="bg-[#f4f1ea] py-8 relative">
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RVN7ex4MP2etbdQ6AEOde1NwC684KI.png)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white md:text-inherit">
            <p className="text-sm font-semibold font-serif uppercase mb-4 text-center text-[#d95c47] md:text-[#7c8e72]">COMING TO ATLANTA SPRING 2026</p>
            <h2 className="font-serif text-4xl mb-6 md:text-[#0e2b47] text-center">
              Step Into a <span className="text-white md:text-[#d95c47] font-normal not-italic md:italic">New Era</span> of Childcare
            </h2>
            <p className="text-xl mb-4 md:text-[#0e2b47]">
              Built by parents, backed by HR and legal experts. With payroll, compliance, and backup taken care of, you can focus on what truly matters.
            </p>
            <p className="italic mb-6 md:text-[#0e2b47]">
              Launching in Atlanta Spring 2026. Next up: Dallas, Austin, Nashville, and more.
            </p>
            <div className="flex justify-center">
              <Button 
                className="w-full max-w-xs bg-[#d95c47] hover:bg-[#c54d3a] text-white"
                onClick={() => window.location.assign("http://localhost:3000/welcome")}
              >
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block aspect-[458/746] md:aspect-auto md:max-h-[500px] lg:max-h-[550px] overflow-hidden rounded-lg">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RVN7ex4MP2etbdQ6AEOde1NwC684KI.png" 
              alt="Welcoming front door with hello mat and warm sunlight" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
