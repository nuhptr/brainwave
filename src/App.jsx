import Header from "./sections/header"
import Hero from "./sections/hero"

import ButtonGradient from "./assets/svg/button-gradient"

export default function App() {
   return (
      <>
         <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <Hero />
         </div>

         <ButtonGradient />
      </>
   )
}
