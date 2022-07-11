const http = require('http');
const { text } = require('stream/consumers');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url==='/'){
        res.end('Hello from Home side')
    }
    else if(req.url==='/about'){
        res.end('Hello from About side')
    }
    else if(req.url==='/contact'){
        res.end('Hello from ContactUs side')
    }else {
        res.writeHead(404, {'content-type':' text/html'});
        res.end('<h1>Error 404. Page Not Found </h1>')
    }
})

server.listen(5000, (err, result) => {
    console.log('Listening on port: 5000')
})