import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/KasperskyTest/',
  

  // Убираем проблему  react-highlight-within-textarea.js?v=e538967b:12395 Uncaught ReferenceError: global is not defined
  define: {
    global: {}
  },

     
});
