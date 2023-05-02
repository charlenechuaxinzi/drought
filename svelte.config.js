// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),
// }

import node from '@sveltejs/adapter-node';

const config = {
  kit: {
    adapter: node(),
    target: '#svelte',
    vite: {
      build: {
        outDir: 'build'
      }
    }
  }
};

export default config;
