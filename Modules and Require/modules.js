const {people, ages} = require('./people');      //    Import a file (When neede to automatically load a file)

console.log(people, ages);      //This file is currently an empty object

const os = require('os');       // Create object frrom predefined OS class

console.log(os.platform(), os.homedir());  // Import details about the OS

