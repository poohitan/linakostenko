import HTML_ENTITIES from './html-entities';

export const LETTERS = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяўэыАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯЎЭЫabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPGRSTUVWXYZ';
export const NUMBERS = '0123456789';
export const ALPHANUMERIC_CHARACTERS = LETTERS + NUMBERS;
export const SENTENCE_DELIMITERS = ['!!!', '.', '!', '?', '…'];
export const WHITESPACE = ['\n', '\r', ' '];

export const HTML_TAG_OR_CODE_REGEX = /(?:<\w+[\s\w\d=\-.,+;"':/]*>|<\/\w+>|&#\d{2,4};)/g;
export const HTML_ZONE_PLACEHOLDER = '%HTML%';

export { default as HTML_ENTITIES } from './html-entities';

export default {
  LETTERS,
  NUMBERS,
  ALPHANUMERIC_CHARACTERS,
  SENTENCE_DELIMITERS,
  WHITESPACE,
  HTML_TAG_OR_CODE_REGEX,
  HTML_ZONE_PLACEHOLDER,
  HTML_ENTITIES,
};
