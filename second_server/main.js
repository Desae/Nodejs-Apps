const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const app = http.createServer();

const getJSONstring = obj => {
  return JSON.stringify(obj, null, 2);
};

// app.on('request', (req, res) => {
//   res.writeHead(httpStatus.OK, {
//     'Content-Type': 'text/html'
//   });

//   let responseMessage = '<h1>This will show on the screen.</h1>';
//   res.end(responseMessage);
//   console.log(`Method ${getJSONstring(req.method)}`);
//   console.log(req.url);
//   console.log(req.headers);
// });

app.on('request', (req, res) => {
  let body = [];
  req.on('data', bodyData => {
    body.push(bodyData);
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(`Request Body Contents: ${body}`);
  });
  console.log(`Method ${getJSONstring(req.method)}`);
  console.log(`URL ${getJSONstring(req.url)}`);
  console.log(`Header ${getJSONstring(req.headers)}`);

  res.writeHead(httpStatus.OK, {
    'Content-Type': 'text/html'
  });

  let responseMessage = '<h1>This will show on the screen.</h1>';
  res.end(responseMessage);
});

app.listen(port);
console.log(`We have a server running on http://localhost:${port}`);
