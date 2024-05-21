import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        dog: resolve(__dirname, 'src/dog_page/index.html'),
        listing: resolve(__dirname, 'src/dog_listing/index.html'),
        favorite: resolve(__dirname, "src/favorites/index.html"),  
        form: resolve(__dirname, "src/forms/index.html"),  
      },
    },
  },
});
