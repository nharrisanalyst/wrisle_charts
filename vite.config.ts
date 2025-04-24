import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import {libInjectCss} from 'vite-plugin-lib-inject-css'
import { fileURLToPath } from 'url'
import {glob} from 'glob'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['lib'] })
  ],
  
  build: {
        lib: {
          entry: resolve(__dirname, 'lib/main.ts'),
          formats: ['es']
        },
  rollupOptions: {
    external: ['react', 'react/jsx-runtime'],
    input: Object.fromEntries(
      glob
        .sync('lib/**/*.{ts,tsx}', {
          ignore: ['lib/**/*.d.ts', 'lib/**/*.stories.tsx'],
        })
        .map(file => [
          relative('lib', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
    output: {
      assetFileNames: 'assets/[name][extname]',
      entryFileNames: '[name].js',
    },
   }
  }
})
