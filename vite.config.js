import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import eslintPlugin from 'vite-plugin-eslint';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react(), eslintPlugin(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@svgs': path.resolve(__dirname, 'src/assets/svgs'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@test': path.resolve(__dirname, 'src/test'),
    },
    extensions: ['.js', '.jsx', '.svg', '.png', '.jpg'],
  },
  assetsInclude: ['**/*.png', '**/*.svg', '**/*.ttf'],
  server: {
    fs: {
      strict: false,
    },
    open: true,
  },
});
