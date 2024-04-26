import {
   icBenefitIcon1,
   icBenefitIcon2,
   icBenefitIcon3,
   icBenefitIcon4,
   icBenefitImage2,
   icChromecast,
   icDisc02,
   imgDiscord,
   icDiscordBlack,
   icFacebook,
   imgFigma,
   icFile02,
   imgFramer,
   icHomeSmile,
   icInstagram,
   imgNotification2,
   imgNotification3,
   imgNotification4,
   imgNotion,
   imgPhotoshop,
   icPlusSquare,
   imgProtopie,
   imgRaindrop,
   icRecording01,
   icRecording03,
   imgRoadmap1,
   imgRoadmap2,
   imgRoadmap3,
   imgRoadmap4,
   icSearchMd,
   imgSlack,
   icSliders04,
   icTelegram,
   icTwitter,
   icYourlogo,
} from "../assets"

export const heroIcons = [icHomeSmile, icFile02, icSearchMd, icPlusSquare]

export const notificationImages = [imgNotification4, imgNotification3, imgNotification2]

export const companyLogos = [icYourlogo, icYourlogo, icYourlogo, icYourlogo, icYourlogo]

export const brainwaveServices = ["Photo generating", "Photo enhance", "Seamless integration"]

export const brainwaveServicesIcons = [
   icRecording03,
   icRecording01,
   icDisc02,
   icChromecast,
   icSliders04,
]

export const navigation = [
   {
      id: "0",
      title: "Features",
      url: "#features",
   },
   {
      id: "1",
      title: "Pricing",
      url: "#pricing",
   },
   {
      id: "2",
      title: "How To Use",
      url: "#how-to-use",
   },
   {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
   },
   {
      id: "4",
      title: "New Account",
      url: "#signup",
      onlyMobile: true,
   },
   {
      id: "5",
      title: "Sign In",
      url: "#login",
      onlyMobile: true,
   },
]

export const roadmap = [
   {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: imgRoadmap1,
      colorful: true,
   },
   {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: imgRoadmap2,
   },
   {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: imgRoadmap3,
   },
   {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: imgRoadmap4,
   },
]
