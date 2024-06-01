import { Tagline } from "../Taglines"

export const Heading = ({ className, title, text, tag }) => {
   return (
      <div className={`max-w-[50rem] mx-auto mb-12 lg:mb-20 ${className || ""}`}>
         {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
         {title && <h2 className="h2">{title}</h2>}
         {text && <p className="mt-4 body-2 text-n-4">{text}</p>}
      </div>
   )
}
