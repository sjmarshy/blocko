const fs = require('fs');
const path = require('path');
const choo = require('choo');
const html = require('choo/html');
const styled = require('styled-elements').default;
const injectGlobal = require('styled-elements').injectGlobal;
const { fresh: freshFile } = require('./file');
const events = require('./events');

/* pages */

const mainPage = require('./pages/Main');

/* global stuff */

window.initialState = { files: new Map(), selectedFile: null };

injectGlobal`
    @font-face {
        font-family: 'Fira';
        src: url('./assets/fonts/fira-code-regular.ttf');
        font-weight: 500;
        font-style: normal;
    }

    body {
        font-family: Fira;
    }
`;

/* end global stuff */

const app = choo();

app.use(readNotes);
app.use(selectedFile);

/* routes */

app.route('/', mainPage);

/* end routes */

app.mount('[data-app]');

function readNotes(state, emitter) {
    const NOTES_DIR = process.env.NOTES_DIR;
    emitter.on(state.events.DOMCONTENTLOADED, () => {
        fs.readdir(NOTES_DIR, (err, files) => {
            if (err) {
                state.error = err;
            } else {
                state.files = files
                    .map(freshFile(NOTES_DIR))
                    .reduce(
                        (memo, file) => memo.set(file.base, file),
                        new Map()
                    );
            }

            emitter.emit('render');
            return state;
        });
    });
}

function selectedFile(state, emitter) {
    emitter.on(events.SET_CURRENT_FILE, file => {
        fs.readFile(
            path.resolve(file.directory, file.base),
            'utf8',
            (err, contents) => {
                if (err) {
                    state.error = err;
                } else {
                    state.currentFile = Object.assign({}, file, { contents });
                }

                emitter.emit('render');
                return state;
            }
        );
    });
}
