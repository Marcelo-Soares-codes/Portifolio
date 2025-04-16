import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portifolio/', // 👈 nome exato do repositório no GitHub
});
