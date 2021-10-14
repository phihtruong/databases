var db = require('../db');
db = db.db;

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    var sql = 'SELECT * FROM messages';
    // return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        console.log('getAll messages from db...');
        callback(null, results);
        // return results;
      }
    });
    // });
    // .then((results) => {
    // console.log('getAll messages from db...', results);
    //   if (err) {
    //     throw err;
    //   } else {
    //     resolve(results);
    //   }
    // });

  // .catch(err => { if (err) { console.log('fail to getAll message from db...'); } });
  },
  // a function which can be used to insert a message into the database
  create: function (post) {
    // post = { username: 'sdf', message: 'asdfaf', roomname: 'lobby'};
    // console.log('here', post);
    var sql = 'INSERT INTO messages SET ?';
    db.query(sql, post, (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log('posting message to db...');
        return results;
      }
    });
  }
};
// console.log(db);
// module.exports.getAll();
// module.exports.create();
//db. query(sql) passing in sql, then console.log, catch

