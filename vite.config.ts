import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias para tu código local
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build', // Carpeta donde se genera el build
  },
  server: {
    port: 3000,
    open: true,
  },
});
