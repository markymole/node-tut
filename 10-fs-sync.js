// destructured
const {readFileSync, writeFileSync} = require('fs')
// not destructured
const fs = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

fs.writeFileSync(
    './content/result-sync.txt', // path
    `Here is the content : ${first}, ${second}`, // content
    {flag: 'a'} // append function
)

// console.log(first, second)

console.log('done with the task')
console.log('starting the next  one')