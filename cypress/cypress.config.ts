import { defineConfig } from 'cypress';
import path from 'path';

export default defineConfig({
  video: false,
  retries: {
    runMode: 2
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    },
    supportFile: path.resolve(__dirname, './support/component.ts')
  },
  viewportHeight: 760,
  viewportWidth: 1366
});
