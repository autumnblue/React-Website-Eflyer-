exports.search = function (req, res, next) {
  var products = [
    { name: 'Alpha' },
    { name: 'Beta' },
    { name: 'Charlie' },
    { name: 'Delta' }
  ];
  res.json(products);
};
