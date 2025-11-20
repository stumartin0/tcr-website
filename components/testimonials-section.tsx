// Testimonials Section Component
export function TestimonialsSection() {
  return (
    <section className="bg-[#f4f1ea] py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="bg-[#f4f1ea] rounded-lg p-6 border-2 border-[#0e2b47]">
              <p className="text-xl italic mb-4 text-[#0e2b47]">
                "We love our nanny, but paying her was a total nightmare. After countless nights confirming hours and calculating taxes we found The Care Reserve and it's been a game-changer... our nanny get's paid automatically, and we just schedule the days she's needed."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="/parent-profile-photo.jpg" 
                  alt="Taylor M." 
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold font-serif text-[#0e2b47]">Taylor M.</p>
                  <p className="text-sm text-[#0e2b47]/70">Parent, Atlanta</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#f4f1ea] rounded-lg p-6 border-2 border-[#0e2b47]">
              <p className="text-xl italic mb-4 text-[#0e2b47]">
                "Switching from daycare to a nanny for our kids was a big change, and we worried what would happen when our nanny called out. Knowing we have built in backup care but always choose who comes to our home made the transition much less stressful."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="/ai-image-woman.avif" 
                  alt="Caitlin E." 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold font-serif text-[#0e2b47]">Caitlin E.</p>
                  <p className="text-sm text-[#0e2b47]/70">Parent, Atlanta</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/caregiver-card.jpeg" 
              alt="Happy family" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
