import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import {defineConfig} from 'vite'

const viteConfig = defineConfig({
    plugins: [
      {enforce: 'pre', ...mdx({remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex]})},
      react({include: /\.(jsx|js|mdx|md|tsx|ts)$/})
    ]
  })

export default viteConfig
