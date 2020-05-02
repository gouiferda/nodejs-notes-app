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

  const duplicateNotes = notes.filter((note) => title == note.title)

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      author: body,
    })
    saveNotes(notes)
    console.log("New note added")
  } else {
    console.log("New title taken!")
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



module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
}
