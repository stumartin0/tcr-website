import Image from 'next/image'

export function MissionSection() {
  return (
    <section className="bg-[#f4f1ea] py-8 md:py-12 relative">
      <div className="absolute top-8 right-8 opacity-10">
        <Image 
          src="/placeholder.svg?height=59&width=59" 
          alt="" 
          width={59} 
          height={59}
        />
      </div>
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-balance text-[#0e2b47]">
            The Care Reserve exists to <em className="text-[#d95c47]">reimagine</em> a broken industry.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-[#0e2b47]">
            <p>
              Families deserve reliable care without navigating employment law.
            </p>
            
            <p>
              Caregivers deserve dignity, protections, and real paychecks.
            </p>
            
            <p>
              We're the first platform that makes this simple.
            </p>
            
            <p className="italic">
              Not an agency. Not a gig app.
            </p>
            
            <p className="font-bold">
              The operating system for in-home childcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
