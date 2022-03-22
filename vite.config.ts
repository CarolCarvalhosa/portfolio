import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import * as path from 'path';
import shimReactPdf from 'vite-plugin-shim-react-pdf';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), shimReactPdf()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
