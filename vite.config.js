import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This makes the server accessible via your local network IP
  },
  define: {
    'process.env': {}, // This allows access to process.env in your code
  },
});
