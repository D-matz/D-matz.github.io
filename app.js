const http = require('http');
const https = require('https');
const key = "RGAPI-6817416a-cd5c-4e62-aabc-294baa7d8b81";
// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    https.get('https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/F3M_RcSGcmasco-lKPiZ3G2RlReTFDY6whTZ7XlBq6x0bQ?queue=420&api_key='+key, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.parse(data).matches[0].champion+"\n"+JSON.parse(data).matches[1].champion+"\n"+JSON.parse(data).matches[2].champion+"\n"+JSON.parse(data).matches[3].champion);
  });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
