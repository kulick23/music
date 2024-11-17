import { defineConfig } from 'vite';

export default defineConfig({
  base: '/simo/', 
  build: {
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
});