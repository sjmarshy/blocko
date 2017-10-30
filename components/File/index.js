const styled = require('styled-elements').default;
const html = require('choo/html');
const colors = require('../../colors');
const lighten = require('polished').lighten;

const FileName = styled.h2`
    color: white;
    font-size: 16px;
`;

const File = styled.div`
    padding: 2%;
    border-bottom: 1px solid white;
    cursor: pointer;

    &:hover {
        background-color: ${lighten(0.2, colors.background)};
    }
`;

function file({ name }) {
    return File({ 'data-component': 'File' }, FileName(name));
}

module.exports = file;
