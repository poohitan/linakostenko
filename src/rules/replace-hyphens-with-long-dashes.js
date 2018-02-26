import { HTML_ZONE_PLACEHOLDER } from '../constants/index';

export default string => string
  .replace(new RegExp(`(^|[\n${HTML_ZONE_PLACEHOLDER}])- ?`, 'g'), '$1—&nbsp;')
  .replace(/ - /g, '&nbsp;— ');
