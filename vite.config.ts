import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      name: '@torian12321/react-components-library-template',
      formats: ['es', 'cjs'],
      entry: {
        'react-components-library-template': resolve(__dirname, 'src/index.ts'),
        is: resolve(__dirname, 'src/is/index.ts'),
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: 'src', replacement: resolve(__dirname, 'src') }],
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/vitest.setup.ts',
        '**/vitest.setup.tsx',
        'vite.config.ts',
      ],
    }),
    visualizer({
      filename: 'visualizer/stats.html',
      template: 'treemap',
      open: true,
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/vitest.setup.ts'],
    coverage: {
      enabled: true,
      reporter: ['text', 'html'],
      include: ['src/**'],
      exclude: ['**/index.ts'],
      thresholds: {
        /** Percentage of coverage test required */
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
