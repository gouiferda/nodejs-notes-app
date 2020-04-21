

const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.0.0')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ', argv.title)
        console.log('Body: ', argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note')
    },
})

yargs.command({
        command: 'read',
        describe: 'Reads a note',
        handler: function () {
            console.log('Reading a note')
        },
})

yargs.command({
        command: 'list',
        describe: 'Lists your notes',
        handler: function () {
            console.log('Listing out all notes')
        },
})

yargs.parse()


/*

const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)
console.log(validator.isEmail('ahahah@kk.de'))
console.log(validator.isURL('kkede'))
console.log(chalk.green('Hello Soufiane'));
const validator = require('validator')

const command = process.argv[2]

switch (command) {
    case 'add':
        console.log('Adding note!')
        break;
    case 'remove':
        console.log('Removing note!')
        break;
}

console.log(process.argv)

*/