import rules from './rules/index';
import makeRuleOmitHTML from './utils/make-rule-omit-html';

const allRuleNamesSortedByApplyOrder = [
  'replaceHTMLCodesWithSpecialSymbols',
  'replaceSeriesOfDotsWithEllipsis',
  'normalizeSeriesOfExclamationMarks',
  'normalizeSeriesOfQuestionMarks',
  'forceSpaceAfterPunctuation',
  'replaceSeriesOfSpacesWithOneSpace',
  'replaceHyphensWithLongDashes',
  'replaceHyphensInDateRangesWithLongDashes',
  'replaceStraightQuotationMarks',
];

const LinaKostenko = (string, options = {}) => {
  if (!string) {
    return '';
  }

  const { ignoreHTML } = options;

  const ruleNamesToOmit = Object.keys(options).filter(name => options[name] === false);
  const rulesToApply = allRuleNamesSortedByApplyOrder
    .filter(name => !ruleNamesToOmit.includes(name))
    .map((name) => {
      const rule = rules[name];

      if (ignoreHTML) {
        return rule;
      }

      return makeRuleOmitHTML(rule);
    });

  return rulesToApply
    .reduce((result, rule) => rule(result), string);
};

Object.keys(rules).forEach((name) => {
  LinaKostenko[name] = (string, options = {}) => {
    const rule = rules[name];
    const { ignoreHTML } = options;

    if (ignoreHTML) {
      return rule(string);
    }

    return makeRuleOmitHTML(rule)(string);
  };
});

export default LinaKostenko;
