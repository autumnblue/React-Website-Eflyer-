var Sequelize = require('sequelize');
var requireDir = require('require-dir');
var config = require('../../src/config/config');

module.exports = function initialize() {
  var sequelize = new Sequelize(config.db.recordsDB.dbname, config.db.recordsDB.username, config.db.recordsDB.password, {
    host: config.db.recordsDB.host,
    port: config.db.recordsDB.port,
    storage: config.db.recordsDB.storage
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
