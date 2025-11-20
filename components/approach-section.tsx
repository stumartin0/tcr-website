import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const cards = [
  {
    image: '/group-of-volunteers-helping-in-community.jpg',
    title: 'Choose the Right Caregiver',
    description: 'Bring your nanny or discover one here. Set your rate, define care, choose your hours.'
  },
  {
    image: '/smart-home-security-integration.jpg',
    title: 'Your Household HR System',
    description: "You're the employer; we're your HR layer — payroll, backup, and built in compliance all-in-one."
  },
  {
    image: '/toys-display-for-childcare.jpg',
    title: 'Only Pay for the Care You Use',
    description: "Flexible hourly rates. No surprise fees. 100% of your caregiver's wage goes to them."
  }
]

export function ApproachSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f4f1ea]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center mb-4">
            <Image 
              src="/placeholder.svg?height=59&width=59" 
              alt="TCR Icon" 
              width={59} 
              height={59}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif">
            A New <em className="text-secondary">Trusted</em> Approach<br />to In-Home Childcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An all-in-one system powered by a dynamic compliance engine—ensuring every family and caregiver can connect confidently, every shift, everywhere, every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <Card key={index} className="bg-card border-border card-hover">
              <CardContent className="p-6 space-y-4">
                <div className="aspect-[3/2] relative rounded-md overflow-hidden mb-4">
                  <Image 
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif">
                  <em>{card.title}</em>
                </h3>
                <p className="text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground">
          Whether you're bringing your nanny or starting fresh, The Care Reserve <em className="text-secondary">adapts</em> to your needs.
        </p>
      </div>
    </section>
  )
}
