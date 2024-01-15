/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
    },
  },
  // base: '/team-project-SlimTrack360/',
  base: './',
  build: {
    outDir: './dist',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
