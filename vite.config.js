import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // `npm run dev` levanta la página en http://localhost:5173 y la abre en el navegador.
  server: { port: 5173, open: true },
});
