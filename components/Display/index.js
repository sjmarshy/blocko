const styled = require('styled-elements').default;
const marked = require('marked');
const raw = require('choo/html/raw');

const colors = require('../../colors');

const Wrapper = styled.div`
    grid-column-start: 4;
    grid-column-end: -1;
    background-color: ${colors.background};

    color: ${colors.text};
    height: 100vh;
    padding: 10px;
`;

// TODO: better name =)
function Display(file) {
    return Wrapper(
        { 'data-component': 'Display' },
        raw(marked(file.contents || 'chose a file <-'))
    );
}

module.exports = Display;
