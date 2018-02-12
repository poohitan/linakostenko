import { HTML_ENTITIES } from '../constants/index';

export default string => HTML_ENTITIES
  .reduce((result, { symbol, entity }) => result.replace(new RegExp(`${entity}`, 'g'), symbol), string);
