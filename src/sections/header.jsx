import { useLocation } from "react-router-dom"
import { useState } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

import Button from "../components/ui/button"
import { HamburgerMenu } from "../components/design/header-ornamen"

import { navigation } from "../constants"
import { cn } from "../lib/utils"
import { icBrainwave } from "../assets"
import MenuSvg from "../assets/svg/menu-svg"

export default function Header() {
   const pathname = useLocation()
   const [openNavigation, setOpenNavigation] = useState(false)

   const toggleNavigation = () => {
      if (openNavigation) {
         setOpenNavigation(false)
         enablePageScroll()
      } else {
         setOpenNavigation(true)
         disablePageScroll()
      }
   }

   const handleClick = () => {
      if (!openNavigation) return

      enablePageScroll()
      setOpenNavigation(false)
   }

   return (
      <div
         className={cn(
            "fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm",
            openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
         )}>
         <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
               <img src={icBrainwave} width={190} height={40} alt="Brainwave" />
            </a>

            <nav
               className={cn(
                  "fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent",
                  openNavigation ? "flex" : "hidden"
               )}>
               <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
                  {navigation.map((item) => (
                     <a
                        key={item.id}
                        href={item.url}
                        onClick={handleClick}
                        className={cn(
                           "block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12",
                           item.onlyMobile ? "lg:hidden" : "",
                           item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                        )}>
                        {item.title}
                     </a>
                  ))}
               </div>

               <HamburgerMenu />
            </nav>

            <a
               href="#signup"
               className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block">
               New account
            </a>
            <Button className="hidden lg:flex" href="#login">
               Sign in
            </Button>

            <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
               <MenuSvg openNavigation={openNavigation} />
            </Button>
         </div>
      </div>
   )
}
