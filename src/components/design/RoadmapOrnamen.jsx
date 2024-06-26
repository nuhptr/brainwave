import { imgGradient } from "../../assets"

export const Gradient = () => {
   return (
      // 292px, 486px, 906px
      <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
         {/* 58.85rem = 941.6px  */}
         <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
            <img className="w-full" src={imgGradient} width={942} height={942} alt="Gradient" />
         </div>
      </div>
   )
}
