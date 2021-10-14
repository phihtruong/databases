var models = require('../models/index.js');

module.exports = {
  get: function (req, res) {
    // get messages from messages.getAll() in models
    // reponse.end with messages data

  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};

//////////
// create routes

//get
sendResponse(response, { results: messages }, {}, 200);

exports.send404 = function(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.end('Not Found');
};

exports.sendResponse = function(response, payload, headers = {}, status = 200) {
  if (typeof payload === 'object' && payload !== null) {
    Object.assign(headers, {'Content-Type': 'applicaition/json'});
    payload = JSON.stringify(payload);
  }
  response.writeHead(status, headers);
  response.end(payload);
};


//post
collectData(request, function(message) {
  message.objectID = messages.length;
  messages.push(message);
  sendResponse(response, message, {}, 201);
});

exports.collectData = function(request, callback) {
  let data = '';
  request.on('data', function(chunk) {
    data += chunk.toString();
  });
  request.on('end', function() {
    const message = JSON.parse(data);
    callback(message);
  });
};