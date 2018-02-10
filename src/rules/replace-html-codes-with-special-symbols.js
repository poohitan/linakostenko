import { SPECIAL_SYMBOLS_HTML_CODES } from '../constants';

export default string => SPECIAL_SYMBOLS_HTML_CODES
  .reduce((result, { symbol, code }) => result.replace(new RegExp(`${code}`, 'g'), symbol), string);
