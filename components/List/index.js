const styled = require('styled-elements').default;
const colors = require('../../colors');

const List = styled.ul`
    margin: 0;
    padding: 0;
    background-color: ${colors.background};

    grid-column-start: 1;
    grid-column-end: span 3;
`;

module.exports = List;
