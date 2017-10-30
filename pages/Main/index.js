const styled = require('styled-elements').default;
const parsePath = require('path').parse;

/* consts */

const colors = require('../../colors');

/* components */

const File = require('../../components/File');

const List = styled.ul`
    margin: 0;
    padding: 0;
    background-color: ${colors.background};

    grid-column-start: 1;
    grid-column-end: span 3;
`;

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12 col grid */
    grid-column-gap: 12px;

    font-family: Fira;
`;

function Main(state, emit) {
    return MainWrapper(
        { 'data-component': 'main' },
        List(
            state.files
                // TODO: break out & compose
                .map(({ fileName }) => parsePath(fileName).name)
                .map(name => File({ name }))
        )
    );
}

module.exports = Main;
