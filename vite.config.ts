import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import terser from '@rollup/plugin-terser';
import * as packageJson from './package.json'

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'rds',
      formats: ['es', 'umd'],
      fileName: (format) => `rds.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.peerDependencies)],
      output: {
        plugins: [terser()]
      }
    },
  },
}))
