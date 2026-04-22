# <img width="30px" height="30px" alt="logo" src="./.github/assets/logo.svg"> **Aivee's Portfolio Website Repository**

### **Live Site: [aiveekei.com](aiveekei.com)**

As a developer, showcasing the codebase is as important as the resulting website. This repository will show you my technical opinion, my design choices, and what small details I pay attention to.

I started this portfolio as a way to rekindle the fire I have for web development, to exercise my coding muscle memory, and to dip my toes into coding again. That is why this project started with the tech stack I am most comfortable and experienced with – ReactJS+Javascript+StyledComponents. But another goal for this portfolio is to learn what architecture and systems work best for me, so the stack evolved along the way.

I created this website to showcase my projects, my experience, and the little things about me.

### This website is created using:
- <img width="20px" height="20px" alt="vite" src="./.github/assets/vite.svg"> **`vite`** for initialization. I want to create a simple SPA website without any frameworks, and using Vite is currently the easiest and best way to do it. 
- <img width="20px" height="20px" alt="typescript" src="./.github/assets/typescript.svg">  **`typescript`** as the language. I previously used JS for this project, but switched to TS when I wanted to add types to component props for an extra layer of error catching.
- <img width="20px" height="20px" alt="react-router" src="./.github/assets/react-router.svg"> **`react-router`** for routing. Simplest, most established router library for a standalone React app out there.
- <img width="20px" height="20px" alt="styled-components" src="./.github/assets/styled-components.svg"> **`styled-components`** for styling component. I like how styled-components strikes a nice balance between separate and integrated styling for each component. I can write the style near the component but separate from the structure. It is easy to manage dynamic styles with it.
- <img width="20px" height="20px" alt="storybook" src="./.github/assets/storybook.svg"> **`storybook`** for component documentation and testing. I had experience with Storybook previously and want a good way to test my components, and Storybook works well for this simple feature. You can check out the storybook live [here](storybook.aiveekei.com).

### This website uses the following linters:
- `eslint-plugin-jsx-a11y` for accessibility. This is such an inclusive linter.
- `eslint-plugin-perfectionist` for arranging your imports and props. This gives an extra layer of organization to the codebase. Makes the codebase easier to find and predict.
- `eslint-plugin-unused-imports` for removing unused imports. This helps clean up the codebase.


## Set up

### Prerequisites
|Package | Required Version |
|---|---|
| Node.js | `^20.19.0 \|\| >=22.12.0` |
| npm | `>=10` |

### Installation
- clone or fork
- `npm install`
- `npm run dev`

### Commands
| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run lint` | Check for linting errors |
| `npm run lint:fix` | Auto-fix linting errors |
| `npm run storybook` | Start Storybook on port 6006 |

### Deployment
- This website is deployed in Cloudflare Workers
- Uploading code to GitHub automatically triggers redeployment in Cloudflare. This includes the Storybook live site.
