const http = require('http');
const fs = require('fs');
var requests = require('requests');

const homeFile = fs.readFileSync("Home.html", "utf8");

const replaceVal=(tempval, orgval)=>{
    let temperature = tempval.replace("{%tempval%}", orgval.main.temp)
    temperature = temperature.replace("{%tempval%}", orgval.main.temp)
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min)
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max)
    temperature = temperature.replace("{%location%}", orgval.name)
    temperature = temperature.replace("{%country%}", orgval.sys.country)
    temperature = temperature.replace("{%tempStatus%}", orgval.weather[0].main)
    
    return temperature
}
const server = http.createServer((req, res) => {
    if(req.url =='/'){
        requests(
            'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5d48d4ea45fdf322c51a7b1db9adeb43')
.on('data', (chunk) => {
    const objPasrseData = JSON.parse(chunk);
    const arrData = [objPasrseData];
    console.log(arrData);

    const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join(' ');
    res.write(realTimeData);
    // console.log(realTimeData);
})
.on('end', (err) => {
  if (err) return console.log('connection closed due to errors', err);
    res.end();
});
        
    }
})
server.listen(8000,"127.0.0.1");
