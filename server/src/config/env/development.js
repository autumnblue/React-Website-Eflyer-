/* eslint-disable max-len */

module.exports = {

db: {
  contentDB: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    dbname: 'edgegro1_content_data',
    username: 'root',
    password: ''
  },
  recordsDB: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    dbname: 'edgegro1_records',
    username: 'root',
    password: ''
  }
},

log: {
  // logging with Morgan - https://github.com/expressjs/morgan
  // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
  format: 'dev',
  options: {
  }
}

};
