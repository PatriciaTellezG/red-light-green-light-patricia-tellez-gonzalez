import createDefaultConfig from '@open-wc/building-rollup/modern-config';

import copy from 'rollup-plugin-copy';
// Static assets will vary depending on the application

const copyConfig = {

  targets: [

    {
      src: 'assets',
      dest: 'dist'
    }

  ],

};

const config = createDefaultConfig({

  input: 'index.html'

});

console.log(config.plugins);

config.plugins.push(copy(copyConfig));

console.log(config.plugins);

console.log(config);




export default config
