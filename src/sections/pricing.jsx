import Section from "../components/ui/section"
import Heading from "../components/ui/heading"
import { LeftLine, RightLine } from "../components/design/pricing-ornamen"

import { imgSmallSphere, icStars } from "../assets"
import PricingList from "../components/pricing-list"

export default function Pricing() {
   return (
      <Section className="overflow-hidden" id="pricing">
         <div className="container relative z-2">
            <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
               <img
                  src={imgSmallSphere}
                  className="relative z-1"
                  width={255}
                  height={255}
                  alt="Sphere"
               />
               <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <img src={icStars} className="w-full" width={950} height={400} alt="Stars" />
               </div>
            </div>

            <Heading tag="Get started with Brainwave" title="Pay once, use forever" />

            <div className="relative">
               <PricingList />
               <LeftLine />
               <RightLine />
            </div>

            <div className="flex justify-center mt-10">
               <a
                  className="text-xs font-bold tracking-wider uppercase border-b font-code"
                  href="/pricing">
                  See the full details
               </a>
            </div>
         </div>
      </Section>
   )
}
