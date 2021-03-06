import { defineConfig } from 'vite'
import ruby from 'vite-plugin-ruby'
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default ({mode}) => {
  const prod = mode == 'production'
  return defineConfig({
    resolve: {
      dedupe: ['axios']
    },
    plugins: [
      ruby(),
      svelte({
        experimental: {
          prebundleSvelteLibraries: true
        },
        emitCss: prod
      })
    ],
  })
}
