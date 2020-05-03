const fs = require("fs")
const chalk = require("chalk")

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse("Your notes:\n"))
  notes.forEach(note => {
  console.log('Title: '+note.title)
  })
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => title === note.title)
  if (!duplicateNote) {
    notes.push({
      title: title,
      author: body,
    })
    saveNotes(notes)
    console.log("New note added")
  } else {
    console.log("New title already taken!")
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const foundNote = notes.find((note) => title === note.title)
  if (foundNote) {
    console.log(chalk.inverse("Note found!"))
    console.log('Title: '+foundNote.title)
    console.log('Body: '+foundNote.body)
  } else {
    console.log(chalk.red.inverse("No note found with that title!"))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => title !== note.title)
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse("No note found!"))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json")
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
}
