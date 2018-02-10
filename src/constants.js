export const LETTERS = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяўэыАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯЎЭЫabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPGRSTUVWXYZ';
export const NUMBERS = '0123456789';
export const ALPHANUMERIC_CHARACTERS = LETTERS + NUMBERS;
export const SENTENCE_DELIMITERS = ['!!!', '.', '!', '?', '…'];
export const WHITESPACE = ['\n', '\r', ' '];

export const HTML_TAG_REGEX = /(?:<\w+[\s\w\d=\-.,+;"':/]*>|<\/\w+>)/g;
export const HTML_ZONE_PLACEHOLDER = '%HTML%';

export const SPECIAL_SYMBOLS_HTML_CODES = [{
  symbol: '"',
  code: '&quot;',
}, {
  symbol: '…',
  code: '&hellip;',
}, {
  symbol: '&',
  code: '&amp;',
}, {
  symbol: '<',
  code: '&lt;',
}, {
  symbol: '>',
  code: '&gt;',
}, {
  symbol: ' ',
  code: '&nbsp;',
}, {
  symbol: '¢',
  code: '&cent;',
}, {
  symbol: '£',
  code: '&pound;',
}, {
  symbol: '¤',
  code: '&curren;',
}, {
  symbol: '¥',
  code: '&yen;',
}, {
  symbol: '§',
  code: '&sect;',
}, {
  symbol: '©',
  code: '&copy;',
}, {
  symbol: '«',
  code: '&laquo;',
}, {
  symbol: '®',
  code: '&reg;',
}, {
  symbol: '°',
  code: '&deg;',
}, {
  symbol: '±',
  code: '&plusmn;',
}, {
  symbol: '»',
  code: '&raquo;',
}, {
  symbol: '€',
  code: '&euro;',
}];

export default {
  LETTERS,
  NUMBERS,
  ALPHANUMERIC_CHARACTERS,
  SENTENCE_DELIMITERS,
  WHITESPACE,
  HTML_TAG_REGEX,
  HTML_ZONE_PLACEHOLDER,
  SPECIAL_SYMBOLS_HTML_CODES,
};
