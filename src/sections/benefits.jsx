import Section from "../components/ui/section"
import Heading from "../components/ui/heading"
import { GradientLight } from "../components/design/benefits-ornamen"

import Arrow from "../assets/svg/arrows"
import ClipPath from "../assets/svg/clip-path"

import { benefits } from "../constants"
import { BottomLine } from "../components/design/hero-ornamen"

export default function Benefits() {
   return (
      <Section id="features">
         <div className="container relative z-2">
            <Heading
               className="md:max-w-md lg:max-w-2xl"
               title="Chat Smarter, Not Harder with Brainwave"
            />

            <div className="flex flex-wrap mb-10 gap-10">
               {benefits.map((item) => (
                  <div
                     className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                     style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                     key={item.id}>
                     <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                        <h5 className="mb-5 h5">{item.title}</h5>
                        <p className="mb-6 body-2 text-n-3">{item.text}</p>
                        <div className="flex items-center mt-auto">
                           <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                           <p className="ml-auto text-xs font-bold tracking-wider uppercase font-code text-n-1">
                              Explore more
                           </p>
                           <Arrow />
                        </div>
                     </div>

                     {item.light && <GradientLight />}

                     <div
                        className="absolute inset-0.5 bg-n-8"
                        style={{ clipPath: "url(#benefits)" }}>
                        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                           {item.imageUrl && (
                              <img
                                 src={item.imageUrl}
                                 width={380}
                                 height={362}
                                 alt={item.title}
                                 className="object-cover w-full h-full"
                              />
                           )}
                        </div>
                     </div>

                     <ClipPath />
                  </div>
               ))}
            </div>
         </div>
      </Section>
   )
}
