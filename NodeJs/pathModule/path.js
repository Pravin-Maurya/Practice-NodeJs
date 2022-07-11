const path = require('path');

// console.log(path.dirname("C:/Users/pravin maurya/Desktop/Git/Node/Practice/pathModule/path.js"));

// console.log(path.extname("C:/Users/pravin maurya/Desktop/Git/Node/Practice/pathModule/path.js"));

// console.log(path.basename("C:/Users/pravin maurya/Desktop/Git/Node/Practice/pathModule/path.js"));

console.log(path.parse("C:/Users/pravin maurya/Desktop/Git/Node/Practice/pathModule/path.js"));

const myPath = path.parse("C:/Users/pravin maurya/Desktop/Git/Node/Practice/pathModule/path.js");

console.log(myPath.name);
console.log(myPath.base);