import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const branch = env.VITE_BRANCH;
  const config = {
    plugins: [react()],
    base: branch === 'main' ? '/pruebaDespliegue/' : '/pruebaDespliegue/test/',
  };
  return config;
});

