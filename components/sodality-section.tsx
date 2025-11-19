import Image from 'next/image'

export function SodalitySection() {
  return (
    <section className="py-8 md:py-12 bg-[#f4f1ea] text-[#0e2b47]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0e2b47]">
              {'🕊'} <span className="text-[#0e2b47]">Sodality</span> <span className="text-[28px] md:text-[34px] font-serif" style={{ color: '#7c8e72' }}>(noun)</span>
            </h2>
            <p className="text-xl italic font-sans text-[#d95c47]">
              A community bound by trust, shared purpose, and mutual care.
            </p>
            <div className="space-y-4 text-foreground leading-relaxed" style={{ color: '#0e2b47' }}>
              <p>
                At The Care Reserve™, sodality is our guiding light — it's the spirit behind every care relationship, every backup shift, and every decision we make.
              </p>
              <p>Where families stay in control — but never feel alone.</p>
              <p>Where caregivers are respected, protected, and empowered.</p>
              <p>And where children thrive through stability, safety, and loving relationships.</p>
              <p>That's the spirit behind our mission — and the platform we've built to honor it.</p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-full lg:min-h-[650px]">
            <Image 
              src="/intergenerational-care-community.jpg" 
              alt="Intergenerational care community - caregivers and family members connecting" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8">
        <div className="border-t border-[#0e2b47]/20" />
      </div>
    </section>
  )
}
