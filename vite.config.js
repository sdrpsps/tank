// vite.config.js
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
export default defineConfig({
  plugins: [
    eslintPlugin({
      include: ['src/**/*.ts', 'src/*.ts'], // eslint校验的文件类型
    }),
  ],
});
