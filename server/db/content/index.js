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

  // TODO: Configure relations/associations

  return db;
}
