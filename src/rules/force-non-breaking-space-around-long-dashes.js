import { HTML_ZONE_PLACEHOLDER } from '../constants/index';

export default string => string
  .replace(/ —/g, '&nbsp;—')
  .replace(new RegExp(`(^|[\n${HTML_ZONE_PLACEHOLDER}])— ?`, 'g'), '$1—&nbsp;');
