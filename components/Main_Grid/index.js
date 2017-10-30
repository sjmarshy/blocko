const styled = require('styled-elements').default;

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12 col grid */
    grid-column-gap: 12px;
`;

module.exports = MainWrapper;
