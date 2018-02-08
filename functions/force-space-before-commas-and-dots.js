const { ALPHANUMERIC_CHARACTERS } = require('../constants');

module.exports = string => string.replace(new RegExp(`([${ALPHANUMERIC_CHARACTERS}]+)([,.])([${ALPHANUMERIC_CHARACTERS}]+)`, 'g'), '$1$2 $3')
