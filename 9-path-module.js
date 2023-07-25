// path module
const path = require('path')

console.log(path.sep);

// joins path, normalize path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// shows base file
const base  = path.basename(filePath);
console.log(base)

// shows absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)