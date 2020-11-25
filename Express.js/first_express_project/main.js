const homeController = require('./controllers/homeController');
const port = 3000,
  express = require('express'),
  app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, Universe!');
//   console.log(req.params);
//   console.log(req.body);
//   console.log(req.url);
//   console.log(req.query);
// });

app.use(
  express.urlencoded({
    extended: false
  })
);

// app.use((req, res, next) => {
//   res.send(`Request made to ${req.url}`);
//   next();
// });
app.use(homeController.reqLogging);

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send('POST Successful!');
});
// app.get('/items/:vegetable', (req, res) => {
//   let veg = req.params.vegetable;
//   res.send(`This is the page for ${veg}`);
// });
app.get('/items/:vegegable', homeController.sendReqParam);

app.post('/contact', (req, res) => {
  res.send('Contact information submitted successfully.');
});

app.listen(port, () => {
  console.log('Your routes will be running on http://localhost:3000');
});
