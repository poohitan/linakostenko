import { ALPHANUMERIC_CHARACTERS, LETTERS } from '../constants/index';

export default string => string.replace(new RegExp(`([${ALPHANUMERIC_CHARACTERS}]+)([,!.:?;…])([${LETTERS}]+?)`, 'g'), '$1$2 $3');
