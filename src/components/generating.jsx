import { imgLoading } from "../assets"
import { cn } from "../lib/utils"

export default function Generating({ className }) {
   return (
      <div
         className={cn(
            className || "",
            "flex items-center h-[3.5rem] px-6 bg-n-8/60 rounded-[1.7rem] text-base"
         )}>
         <img className="w-5 h-5 mr-4" src={imgLoading} alt="loading" />
         AI is generating
      </div>
   )
}
