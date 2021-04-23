require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

const { createPages } = require('./gatsby/createPages');

exports.createPages = createPages;
