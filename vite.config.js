import { defineConfig } from 'vite';
import ViteImagemin from 'vite-plugin-imagemin';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [
  react(),
    ViteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) {
            return 'react';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Optional: remove console logs
      },
    },
  },
});
