export const LETTERS = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяўэыАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯЎЭЫabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPGRSTUVWXYZ';
export const NUMBERS = '0123456789';
export const ALPHANUMERIC_CHARACTERS = LETTERS + NUMBERS;
export const SENTENCE_DELIMITERS = ['!!!', '.', '!', '?', '…'];
export const WHITESPACE = ['\n', '\r', ' '];

export const HTML_TAG_REGEX = /(?:<\w+[\s\w\d=\-.,+;"':/]*>|<\/\w+>)/g;
export const HTML_ZONE_PLACEHOLDER = '%HTML%';

export default {
  LETTERS,
  NUMBERS,
  ALPHANUMERIC_CHARACTERS,
  SENTENCE_DELIMITERS,
  WHITESPACE,
  HTML_TAG_REGEX,
  HTML_ZONE_PLACEHOLDER,
};
