const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

//costomise yargs version
yargs.version("1.1.0");

//add, remove, read, list

//create add command
yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Write a note",
      demandOption: true,
      type: "string",
    },
  },
  handler (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler (argv) {
    notes.removeNote(argv.title);
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler () {
    notes.listNotes();
  },
});

yargs.parse();
// const add = require("./utils");

// const sum = add(4, -2);

// console.log(sum);
