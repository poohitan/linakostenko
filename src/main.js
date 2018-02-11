import rules from './rules/index';
import makeRuleOmitHTML from './utils/make-rule-omit-html';

const allRuleNamesSortedByApplyOrder = [
  'replaceHTMLCodesWithSpecialSymbols',
  'replaceSeriesOfDotsWithEllipsis',
  'normalizeSeriesOfExclamationMarks',
  'normalizeSeriesOfQuestionMarks',
  'forceSpaceAfterPunctuation',
  'forceNonBreakingSpaceAroundLongDashes',
  'replaceSeriesOfSpacesWithOneSpace',
  'replaceHyphensWithLongDashes',
  'replaceHyphensInDateRangesWithLongDashes',
  'replaceStraightQuotationMarks',
];

function wrapRule(name, options = {}) {
  const rule = rules[name];

  if (!rule) {
    throw new Error(`Rule "${name}" doesn't exist.`);
  }

  const { ignoreHTML } = options;

  if (ignoreHTML) {
    return rule;
  }

  return makeRuleOmitHTML(rule);
}

const LinaKostenko = (string, options = {}) => {
  if (!string) {
    return '';
  }

  const ruleNamesToOmit = Object.keys(options).filter(name => options[name] === false);
  const rulesToApply = allRuleNamesSortedByApplyOrder
    .filter(name => !ruleNamesToOmit.includes(name))
    .map(name => wrapRule(name, options));

  return rulesToApply
    .reduce((result, rule) => rule(result), string);
};

Object.keys(rules).forEach((name) => {
  LinaKostenko[name] = (string, options = {}) => wrapRule(name, options)(string);
});

export default LinaKostenko;
