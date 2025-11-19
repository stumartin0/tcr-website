"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function ComparisonGridSection() {
  return (
    <section className="bg-[#0e2b47] pt-8 md:pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            How The Care Reserve <em className="text-[#d95c47]">Compares</em>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            One System vs. The Patchwork
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            {getIcon('check')}
            <span className="text-white text-base font-serif">Included</span>
          </div>
          <div className="flex items-center gap-2">
            {getIcon('warning')}
            <span className="text-white text-base font-serif">Partial</span>
          </div>
          <div className="flex items-center gap-2">
            {getIcon('x')}
            <span className="text-white text-base font-serif">Missing</span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-[58.32rem] mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-[#f4f1ea] rounded-lg p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#0e2b47]/20">
                    <th className="text-left py-4 px-4 text-[#0e2b47] font-serif font-semibold text-lg">
                      Core Feature
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center gap-2">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i1MbqZnCZzeYF7x6P2hSUNu0cJuVIS.png"
                          alt="The Care Reserve"
                          width={40}
                          height={40}
                        />
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 text-[#0e2b47] font-serif font-semibold text-lg">
                      Nanny Agencies
                    </th>
                    <th className="text-center py-4 px-4 text-[#0e2b47] font-serif font-semibold text-lg">
                      Payroll Platforms
                    </th>
                    <th className="text-center py-4 px-4 text-[#0e2b47] font-serif font-semibold text-lg">
                      Gig Apps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Legal W-2 Payroll', tcr: 'check', agencies: 'check', payroll: 'check', gig: 'warning' },
                    { feature: 'Full Legal Compliance', tcr: 'check', agencies: 'warning', payroll: 'warning', gig: 'x' },
                    { feature: 'Trusted, Verified Caregivers', tcr: 'check', agencies: 'warning', payroll: 'x', gig: 'warning' },
                    { feature: 'Backup Care with Choice', tcr: 'check', agencies: 'x', payroll: 'x', gig: 'warning' },
                    { feature: 'SharedCare™ (Legal Nanny Share)', tcr: 'check', agencies: 'x', payroll: 'x', gig: 'x' },
                    { feature: 'Tax Savings + FSA Support', tcr: 'check', agencies: 'warning', payroll: 'warning', gig: 'x' },
                    { feature: 'All-Inclusive Invoice', tcr: 'check', agencies: 'x', payroll: 'warning', gig: 'x' },
                    { feature: 'No Hidden Fees', tcr: 'check', agencies: 'warning', payroll: 'warning', gig: 'x' },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-[#0e2b47]/10">
                      <td className="py-4 px-4 text-[#0e2b47]">{row.feature}</td>
                      <td className="py-4 px-4 text-center">{getIcon(row.tcr)}</td>
                      <td className="py-4 px-4 text-center">{getIcon(row.agencies)}</td>
                      <td className="py-4 px-4 text-center">{getIcon(row.payroll)}</td>
                      <td className="py-4 px-4 text-center">{getIcon(row.gig)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Stacked View */}
          <div className="md:hidden space-y-6">
            {[
              { feature: 'Legal W-2 Payroll', tcr: 'check', agencies: 'check', payroll: 'check', gig: 'warning' },
              { feature: 'Full Legal Compliance', tcr: 'check', agencies: 'warning', payroll: 'warning', gig: 'x' },
              { feature: 'Trusted, Verified Caregivers', tcr: 'check', agencies: 'warning', payroll: 'x', gig: 'warning' },
              { feature: 'Backup Care with Choice', tcr: 'check', agencies: 'x', payroll: 'x', gig: 'warning' },
              { feature: 'SharedCare™ (Legal Nanny Share)', tcr: 'check', agencies: 'x', payroll: 'x', gig: 'x' },
              { feature: 'Tax Savings + FSA Support', tcr: 'check', agencies: 'warning', payroll: 'warning', gig: 'x' },
              { feature: 'All-Inclusive Invoice', tcr: 'check', agencies: 'x', payroll: 'warning', gig: 'x' },
              { feature: 'No Hidden Fees', tcr: 'check', agencies: 'warning', payroll: 'warning', gig: 'x' },
            ].map((row, index) => (
              <div key={index} className="bg-[#f4f1ea] rounded-lg p-4">
                <h3 className="text-[#0e2b47] font-semibold mb-3">{row.feature}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0e2b47] text-sm">The Care Reserve</span>
                    {getIcon(row.tcr)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0e2b47] text-sm">Nanny Agencies</span>
                    {getIcon(row.agencies)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0e2b47] text-sm">Payroll Platforms</span>
                    {getIcon(row.payroll)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0e2b47] text-sm">Gig Apps</span>
                    {getIcon(row.gig)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explanatory Notes */}
        <div className="max-w-4xl mx-auto mt-12 space-y-6 pl-8 md:pl-12">
          <div>
            <h3 className="font-serif text-lg mb-2">
              <span className="text-[#7c8e72]">—</span> <span className="text-[#e07856]">On Gig Apps</span>
            </h3>
            <p className="text-white text-base leading-relaxed">
              Many gig platforms leave payroll compliance to families — or risk penalties for 1099 misclassification.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-2">
              <span className="text-[#7c8e72]">—</span> <span className="text-[#e07856]">On Agencies</span>
            </h3>
            <p className="text-white text-base leading-relaxed">
              Agencies usually stop supporting families after placement — no payroll, tax, or backup support.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-2">
              <span className="text-[#7c8e72]">—</span> <span className="text-[#e07856]">On Payroll Platforms</span>
            </h3>
            <p className="text-white text-base leading-relaxed">
              Payroll apps process payments — not workers' comp, backup care, or domestic work compliance.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-12 mb-12">
          <p className="text-lg text-white max-w-3xl mx-auto font-serif">
            Others give you the pieces. <em className="text-[#e07856] italic">Only</em> The Care Reserve brings it all together.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-6">
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

function getIcon(type: string) {
  switch (type) {
    case 'check':
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7c8e72]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    case 'warning':
      return (
        <div className="inline-flex items-center justify-center w-10 h-10">
          <svg width="38" height="38" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2.66667L2.66667 26.6667H29.3333L16 2.66667Z" fill="#f0ad4e"/>
            <path d="M16 12V18.6667M16 22.6667H16.0133" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      )
    case 'x':
      return (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#c9302c]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4l8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )
    default:
      return null
  }
}

