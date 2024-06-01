import { roadmap } from "../../constants/roadmap"
import { cn } from "../../lib/utils"

import { Section } from "../ui/Sections"
import { Heading } from "../ui/Headings"
import { Button } from "../ui/Buttons"
import { Tagline } from "../Taglines"
import { Gradient } from "../design/RoadmapOrnamen"
import { imgGrid, icLoading1, icCheck2 } from "../../assets"

export const Roadmap = () => {
   return (
      <Section className="overflow-hidden" id="roadmap">
         <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What we're working on" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-8 md:pb-[7rem]">
               {roadmap.map((item) => {
                  const status = item.status === "done" ? "Done" : "In progress"

                  return (
                     <div
                        className={cn(
                           "md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]",
                           item.colorful ? "bg-conic-gradient" : "bg-n-6"
                        )}
                        key={item.id}
                     >
                        <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                           <div className="absolute left-0 max-w-full -top-10">
                              <img
                                 className="w-full"
                                 src={imgGrid}
                                 width={550}
                                 height={550}
                                 alt="Grid"
                              />
                           </div>
                           <div className="relative z-1">
                              <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                 <Tagline>{item.date}</Tagline>

                                 <div className="flex items-center px-4 py-1 rounded bg-n-1 text-n-8">
                                    <img
                                       className="mr-2.5"
                                       src={item.status === "done" ? icCheck2 : icLoading1}
                                       width={16}
                                       height={16}
                                       alt={status}
                                    />
                                    <div className="tagline">{status}</div>
                                 </div>
                              </div>

                              <div className="mb-10 -my-10 -mx-15">
                                 <img
                                    className="w-full"
                                    src={item.imageUrl}
                                    width={628}
                                    height={426}
                                    alt={item.title}
                                 />
                              </div>
                              <h4 className="mb-4 h4">{item.title}</h4>
                              <p className="body-2 text-n-4">{item.text}</p>
                           </div>
                        </div>
                     </div>
                  )
               })}

               <Gradient />
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
               <Button href="/roadmap">Our roadmap</Button>
            </div>
         </div>
      </Section>
   )
}
