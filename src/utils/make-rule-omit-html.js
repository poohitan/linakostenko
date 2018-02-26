import { HTML_ZONE_PLACEHOLDER } from '../constants/index';
import splitToZones from '../utils/split-to-zones';

export default function makeRuleIgnoreHTML(rule) {
  return (value, ...params) => {
    const zones = splitToZones(value);

    const plainText = zones
      .map((zone) => {
        if (zone.type === 'html') {
          return HTML_ZONE_PLACEHOLDER;
        }

        return zone.content;
      })
      .join('');

    const plainTextWithRuleApplied = rule(plainText, ...params);

    const htmlEntities = zones
      .filter(zone => zone.type === 'html')
      .map(zone => zone.content);

    return htmlEntities.reduce((result, htmlString) =>
      result.replace(HTML_ZONE_PLACEHOLDER, htmlString), plainTextWithRuleApplied);
  };
}
