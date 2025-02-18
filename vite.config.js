import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import eslintPlugin from 'vite-plugin-eslint';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@svgs': path.resolve(__dirname, 'src/assets/svgs'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.js', '.jsx', '.svg', '.png'],
  },
  assetsInclude: ['**/*.png', '**/*.svg'],
  server: {
    fs: {
      strict: false,
    },
  },
});
