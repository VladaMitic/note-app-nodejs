const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New notes added!"));
  } else {
    console.log(chalk.red.inverse("note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  // const notesToKeep = notes.filter(function (note) {
  //     return note.title !== title;
  // });
  // saveNotes(notesToKeep);
  const noteIndex = notes.findIndex((note) => note.title === title);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotes(notes);
    console.log(chalk.green.inverse("Note has been removed"));
  } else {
    console.log(chalk.red.inverse("Note with provided title doesnt exis!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.bold.underline.inverse("Your notes:"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const findedNote = notes.find((note) => note.title === title);
  if (!findedNote) {
    console.log(chalk.red.inverse("Unable to find note"));
  } else {
    console.log(
      chalk.green.bold.inverse(findedNote.title) + ": " + findedNote.body
    );
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const bufferNotes = fs.readFileSync("./notes.json");
    const dataJSON = bufferNotes.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
