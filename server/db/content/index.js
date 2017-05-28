var Sequelize = require('sequelize');
var requireDir = require('require-dir');
var config = require('../../src/config/config');

module.exports = function initialize() {
  var sequelize = new Sequelize(config.db.contentDB.dbname, config.db.contentDB.username, config.db.contentDB.password, {
    host: config.db.contentDB.host,
    port: config.db.contentDB.port,
    storage: config.db.contentDB.storage
  });

  var models = requireDir('./models', { recurse: false });
  var db = { orm: Sequelize, connection: sequelize, models: {} };

  Object.keys(models).forEach(function(_key) {
    if (typeof models[_key] === 'function') {
      var model = models[_key](sequelize, Sequelize);
      db.models[model.name] = model;
    }
  });

  // relations/associations
  models.Product.hasOne(models.ProductName, { foreignKey: 'partNum', as: 'name' });
  models.Product.hasOne(models.ProductDescription, { foreignKey: 'partNum', as: 'description' });
  models.Product.hasOne(models.ProductPrice, { foreignKey: 'partNum', as: 'price' });
  models.Product.hasOne(models.ProductCategory, { foreignKey: 'partNum', as: 'category' });

  models.Flyer.hasMany(models.FlyerProduct, { foreignKey: 'flyerId', as: 'products' });
  models.FlyerProduct.belongsTo(models.Flyer, { foreignKey: 'flyerId' });
  models.Flyer.hasOne(models.CompanyInfoUpdate, { foreignKey: 'flyerId' });
  models.CompanyInfoUpdate.belongsTo(models.Flyer, { foreignKey: 'flyerId' });

  return db;
}
