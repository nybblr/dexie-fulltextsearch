import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  moduleName: 'dexieFullTextSearch',
  dest: 'dist/index.js',
  plugins: [ babel({ runtimeHelpers: true }) ],
  exports: 'named',
  format: 'umd'
}
