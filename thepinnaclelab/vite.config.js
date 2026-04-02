import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  
  // Build optimization for static hosting
  build: {
    // Output directory
    outDir: 'dist',
    
    // Empty override for caching purposes
    emptyOutDir: true,
    
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react'
            }
            return 'vendor'
          }
        },
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: name => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name)) {
            return 'images/[name].[hash][extname]'
          } else if (/\.css$/.test(name)) {
            return 'css/[name].[hash][extname]'
          }
          return 'assets/[name].[hash][extname]'
        }
      }
    },
    
    // Source maps for production debugging
    sourcemap: false,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 600,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Report compressed size
    reportCompressedSize: true,
  },
  
  // Server configuration for development
  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },
  
  // Preview configuration
  preview: {
    port: 4173,
  }
})
