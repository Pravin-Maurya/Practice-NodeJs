const fs = require('fs');
const http = require('http');

const server= http.createServer();

server.on('request', (req, res) => {
    // reading without streaming
    // fs.readFile('input.txt', 'utf8', (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    // reading with streaming
    // const rstream = fs.createReadStream('input.txt')

    // rstream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // });
    // rstream.on('end', () => res.end());

    // rstream.on('error', (err) =>{
    //      console.error(err)
    //      res.end('file not found')
    //     });


    // 3 way streaming
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);

});

server.listen(5000, (err, result) => {
    console.log('Listening on port: 5000')
})