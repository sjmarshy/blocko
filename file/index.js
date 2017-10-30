const curryN = require('ramda').curryN;
const parsePath = require('path').parse;

const fresh = curryN(2, (directory, fileName) =>
    Object.assign(
        {
            directory,
            selected: false,
            loaded: false,
            contents: null,
        },
        parsePath(fileName)
    )
);

module.exports = { fresh };
