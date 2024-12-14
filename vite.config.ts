import { defineConfig, Plugin } from 'vite'
import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(), 
    compression({
        algorithm: 'gzip', // or 'brotliCompress'
        ext: '.gz', // or '.br' for Brotli
      }),],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          gzipSize: true,
          brotliSize: true,
        }) as Plugin,
      ],
    },
    outDir: 'dist',
  },
})
