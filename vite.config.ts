import * as fs from 'fs'
// import * as path from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import electron from 'vite-plugin-electron'


fs.rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      // preload: {
      //   input: {
      //     // Must be use absolute path, this is the restrict of Rollup
      //     preload: path.join(__dirname, 'electron/preload.ts'),
      //   },
      // },
      // Enables use of Node.js API in the Renderer-process
      // https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
      renderer: {},
    }),
  ]
})
