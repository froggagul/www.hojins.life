require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

const { createPages } = require('./gatsby/createPages');
const { createNode } = require('./gatsby/createNode');

exports.createPages = createPages;
exports.onCreateNode = createNode;
