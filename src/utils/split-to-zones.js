import { HTML_TAG_REGEX } from '../constants/index';

export default (string) => {
  let match;
  const plainTextZones = [];
  const htmlZones = [];

  while (match = HTML_TAG_REGEX.exec(string)) { // eslint-disable-line
    const begin = match.index;
    const end = begin + match[0].length;

    const currentHtmlZone = {
      begin,
      end,
      type: 'html',
      content: match[0],
    };

    htmlZones.push(currentHtmlZone);
  }

  let plainTextZoneBegin = 0;
  let plainTextZoneEnd = 0;

  for (let i = 0; i < string.length; i += 1) {
    const htmlZone = htmlZones.find(zone => i >= zone.begin && i < zone.end);

    if (htmlZone) {
      plainTextZoneEnd = i;

      plainTextZones.push({
        begin: plainTextZoneBegin,
        end: plainTextZoneEnd,
        type: 'text',
        content: string.slice(plainTextZoneBegin, plainTextZoneEnd),
      });

      i = htmlZone.end - 1;
      plainTextZoneBegin = htmlZone.end;
    } else if (i === string.length - 1) {
      plainTextZoneEnd = string.length;

      plainTextZones.push({
        begin: plainTextZoneBegin,
        end: plainTextZoneEnd,
        type: 'text',
        content: string.slice(plainTextZoneBegin, plainTextZoneEnd),
      });
    }
  }

  const zones = [].concat(htmlZones).concat(plainTextZones)
    .filter(zone => zone.begin < zone.end)
    .sort((leftZone, rightZone) => {
      if (leftZone.begin > rightZone.begin) {
        return 1;
      }

      if (leftZone.begin < rightZone.begin) {
        return -1;
      }

      return 0;
    });

  return zones;
};
