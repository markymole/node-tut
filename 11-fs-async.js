// destructured async
const {readFile, writeFile} = require('fs')
// not destructured fs
const fs = require('fs')

console.log('start')
// first approach
// async                            // fallback
fs.readFile('./content/first.txt', 'utf-8' ,(err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the content : ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})

console.log('starting next task')

// you will get this if you dont provide the format
{/* <Buffer 48 65 6c 6c 6f 20 46 69 72 73 74 20 54 65 78 74> */}