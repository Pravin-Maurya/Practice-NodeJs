
const path = require('path');
const express = require('express')
const app = express()
const port = 8000;

// console.log(path.join(__dirname, '../public'));
const staticPath = path.join(__dirname, '../public')

// built in middleware
app.use(express.static(staticPath));

// app.get('/', (req, res)=> {
//   res.send("<h1>Hello World I am Pravin Maurya</h1>")
// });
// app.get('/about', (req, res)=> {
//     res.send('welcome to my about page')
//   });

//   app.get('/contact*text', (req, res)=> {
//     res.status(200).json([{
//         id:1,
//         name:'pravin',
//     },
//     {
//         id:2,
//         lastName: 'Maurya',
//     }
// ])
//   });

//   app.get('/login', (req, res)=> {
//     res.send("login page")
//   });

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})