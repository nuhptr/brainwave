import { companyLogos } from "../constants"

export default function CompanyLogos({ className }) {
   return (
      <div className={className}>
         <h5 className="mb-6 text-center tagline text-n-1/50">
            Helping people create beautiful content at
         </h5>
         <ul className="flex">
            {companyLogos.map((logo, index) => (
               <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
                  <img src={logo} alt={`logo ${logo}`} width={134} height={28} />
               </li>
            ))}
         </ul>
      </div>
   )
}
