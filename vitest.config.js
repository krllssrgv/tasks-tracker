import path from 'node:path';
import EnvironmentPlugin from 'vite-plugin-environment';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [EnvironmentPlugin([])],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app/app'),
      '@pages': path.resolve(__dirname, './src/pages/index'),
      '@widgets': path.resolve(__dirname, './src/widgets/index'),
      '@features': path.resolve(__dirname, './src/features/index'),
      '@entities': path.resolve(__dirname, './src/entities/index'),
      '@shared': path.resolve(__dirname, './src/shared/index'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules'],
  },
});