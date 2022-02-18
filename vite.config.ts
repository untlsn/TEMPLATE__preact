import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import winidcss from 'vite-plugin-windicss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), winidcss()],
  resolve: {
    alias: {
      '$/': `${path.resolve('./src')}/`,
    },
  },
});
