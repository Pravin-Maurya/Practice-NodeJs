
const path = require('path');
const express = require('express')
const app = express()
const requests = require('requests');
const port = 8000;

// console.log(path.join(__dirname, '../public'));
const staticPath = path.join(__dirname, '../public')

// built in middleware
app.use(express.static(staticPath));

// app.get('/', (req, res)=> {
//   res.send("<h1>Hello World I am Pravin Maurya</h1>")
// });
app.get('/about', (req, res)=> {
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=5d48d4ea45fdf322c51a7b1db9adeb43`)
    .on('data', (chunk) => {
    const objPasrseData = JSON.parse(chunk);
    const arrData = [objPasrseData];
    // console.log(arrData);
    console.log(`City name is ${arrData[0].name} and the temp is  ${arrData[0].main.temp}K`)

    // const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join(' ');
    res.write(`${arrData[0].name}`);
    // console.log(realTimeData);
    })
    .on('end', (err) => {
    if (err) return console.log('connection closed due to errors', err);
    res.end();
    });
  });

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