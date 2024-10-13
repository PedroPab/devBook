// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default:true, context: 'server', access: 'public'
      }),
      SCORE_API_ENDPOINT: envField.string({
        default:'https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new', context: 'server', access: 'public'
      }),
    }
  },

  adapter: vercel()
})