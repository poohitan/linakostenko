const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const eslint = require('rollup-plugin-eslint');
const uglify = require('rollup-plugin-uglify');

const MODULE_NAME = 'LinaKostenko';
const INPUT = 'src/main.js';
const DESTINATION_FOLDER = 'dist';

const eslintPlugin = eslint();
const babelPlugin = babel({ exclude: 'node_modules/**' });
const uglifyPlugin = uglify();

function buildUMDVersion() {
  return rollup.rollup({
    input: INPUT,
    plugins: [eslintPlugin, babelPlugin],
  })
    .then(bundle => bundle.write({
      format: 'umd',
      name: MODULE_NAME,
      file: `${DESTINATION_FOLDER}/linakostenko.js`,
    }));
}

function buildUMDMinifiedVersion() {
  return rollup.rollup({
    input: INPUT,
    plugins: [eslintPlugin, babelPlugin, uglifyPlugin],
  })
    .then(bundle => bundle.write({
      format: 'umd',
      name: MODULE_NAME,
      file: `${DESTINATION_FOLDER}/linakostenko.min.js`,
    }));
}

function buildESVersion() {
  return rollup.rollup({
    input: INPUT,
    plugins: [eslintPlugin],
  })
    .then(bundle => bundle.write({
      format: 'es',
      file: `${DESTINATION_FOLDER}/linakostenko.es.js`,
    }));
}

buildUMDVersion()
  .then(buildUMDMinifiedVersion)
  .then(buildESVersion)
  .then(() => console.log('Built successfully.'))
  .catch(error => console.error(error));
