var errorHelper = require('../helpers/error-helper');

exports.search = function (req, res, next) {

  var models = req.db.content.models;
  var where = {};
  if (req.query.supplierId) {
    where.supplierId = req.query.supplierId;
  }
  if (req.query.partNum) {
    where.partNum = {$like: '%' + req.query.partNum + '%'};
  }
  models.Product.findAll({
    where: where,
    include: [
      {model: models.ProductName, as: 'name'},
      {model: models.ProductDescription, as: 'description'},
      {model: models.ProductPrice, as: 'price'},
      {model: models.ProductCategory, as: 'category'}
    ]
  })
  .then(function (products) {
    if (!products) {
      return errorHelper.handleError(res, 'Unable to find products', 404);
    }
    res.json(products);
  })
  .catch(function (err) {
    return errorHelper.handleError(res, err);
  });

};
