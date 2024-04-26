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

export const collabText =
   "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter."

export const collabContent = [
   {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
   },
   {
      id: "1",
      title: "Smart Automation",
   },
   {
      id: "2",
      title: "Top-notch Security",
   },
]

export const collabApps = [
   {
      id: "0",
      title: "Figma",
      icon: imgFigma,
      width: 26,
      height: 36,
   },
   {
      id: "1",
      title: "Notion",
      icon: imgNotion,
      width: 34,
      height: 36,
   },
   {
      id: "2",
      title: "Discord",
      icon: imgDiscord,
      width: 36,
      height: 28,
   },
   {
      id: "3",
      title: "Slack",
      icon: imgSlack,
      width: 34,
      height: 35,
   },
   {
      id: "4",
      title: "Photoshop",
      icon: imgPhotoshop,
      width: 34,
      height: 34,
   },
   {
      id: "5",
      title: "Protopie",
      icon: imgProtopie,
      width: 34,
      height: 34,
   },
   {
      id: "6",
      title: "Framer",
      icon: imgFramer,
      width: 26,
      height: 34,
   },
   {
      id: "7",
      title: "Raindrop",
      icon: imgRaindrop,
      width: 38,
      height: 32,
   },
]

export const pricing = [
   {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
         "An AI chatbot that can understand your queries",
         "Personalized recommendations based on your preferences",
         "Ability to explore the app and its features without any cost",
      ],
   },
   {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
         "An advanced AI chatbot that can understand complex queries",
         "An analytics dashboard to track your conversations",
         "Priority support to solve issues quickly",
      ],
   },
   {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
         "An AI chatbot that can understand your queries",
         "Personalized recommendations based on your preferences",
         "Ability to explore the app and its features without any cost",
      ],
   },
]

export const benefits = [
   {
      id: "0",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: icBenefitIcon1,
      imageUrl: icBenefitImage2,
   },
   {
      id: "1",
      title: "Improve everyday",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: icBenefitIcon2,
      imageUrl: icBenefitImage2,
      light: true,
   },
   {
      id: "2",
      title: "Connect everywhere",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: icBenefitIcon3,
      imageUrl: icBenefitImage2,
   },
   {
      id: "3",
      title: "Fast responding",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: icBenefitIcon4,
      imageUrl: icBenefitImage2,
      light: true,
   },
   {
      id: "4",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: icBenefitIcon1,
      imageUrl: icBenefitImage2,
   },
   {
      id: "5",
      title: "Improve everyday",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: icBenefitIcon2,
      imageUrl: icBenefitImage2,
   },
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

export const socials = [
   {
      id: "0",
      title: "Discord",
      iconUrl: icDiscordBlack,
      url: "#",
   },
   {
      id: "1",
      title: "Twitter",
      iconUrl: icTwitter,
      url: "#",
   },
   {
      id: "2",
      title: "Instagram",
      iconUrl: icInstagram,
      url: "#",
   },
   {
      id: "3",
      title: "Telegram",
      iconUrl: icTelegram,
      url: "#",
   },
   {
      id: "4",
      title: "Facebook",
      iconUrl: icFacebook,
      url: "#",
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
