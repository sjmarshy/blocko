// setCurrentFile takes an emitter and the current file. emits a SET_CURRENT_FILE event
const events = require('../../events');
const { curryN } = require('ramda');

const setCurrentFile = curryN(2, (emit, file) => {
    emit(events.SET_CURRENT_FILE, file);
});

module.exports = setCurrentFile;
