const camelCase = require('camelCase');

module.exports = require('require-dir')('.', {
  mapKey: (value, baseName) => camelCase(baseName),
});
