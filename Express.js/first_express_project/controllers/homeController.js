exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.reqLogging = (req, res, next) => {
  res.send(`Request made to ${req.url}`);
  next();
};
