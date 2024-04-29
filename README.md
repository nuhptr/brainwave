# Brainwave Landing Page

<img width="1440" alt="brainwave" src="https://github.com/nuhptr/brainwave/assets/50306963/317ece44-0a9a-418c-aad0-f4bbd1f19816">

Building a landing page for Brainwave using Vite and React. Also, using Tailwind CSS for styling.

## General Dependencies

-  [React Router Dom](https://reactrouter.com/web/guides/quick-start) - bun add react-router-dom
-  [React Just Parallax](https://www.npmjs.com/package/react-just-parallax) - bun add react-just-parallax
-  [Scroll Lock](https://www.npmjs.com/package/scroll-lock) - bun add scroll-lock

## Tailwind CSS Setup With Plugin

1. Install Tailwind CSS and its dependencies:

```bash
bun add -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

2. Add the following to the `tailwind.config.js` file:

This is a new method to add custom class with tailwindcss plugin and using @apply to but not in the css file instead in tailwind.config.js/ts

```js
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export default {
   plugins: [
      plugin(function ({ addBase, addComponents, addUtilities }) {
         addBase({})
         addComponents({
            ".container": {
               "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
            },
            ".h1": {
               "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
                  {},
            },
            ".h2": {
               "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
                  {},
            },
            ".h3": {
               "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
            },
            ".h4": {
               "@apply text-[2rem] leading-normal": {},
            },
            ".h5": {
               "@apply text-2xl leading-normal": {},
            },
            ".h6": {
               "@apply font-semibold text-lg leading-8": {},
            },
            ".body-1": {
               "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
                  {},
            },
            ".body-2": {
               "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
            },
            ".caption": {
               "@apply text-sm": {},
            },
            ".tagline": {
               "@apply font-grotesk font-light text-xs tracking-tagline uppercase": {},
            },
            ".quote": {
               "@apply font-code text-lg leading-normal": {},
            },
            ".button": {
               "@apply font-code text-xs font-bold uppercase tracking-wider": {},
            },
         })
         addUtilities({
            ".tap-highlight-color": {
               "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
            },
         })
      }),
   ],
}
```
