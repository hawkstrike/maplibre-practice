import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  /* build: {
    assetsDir: 'static',
    copyPublicDir: true,
  }, */
  publicDir: 'src/assets',
  plugins: [react(), svgr()],
});
