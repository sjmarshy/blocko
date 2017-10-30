const styled = require('styled-elements').default;
const { compose } = require('ramda');

const setCurrentFile = require('../../utils/setCurrentFile');
const inject = require('../../utils/inject');

const File = require('../SideBar_File');
const List = require('../List');

const injectSetCurrentFileAndRender = emit =>
    compose(File, inject(setCurrentFile(emit), 'setCurrentFile'));

function SideBar(emit, fs) {
    return List(fs.map(injectSetCurrentFileAndRender(emit)));
}

module.exports = SideBar;
