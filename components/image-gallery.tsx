export function ImageGallery() {
  return (
    <section className="bg-[#f4f1ea] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: single centered image */}
          <div className="sm:hidden">
            <div className="h-[400px] overflow-hidden rounded-lg shadow-lg mx-auto max-w-md">
              <img 
                src="/caregiver-reading-to-children.png" 
                alt="Caregiver reading book to group of children" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          {/* Tablet and Desktop: three image grid */}
          <div className="hidden sm:grid grid-cols-[1fr_2fr_1fr] gap-6 md:gap-8 items-center">
            <div className="h-[320px] md:h-[400px] overflow-hidden rounded-lg">
              <img 
                src="/cozy-reading-corner.png" 
                alt="Cozy reading corner with vintage chair and plants" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/caregiver-reading-to-children.png" 
                alt="Caregiver reading book to group of children" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[320px] md:h-[400px] overflow-hidden rounded-lg">
              <img 
                src="/childrens-playroom-with-toys.png" 
                alt="Sunlit children's play area with teddy bears and wooden toys" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
