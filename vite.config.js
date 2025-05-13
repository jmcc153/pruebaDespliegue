import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: import.meta.env.VITE_BRANCH === 'main' ? '/pruebaDespliegue/' : '/pruebaDespliegue/test/',
  };
  return config;
});

