import createDefaultConfig from '@open-wc/building-rollup/modern-config';

import copy from 'rollup-plugin-copy';
// Static assets will vary depending on the application

const copyConfig = {
  targets: [
    {
      src: 'assets',
      dest: 'dist'
    },
    {
      src: 'sw.js',
      dest: 'dist'
    },
    {
      src: 'manifest.webmanifest',
      dest: 'dist'
    }
  ],
};

const config = createDefaultConfig({
  input: 'index.html'
});

config.plugins.push(copy(copyConfig));
export default config
