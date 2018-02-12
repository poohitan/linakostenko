import { HTML_ENTITIES } from '../constants/index';

export default string => HTML_ENTITIES
  .filter(({ symbol }) => symbol !== ' ' && symbol !== '&')
  .reduce((result, { symbol, entity }) => result.replace(new RegExp(`${symbol}`, 'g'), entity), string);
