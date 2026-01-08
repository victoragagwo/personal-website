import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  base: '/personal-website/',
  server: {
    allowedHosts: [
      'unmechanical-benny-purulently.ngrok-free.dev',
      'localhost',
      '127.0.0.1'
    ]
  },
  plugins: [
    react(), 
    viteStaticCopy({
    targets: [
      {
        src: './src/crapsgame/crapsgame.js',
        dest: './src/crapsgame/'
      },
      {
        src: './src/randomQuoteGenerator/randomQuoteGenerator.js',
        dest: './src/randomQuoteGenerator/'
      },
      {
        src: './src/aboutmesection/VICTOR cv.pdf',
        dest: './src/aboutmesection/'
      }
    ]
  })],
})
