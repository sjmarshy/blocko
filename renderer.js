const fs = require('fs');
const choo = require('choo');
const html = require('choo/html');
const styled = require('styled-elements').default;
const injectGlobal = require('styled-elements').injectGlobal;
const R = require('ramda');

/* pages */

const mainPage = require('./pages/Main');

/* global stuff */

window.initialState = { files: [] };

injectGlobal`
    @font-face {
        font-family: 'Fira';
        src: url('./assets/fonts/fira-code-regular.ttf');
        font-weight: 500;
        font-style: normal;
    }
`;

/* end global stuff */

const app = choo();

app.use(readNotes);
app.route('/', mainPage);

app.mount('[data-app]');

const freshFile = R.curryN(2, (dir, fileName) => ({
    dir,
    fileName,
}));

function readNotes(state, emitter) {
    const NOTES_DIR = process.env.NOTES_DIR;
    emitter.on(state.events.DOMCONTENTLOADED, () => {
        fs.readdir(NOTES_DIR, (err, files) => {
            if (err) {
                state.error = err;
                emitter.emit('render');
                return;
            }
            state.files = files.map(freshFile(NOTES_DIR));
            emitter.emit('render');
            return;
        });
    });
}
