const nxPreset = require('@nrwl/jest/preset').default;

module.exports = { 
  ...nxPreset,
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    'node_modules/@ckeditor/.+\.(js|ts)$': 'babel-jest',
    '^.+\\.(ts|mjs|js|html|svg)$': 'jest-preset-angular'
  },
  transformIgnorePatterns: [
    
    '/node_modules/(?!(.*.mjs)|(lodash-es)|(@ckeditor/.+\.js))',
    '\\.pnp\\.[^\\/]+$'
  ]
};
