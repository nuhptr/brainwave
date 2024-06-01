import { Brackets } from "./svg/Bracket"

export const Tagline = ({ className, children }) => {
   return (
      <div className={`tagline flex items-center ${className || ""}`}>
         {Brackets("left")}
         <div className="mx-3 text-n-3">{children}</div>
         {Brackets("right")}
      </div>
   )
}
