const fs = require('fs');

// const readsync = fs.readFileSync('read.txt', 'utf-8')
// console.log(readsync)
// console.log('after reading')


const data = fs.readFile('read.txt', 'utf-8', (err, data)=>{
    console.log(data)
});

console.log('after reading');