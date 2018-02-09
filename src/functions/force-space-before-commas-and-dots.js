import { ALPHANUMERIC_CHARACTERS } from '../constants';

export default string => string
  .replace(new RegExp(`([${ALPHANUMERIC_CHARACTERS}]+)([,.])([${ALPHANUMERIC_CHARACTERS}]+)`, 'g'), '$1$2 $3');
