// Modules Course
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const persons = require('./6-atlernative-flavor')

require('./7-mind-grenade')

console.log(persons)

sayHi(names.peter)
console.log(names)