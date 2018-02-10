import { HTML_ZONE_PLACEHOLDER } from '../constants';

export default string => string
  .replace(new RegExp(`(^|[\n${HTML_ZONE_PLACEHOLDER}])- `, 'g'), '$1&mdash;&nbsp;')
  .replace(/ - /g, '&nbsp;&mdash; ');
