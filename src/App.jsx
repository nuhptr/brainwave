import Header from "./sections/header"
import Hero from "./sections/hero"
import Benefits from "./sections/benefits"
import Collaboration from "./sections/collaboration"
import Services from "./sections/services"
import Roadmap from "./sections/roadmap"
import Footer from "./sections/footer"
import Pricing from "./sections/pricing"

import ButtonGradient from "./assets/svg/button-gradient"

export default function App() {
   return (
      <>
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
