import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
import { fileURLToPath } from "node:url";

export default defineConfig(() => {
  const rootDir = path.dirname(fileURLToPath(import.meta.url))
  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: /^@\//, replacement: path.resolve(rootDir, 'src') + '/' },
        {
          find: /^@tflex\/uikit$/,
          replacement: path.resolve(rootDir, 'node_modules/@tflex/uikit/dist/index.js'),
        },
      ],

      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['@tflex/uikit'],
    },
  }
})
