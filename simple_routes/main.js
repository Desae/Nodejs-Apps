const routeResponseMap = {
  '/info': '<h1>Info Page</h1>',
  '/contact': '<h1>Contact Us</h1>',
  '/about': '<h1>Learn More About Us</h1>',
  '/hello': '<h1>Say hello by emailing us here</h1>',
  '/error': '<h1>Sorry, the page you are looking for is not here.</h1>'
};

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');

const app = http
  .createServer((req, res) => {
    res.writeHead(httpStatus.OK, {
      'Content-Type': 'text/html'
    });

    if (routeResponseMap[req.url]) {
      //res.end(routeResponseMap[req.url]);
      setTimeout(() => res.end(routeResponseMap[req.url]), 2000); //intentional delay of server response by 2s
    } else {
      res.end('<h1>Welcome!</h1>');
    }

    // let responseMessage = '<h1>Welcome!</h1>';
    // res.end(responseMessage);
  })
  .listen(port);

console.log(`We have a server running on http://localhost:3000`);
