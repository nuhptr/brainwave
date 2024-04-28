import { useRef } from "react"
import { ScrollParallax } from "react-just-parallax"

import { imgCurve, imgHeroBackground, imgRobot } from "../assets"
import { heroIcons } from "../constants"

import Button from "../components/ui/button"
import Section from "../components/ui/section"
import Generating from "../components/generating"
import Notification from "../components/notification"

import { BackgroundCircles, BottomLine, Gradient } from "../components/design/hero-ornamen"
import CompanyLogos from "../components/company-logos"

export default function Hero() {
   const parralaxRef = useRef(null)

   return (
      <Section
         id="hero"
         className="pt-[12rem] -mt-[5.25rem]"
         crosses
         customPaddings
         crossesOffset="lg:translate-y-[5.25rem]">
         <div className="container relative" ref={parralaxRef}>
            {/* Start Header Text */}
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
               <h1 className="mb-6 h1">
                  Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
                  <span className="relative inline-block">
                     Brainwave{" "}
                     <img
                        src={imgCurve}
                        alt="curve"
                        width={624}
                        height={28}
                        className="absolute left-0 w-full top-full xl:-mt-2"
                     />
                  </span>
               </h1>
               <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
                  Unleash the power of AI within Brainwave. Upgrade your productivity with
                  Brainwave, the open AI chat app.
               </p>
               <Button href="/pricing" white>
                  Get Started
               </Button>
            </div>
            {/* End Header Text */}

            {/* Start Hero Image */}
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
               <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                  <div className="relative bg-n-8 rounded-[1rem]">
                     <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                     <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                        <img
                           src={imgRobot}
                           alt="hero robot"
                           width={1024}
                           height={490}
                           className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                        />
                     </div>

                     <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                     {/* Scroll Parallax Unordered List */}
                     <ScrollParallax isAbsolutelyPositioned>
                        <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur-sm border border-n-1/10 rounded-2xl xl:flex">
                           {heroIcons.map((icon, index) => (
                              <li className="p-5" key={index}>
                                 <img src={icon} alt={`icon ${icon}`} width={24} height={25} />
                              </li>
                           ))}
                        </ul>
                     </ScrollParallax>

                     {/* Scroll Parallax Notification */}
                     <ScrollParallax isAbsolutelyPositioned>
                        <Notification
                           className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                           title="Code generation"
                        />
                     </ScrollParallax>
                  </div>
               </div>

               <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                  <img
                     src={imgHeroBackground}
                     alt="hero background"
                     className="w-full"
                     width={1440}
                     height={1800}
                  />
               </div>
               {/* Ornamen Circle Background */}
               <BackgroundCircles />
            </div>
            {/* End Hero Image */}

            <CompanyLogos className="relative z-10 hidden mt-20 lg:block" />
         </div>

         <BottomLine />
      </Section>
   )
}