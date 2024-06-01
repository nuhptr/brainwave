import { Header } from "./components/main/Headers"
import { Hero } from "./components/main/Hero"
import { Benefits } from "./components/main/Benefit"
import { Collaboration } from "./components/main/Collaborations"
import { Services } from "./components/main/Service"
import { Roadmap } from "./components/main/Roadmaps"
import { Footer } from "./components/main/Footers"
import { Pricing } from "./components/main/Pricings"

import { ButtonGradient } from "./components/svg/ButtonGradient"

export default function App() {
   return (
      <>
         {/* 4.75rem = 76px && 5.25rem = 84px */}
         <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <Hero />
            <Benefits />
            <Collaboration />
            <Services />
            <Pricing />
            <Roadmap />
            <Footer />
         </div>
         <ButtonGradient />
      </>
   )
}
