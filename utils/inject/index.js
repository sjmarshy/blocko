const { curryN } = require('ramda');

// create a new object with the provided value + key
const inject = curryN(3, (val, key, obj) =>
    Object.assign({}, obj, { [key]: val })
);

module.exports = inject;
