import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import fs from 'fs';
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@icons': '/src/assets/icons',
      '@common': '/src/common',
    },
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'certs/localhost-key.pem')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'certs/localhost.pem')),
  //   },
  // },
});
