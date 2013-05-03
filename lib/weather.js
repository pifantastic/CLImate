
var util = require('util');

var request = require('request');
var API_KEY = '9242bd2ba5bcca86';

var query = function (q, callback) {
  var url = 'http://api.wunderground.com/api/%s/conditions/q/%s.json';
  request({
    uri : util.format(url, API_KEY, q),
    json : true
  }, function (err, response, body) {
    callback(err, body);
  });
};

exports.conditions = function (location, callback) {
  query(location, callback);
};
