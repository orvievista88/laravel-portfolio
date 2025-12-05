import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx'], // Specify the entry points
      refresh: true,
    }),
    react(),
  ],
  build: {
    outDir: 'dist',  // Set the build output folder to 'dist'
    emptyOutDir: true,  // Ensure that the dist folder is cleared before each build
  },
});
