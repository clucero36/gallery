import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
 
// export default defineConfig(({command, mode}) => {
//   const env = loadEnv(mode, process.cwd(), '')
  
//   return {
//     // vite config
//     define: {
//       __APP_ENV__: JSON.stringify(env.KEY),
//     },
//     plugins: [react()],
//     test: {
//       environment: 'jsdom',
//     },
//   }
// })

export default defineConfig({
  plugins: [react()],
  test: {
      environment: 'jsdom',
      env: loadEnv('', process.cwd(), ''),
  },
})
