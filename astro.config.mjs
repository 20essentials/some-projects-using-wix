// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },

  //Localhost
  // site: 'http://localhost:4321/'

  //Deploy normal project
  base: '/some-projects-using-wix/',
  site: 'https://20essentials.github.io/some-projects-using-wix/'
});
