import rules from './rules/index';
import makeRuleOmitHTML from './utils/make-rule-omit-html';

const ruleNames = Object.keys(rules);

const ChainableString = {
  create(value) {
    const instance = {
      value: () => value,
    };

    return ChainableString.injectRules(instance, value);
  },

  injectRules(instance, value) {
    return ruleNames.reduce((result, name) => Object.assign(result, {
      [name]: (...params) => {
        const rule = makeRuleOmitHTML(rules[name]);
        const newValue = rule(value, ...params);

        return ChainableString.create(newValue); // make rule calls chainable
      },
    }), instance);
  },
};

export default ChainableString;
