var db = require('../db');
db = db.db;
module.exports = {
  getAll: function (callback) {
    var sql = 'SELECT * FROM users';
    // return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        console.log('getAll users from db...');
        callback(null, results);
        // return results;
      }
    });
    // var sql = 'SELECT * FROM Users';
    // db.query(sql).then((results) => {
    //   console.log('getAll users from db...');
    //   return results;
    // })
    //   .catch(err => { if (err) { console.log('fail to getAll users from db...'); } });

  },
  create: function (post) {
    var sql = 'INSERT INTO Users SET ?';
    db.query(sql, post, (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log('posting user to db...');
        return results;
      }
    });
  }
};
//query from db
// module.exports.getAll();
// module.exports.create();