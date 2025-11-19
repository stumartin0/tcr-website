"use client"

import { Navigation } from '@/components/navigation'
import Footer from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { OperatingSystemSection } from '@/components/operating-system-section'
import { FeaturesSection } from '@/components/features-section'
import { MissionSection } from '@/components/mission-section'
import { TwoCardsSection } from '@/components/two-cards-section'
import { ComparisonGridSection } from '@/components/comparison-grid-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PricingSection } from '@/components/pricing-section'
import { NewEraSection } from '@/components/new-era-section'
import { QuestionsSection } from '@/components/questions-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <OperatingSystemSection />
        <FeaturesSection />
        <TwoCardsSection />
        <HowItWorksSection />
        <ComparisonGridSection />
        <MissionSection />
        <TestimonialsSection />
        <PricingSection />
        <NewEraSection />
        <QuestionsSection />
      </main>
      <Footer />
    </div>
  )
}
