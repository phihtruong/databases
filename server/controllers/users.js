var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, dataFromGetAll) => {
      if (err) {
        console.log('fail to get user from db...');
        throw err;
      } else {
        console.log('users data from getAll: ', dataFromGetAll);
        res.writeHead(201);
        res.end(JSON.stringify(dataFromGetAll));
      }
    });
    // models.users.getAll()
    //   .then(results => {
    //     res.writeHead(201);
    //     console.log('retrieved users from db...: ', results);
    //     res.end(results);
    //   })
    //   .catch();

  },
  post: function (req, res) {
    //var post = { username: 'bob'};
    console.log('posting user: ', req.body);
    models.users.create(req.body);
    res.writeHead(202);
    res.end();
  }
};
// module.exports.post();
// module.exports.get();