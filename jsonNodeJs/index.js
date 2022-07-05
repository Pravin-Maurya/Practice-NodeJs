const fs = require('fs');
const bioData = {
    name: 'pravin',
    age: 26,
    channel: "pravin channel",
}

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const originalData = JSON.parse(jsonData);
// console.log(originalData);

// fs.writeFile('jsonData.json', jsonData, (error)=>{
//     console.log(error);
// })
fs.readFile('jsonData.json', 'utf8', (error, data)=>{
    console.log(data)

    const origData = JSON.parse(data);
    console.log(origData);
});