import { Button } from '@/components/ui/button'

export function OperatingSystemSection() {
  return (
    <section className="bg-[#0e2b47] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            In-Home Childcare's First <em className="text-[#d95c47] font-serif">All-in-One</em> Operating System
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Whether bringing your own nanny, finding a new one, or sharing care with another family, The Care Reserve integrates everything you need into one simple, legal, tax-smart platform.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#f4f1ea] rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#d95c47]">
                <path d="M24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24Z" fill="currentColor"/>
                <path d="M8 40C8 32.268 14.268 26 22 26H26C33.732 26 40 32.268 40 40V42H8V40Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#0e2b47] mb-3">
              Your Caregiver, Your Choice
            </h3>
            <p className="text-[#0e2b47]/70 leading-relaxed">
              Bring your nanny or discover one here. You set the rate, define the care, and stay in control.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f4f1ea] rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#d95c47]">
                <path d="M24 4L6 12V22C6 32.8 13.2 42.9 24 46C34.8 42.9 42 32.8 42 22V12L24 4Z" fill="currentColor"/>
                <path d="M20 28L16 24L14 26L20 32L32 20L30 18L20 28Z" fill="white"/>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#0e2b47] mb-3">
              Always Compliant, Automatically
            </h3>
            <p className="text-[#0e2b47]/70 leading-relaxed">
              The only platform that validates every shift and paycheck before it runs — keeping you legally protected in real time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f4f1ea] rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#d95c47]">
                <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <path d="M38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4"/>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#0e2b47] mb-3">
              Built-In Backup Care
            </h3>
            <p className="text-[#0e2b47]/70 leading-relaxed">
              Reserve Team™ (caregivers you pick) + Standby Care™ (platform backup) — so you're never stuck.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f4f1ea] rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#d95c47]">
                <rect x="8" y="8" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
                <line x1="14" y1="16" x2="34" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="34" x2="24" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-[#0e2b47] mb-3">
              One Simple Invoice
            </h3>
            <p className="text-[#0e2b47]/70 leading-relaxed">
              Weekly billing. Monthly tax docs. Audit-ready receipts. No more juggling five services.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-lg text-white/90 font-serif mb-8">
            We're not an agency. We're not a gig app. We're the infrastructure childcare has always <em className="text-[#d95c47]">deserved</em>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#d95c47] text-white hover:bg-[#c54d3d] w-40">
              Families
            </Button>
            <Button size="lg" className="bg-[#7c8e72] text-white hover:bg-[#7c8e72]/90 w-40">
              Caregivers
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

