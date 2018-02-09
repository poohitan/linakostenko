import functions from './functions/index';

const functionNames = Object.keys(functions);

const ExtendedString = {
  create(value) {
    const instance = functionNames.reduce((result, functionName) => Object.assign({}, result, {
      [functionName]: (...params) => {
        const newValue = functions[functionName](value, ...params);

        return ExtendedString.create(newValue);
      },
    }), {
      getValue: () => value,
    });

    return instance;
  },
};

export default ExtendedString;
