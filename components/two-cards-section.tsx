"use client"

import { Check } from 'lucide-react'

export function TwoCardsSection() {
  return (
    <section className="bg-[#0e2b47] py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-xl mt-[52px] mb-[84px] text-white font-serif">
          Already have a caregiver or still searching? The Care Reserve <em className="text-[#d95c47]">adapts</em> to your needs.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f4f1ea] rounded-lg p-8 pt-[21px]">
            <div className="mb-6">
              <div className="w-[60.72px] h-[60.72px] mb-[11px]">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#d95c47]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5ZM8.75 13.5C6.67893 13.5 5 15.1789 5 17.25V19H6.5V17.25C6.5 16.0074 7.50736 15 8.75 15H15.25C16.4926 15 17.5 16.0074 17.5 17.25V19H19V17.25C19 15.1789 17.3211 13.5 15.25 13.5H8.75Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-[#0e2b47] text-2xl mb-2 font-serif">Have a nanny?</h3>
              <h4 className="text-[#0e2b47]/70 text-base mb-4 font-sans">
                Bring your own caregiver — skip the waitlist.
              </h4>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Fast employer setup</p>
                  <p className="text-sm text-[#0e2b47]/70">— EIN, payroll, worker's comp coverage in minutes</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Stay compliant</p>
                  <p className="text-sm text-[#0e2b47]/70">— tax withholdings, time-tracking, local requirements</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">BYO discount</p>
                  <p className="text-sm text-[#0e2b47]/70">— save with our Bring-Your-Own program</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#f4f1ea] rounded-lg p-8">
            <div className="mb-6">
              <div className="w-10 h-10 mb-4">
                <svg viewBox="0 0 34 34" fill="none" className="w-full h-full">
                  <path d="M12.533 25.107C9.05579 25.107 6.08407 23.8877 3.61783 21.4494C1.15159 18.9833 -0.0681543 16.0116 -0.0681543 12.533C-0.0681543 9.05436 1.15159 6.08264 3.61783 3.61641C6.08407 1.15017 9.05579 -0.0691528 12.533 -0.0691528C16.0116 -0.0691528 18.9833 1.15017 21.4494 3.61641C23.9157 6.08264 25.1406 9.05436 25.1406 12.533C25.1406 13.9781 24.9055 15.3389 24.4352 16.6152C23.965 17.8915 23.3426 19.0015 22.5682 19.9453L33.4897 30.8667C33.8662 31.2432 34.0544 31.7135 34.0544 32.2776C34.0544 32.8417 33.8662 33.312 33.4897 33.6885C33.1133 34.065 32.643 34.2532 32.0789 34.2532C31.5148 34.2532 31.0445 34.065 30.668 33.6885L19.7465 22.7671C18.8027 23.5415 17.6928 24.1639 16.4165 24.6342C15.1401 25.1045 13.7794 25.3396 12.3343 25.3396L12.533 25.107ZM12.533 21.2804C14.9846 21.2804 17.0485 20.4048 18.7247 18.6536C20.401 16.9024 21.2393 14.8385 21.2393 12.4619C21.2393 10.0852 20.401 8.02131 18.7247 6.27013C17.0485 4.51894 14.9846 3.64335 12.533 3.64335C10.0814 3.64335 8.01752 4.51894 6.33881 6.27013C4.6601 8.02131 3.82074 10.0852 3.82074 12.4619C3.82074 14.8385 4.6601 16.9024 6.33881 18.6536C8.01752 20.4048 10.0814 21.2804 12.533 21.2804Z" fill="#D95C47"/>
                </svg>
              </div>
              <h3 className="text-[#0e2b47] text-2xl mb-2 font-serif">Still looking?</h3>
              <h4 className="text-[#0e2b47]/70 text-base mb-4 font-sans">
                Meet trusted, experienced caregivers in your area.
              </h4>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">TCR Verified™ & local</p>
                  <p className="text-sm text-[#0e2b47]/70">— experienced, background-checked, CPR/First-aid certified</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Always your choice</p>
                  <p className="text-sm text-[#0e2b47]/70">— never auto-assigned, you decide who provides care</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Trial first</p>
                  <p className="text-sm text-[#0e2b47]/70">— hire only when you find the right fit</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-xl my-[52px] text-white font-serif">
          More ways to make care <em className="text-[#d95c47]">work</em> for you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#f4f1ea] rounded-lg p-8">
            <div className="mb-6">
              <div className="w-10 h-10 mb-4">
                <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                  <g clipPath="url(#clip0_27_17)">
                    <path d="M3.456 19.142C3.456 20.4394 3.97141 21.6837 4.88883 22.6012C5.80626 23.5186 7.05056 24.034 8.348 24.034C9.64544 24.034 10.8897 23.5186 11.8072 22.6012C12.7246 21.6837 13.24 20.4394 13.24 19.142C13.24 17.8446 12.7246 16.6003 11.8072 15.6828C10.8897 14.7654 9.64544 14.25 8.348 14.25C7.05056 14.25 5.80626 14.7654 4.88883 15.6828C3.97141 16.6003 3.456 17.8446 3.456 19.142ZM34.76 19.142C34.76 19.7844 34.8865 20.4206 35.1324 21.0141C35.3782 21.6076 35.7386 22.1469 36.1928 22.6012C36.6471 23.0554 37.1864 23.4158 37.7799 23.6616C38.3734 23.9075 39.0096 24.034 39.652 24.034C40.2944 24.034 40.9306 23.9075 41.5241 23.6616C42.1176 23.4158 42.6569 23.0554 43.1112 22.6012C43.5654 22.1469 43.9258 21.6076 44.1716 21.0141C44.4175 20.4206 44.544 19.7844 44.544 19.142C44.544 17.8446 44.0286 16.6003 43.1112 15.6828C42.1937 14.7654 40.9494 14.25 39.652 14.25C38.3546 14.25 37.1103 14.7654 36.1928 15.6828C35.2754 16.6003 34.76 17.8446 34.76 19.142Z" stroke="#D95C47" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32.8 46.25V32.782C30.3429 32.5547 28.0052 31.6166 26.0726 30.0822C24.1401 28.5478 22.6964 26.4836 21.918 24.142L20.234 19.092C20.0996 18.6869 20.0551 18.2574 20.1034 17.8334C20.1517 17.4093 20.2918 17.0009 20.5139 16.6364C20.736 16.272 21.0348 15.9602 21.3895 15.7229C21.7442 15.4855 22.1464 15.3283 22.568 15.262C23.2778 15.1731 23.9962 15.3373 24.5969 15.7258C25.1976 16.1143 25.642 16.7022 25.852 17.386L27.488 22.292C27.9424 23.6545 28.8142 24.8395 29.9798 25.6788C31.1454 26.5181 32.5457 26.9691 33.982 26.968H42.582C43.096 26.9677 43.605 27.0687 44.08 27.2652C44.5549 27.4616 44.9866 27.7497 45.3502 28.113C45.7138 28.4762 46.0024 28.9076 46.1993 29.3823C46.3962 29.8571 46.4977 30.366 46.498 30.88V46.26" stroke="#D95C47" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.906 21.096L20.506 22.284C20.0523 23.65 19.1793 24.8381 18.0111 25.679C16.843 26.52 15.4394 26.9711 14 26.968H5.41C4.3742 26.9685 3.3809 27.3798 2.64791 28.1117C1.91493 28.8435 1.50212 29.8362 1.5 30.872V46.25M15.2 46.25V32.782C16.9144 32.623 18.5785 32.1172 20.0913 31.2951C21.6041 30.473 22.9339 29.352 24 28M23 1.75V5.75M30.828 5.92L28 8.752M15.172 5.92L18 8.752" stroke="#D95C47" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_27_17">
                      <rect width="48" height="48" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[#0e2b47] text-2xl mb-2 font-serif">Want a nanny-share?</h3>
              <h4 className="text-[#0e2b47]/70 text-base mb-4 font-sans">
                Share a nanny legally, save money together.
              </h4>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">SharedCare™</p>
                  <p className="text-sm text-[#0e2b47]/70">— two families, either home, one trusted caregiver</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Dual payroll</p>
                  <p className="text-sm text-[#0e2b47]/70">— each family pays their share with full W-2 compliance</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Real savings</p>
                  <p className="text-sm text-[#0e2b47]/70">— steady income for caregivers, lower cost for you</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#f4f1ea] rounded-lg px-8 pb-8 pt-[26px]">
            <div className="mb-6">
              <div className="w-[46px] h-[46px] mb-[14px]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-full h-full text-[#d95c47]">
                  <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4"/>
                </svg>
              </div>
              <h3 className="text-[#0e2b47] text-2xl mb-2 font-serif">Need backup you can trust?</h3>
              <h4 className="text-[#0e2b47]/70 text-base mb-4 font-sans">
                Plan your coverage before you need it.
              </h4>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Reserve Team™</p>
                  <p className="text-sm text-[#0e2b47]/70">— your pre-selected backups, always the first call</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Standby Care™</p>
                  <p className="text-sm text-[#0e2b47]/70">— TCR Verified™ caregivers opt-in daily, always your choice</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#7c8e72] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0e2b47]">Fair pricing</p>
                  <p className="text-sm text-[#0e2b47]/70">— same hourly caregiver rate, no inflated emergency costs</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-[84px] mb-[52px] text-center">
          <p className="text-xl text-white font-serif max-w-3xl mx-auto">
            The Care Reserve makes in-home childcare simple, secure, and tailored to your family — so you can feel confident, and your children can <em className="text-[#d95c47]">thrive</em>.
          </p>
        </div>
      </div>
    </section>
  )
}
