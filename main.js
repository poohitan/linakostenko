const ExtendedString = require('./extended-string');

module.exports = (string, options = {}) => {
  const extendedString = ExtendedString.create(string);

  const allMethodsSortedByCallOrder = [
    'replaceSeriesOfDotsWithEllipsis',
    'normalizeSeriesOfExclamationMarks',
    'normalizeSeriesOfQuestionMarks',
    'forceSpaceBeforeCommasAndDots',
    'replaceSeriesOfSpacesWithOneSpace',
    'replaceHyphensWithLongDashes',
    'replaceHyphensInDateRangesWithLongDashes',
    'replaceStraightQuotationMarks',
  ];

  const methodsToAvoid = Object.keys(options).filter(methodName => options[methodName] === false);
  const methodsToCall = allMethodsSortedByCallOrder
    .filter(methodName => !methodsToAvoid.includes(methodName));

  return methodsToCall
    .reduce((result, methodName) => result[methodName](), extendedString)
    .getValue();
};
