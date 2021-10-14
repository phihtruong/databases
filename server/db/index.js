var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


//mysql create connection
//connection to db

//make a function returning a promise.
// export the function.

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'chatterbox',
  database: 'chat'
});

// var Users = {};
// var Messages = {};
// connection.connect((err, data) => {
//   if (err) {
//     throw console.error(‘error: ’ + err.message);
//   } else {
//     console.log(‘Connected to the MySQL.server’);
//     connection.query(‘SELECT user_name FROM users’, (err, result, fields) => {
//       if (err) {
//         throw err;
//       }
//       Users[0] = result;
//     });
//   }
// });

exports.query = connection.connect(queryStr, (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results, fields) => {
      if (err) {
        throw 'Fail to connect to DB.';
        reject(err);
      } else {
        console.log('Connect to DB, results = ', results);
        resolve(results);
      }
    });
  });
});
