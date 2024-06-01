import { collabApps, collabContent, collabText } from "../../constants/collabs"
import { cn } from "../../lib/utils"

import { Button } from "../ui/Buttons"
import { Section } from "../ui/Sections"
import { LeftCurve, RightCurve } from "../design/CollaborationOrnamen"
import { icBrainwaveSymbol, icCheck } from "../../assets"

export const Collaboration = () => {
   return (
      <Section id="collaboration" crosses>
         <div className="container lg:flex">
            <div className="max-w-[25rem]">
               <h2 className="mb-4 h2 md:mb-8">AI Chat App for Seamless Collaboration</h2>

               <ul className="max-w-[22rem] mb-10 md:mb-14">
                  {collabContent.map((item) => (
                     <li key={item.id} className="py-3 mb-3">
                        <div className="flex items-center">
                           <img src={icCheck} alt="check" width={24} height={24} />
                           <h6 className="ml-5 body-2">{item.title}</h6>
                        </div>
                        {item.text && <p className="mt-3 body-2 text-n-4">{item.text}</p>}
                     </li>
                  ))}
               </ul>

               <Button>Try it now</Button>
            </div>

            <div className="lg:ml-auto xl:w-[38rem] mt-4">
               <p className="mb-8 body-2 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                  {collabText}
               </p>

               {/* circle 1 */}
               <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                  {/* circle 2 */}
                  <div className="flex m-auto border rounded-full w-60 aspect-square border-n-6">
                     {/* circle 3 */}
                     <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                        <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                           <img src={icBrainwaveSymbol} width={48} height={48} alt="brainwave" />
                        </div>
                     </div>
                  </div>

                  <ul>
                     {collabApps.map((app, index) => (
                        <li
                           key={app.id}
                           className={cn(
                              "absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom",
                              `rotate-${index * 45}`
                           )}
                        >
                           <div
                              className={cn(
                                 "relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl",
                                 `-rotate-${index * 45}`
                              )}
                           >
                              <img
                                 className="m-auto"
                                 width={app.width}
                                 height={app.height}
                                 alt={app.title}
                                 src={app.icon}
                              />
                           </div>
                        </li>
                     ))}
                  </ul>

                  {/* ornamen */}
                  <LeftCurve />
                  <RightCurve />
               </div>
            </div>
         </div>
      </Section>
   )
}
