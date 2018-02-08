const splitToSentences = require('../helpers/split-to-sentences');

const STRAIGHT_QUOTATION_MARK = '"';
const FRENCH_QUOTATION_MARKS = ['«', '»'];
const GERMAN_QUOTATION_MARKS = ['„', '“'];

function replaceQuotationMarksInSentence(sentence, { outer, inner }, nested = false) {
  const firstOccurence = sentence.indexOf(STRAIGHT_QUOTATION_MARK);
  const lastOccurence = sentence.lastIndexOf(STRAIGHT_QUOTATION_MARK);

  if (firstOccurence === -1 || lastOccurence === -1) {
    return sentence;
  }

  const charsBefore = sentence.slice(0, firstOccurence);
  const charsInBetween = sentence.slice(firstOccurence + 1, lastOccurence);
  const charsAfter = sentence.slice(lastOccurence + 1);

  const properQuotationMarks = nested ? inner : outer;

  return charsBefore
    + properQuotationMarks[0]
    + replaceQuotationMarksInSentence(charsInBetween, { inner }, true)
    + properQuotationMarks[1]
    + charsAfter;
}

module.exports = (string, options = {}) => {
  let outer;
  let inner;

  if (options.outer && options.inner) {
    outer = options.outer; // eslint-disable-line
    inner = options.inner; // eslint-disable-line
  } else if (options.outer) {
    outer = options.outer; // eslint-disable-line
    inner = options.outer;
  } else {
    outer = FRENCH_QUOTATION_MARKS;
    inner = GERMAN_QUOTATION_MARKS;
  }

  return splitToSentences(string)
    .map(sentence => replaceQuotationMarksInSentence(sentence, { outer, inner }))
    .join('');
}
