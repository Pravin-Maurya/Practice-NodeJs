const fs = require('fs');


fs.writeFile('read.txt', 'today is a great day',(err)=>{
    console.log("file is created successfully")
    console.log(err);
});