const styled = require('styled-elements').default;
const { curryN } = require('ramda');

const Grid = require('../../components/Main_Grid');
const SideBar = require('../../components/SideBar');
const Display = require('../../components/Display');

function Main(state, emit) {
    return Grid({ 'data-component': 'main' }, [
        SideBar(emit, Array.from(state.files.values())),
        Display(state.currentFile || {}),
    ]);
}

module.exports = Main;
