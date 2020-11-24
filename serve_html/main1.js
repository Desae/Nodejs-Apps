const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');

const fs = require('fs');
// const routeMap = {
//   '/': 'views/index.html'
// };

// const getViewUrl = url => {
//   return `views${url}.html`;
// };

const sendErrorResponse = res => {
  res.writeHead(httpStatus.NOT_FOUND, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>File not found</h1>');
  res.end();
};

// http
//   .createServer((req, res) => {
//     let viewUrl = getViewUrl(req.url);
//     fs.readFile(viewUrl, (error, data) => {
//       if (error) {
//         res.writeHead(httpStatus.NOT_FOUND);
//         res.write('<h1>FILE NOT FOUND</h1>');
//       } else {
//         res.writeHead(httpStatus.OK, {
//           'Content-Type': 'text/html'
//         });
//         res.write(data);
//       }
//       res.end();
//     });
//   })
//   .listen(port);

http
  .createServer((req, res) => {
    let url = req.url;
    if (url.indexOf('.html') !== -1) {
      res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/html'
      });
      customReadFile(`./views${url}`, res);
    } else if (url.indexOf('.js') !== -1) {
      res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/javascript'
      });
      customReadFile(`./public/js${url}`, res);
    } else if (url.indexOf('.css') !== -1) {
      res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/css'
      });
      customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf('.png') !== -1) {
      res.writeHead(httpStatus.OK, {
        'COntent-Type': 'image/png'
      });
      customReadFile(`./public/imgs${url}`, res);
    } else {
      sendErrorResponse(res);
    }
  })
  .listen(port);

console.log(`We have a server running on http://localhost:3000`);

const customReadFile = (file_path, res) => {
  if (fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {
      if (error) {
        console.log(error);
        sendErrorResponse(res);
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    sendErrorResponse(res);
  }
};
