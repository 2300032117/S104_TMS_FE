import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/S104_TMS_FE/', // MUST match your repo name
  plugins: [react()],
});
