const styled = require('styled-elements').default;
const { curryN } = require('ramda');

const SideBar = require('../../components/SideBar');
const Display = require('../../components/Display');

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12 col grid */
    grid-column-gap: 12px;
`;

function Main(state, emit) {
    console.log(state);
    return MainWrapper({ 'data-component': 'main' }, [
        SideBar(emit, Array.from(state.files.values())),
        Display(state.currentFile || {}),
    ]);
}

module.exports = Main;
