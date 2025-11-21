import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: '✓',
    title: 'Become a legal employer',
    description: '— set up in just minutes'
  },
  {
    icon: '✓',
    title: 'Your care your way',
    description: '— Full-time, Part-time, SharedCare™'
  },
  {
    icon: '✓',
    title: 'You set the rate',
    description: '— 100% of wages go to your caregiver'
  },
  {
    icon: '✓',
    title: 'Trust your backups',
    description: '— trusted faces, not random fill-ins'
  },
  {
    icon: '✓',
    title: 'Stay compliant',
    description: '— adaptive real time coverage, automatically'
  },
  {
    icon: '✓',
    title: 'Get expert support',
    description: '— legal, payroll, and HR guidance'
  }
]

export function FeaturesSection() {
  return (
    <section className="bg-[#f4f1ea] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#0e2b47]">
            Built in. Backed up. Done <em className="text-[#d95c47]">right</em>.
          </h2>
          <p className="text-lg text-[#0e2b47] leading-relaxed max-w-2xl mx-auto mt-4">
            We turn childcare chaos into one unified, compliant system.
          </p>
        </div>
        <div className="mt-10 mb-12 flex justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-3 md:grid-flow-col max-w-3xl w-full ml-4 md:ml-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[#0e2b47]">
                    <span className="font-normal font-serif text-lg">{feature.title}</span>
                    <br />
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-[#d95c47] text-white hover:bg-[#c54a3a]">
            How it Works
          </Button>
        </div>
      </div>
    </section>
  )
}
