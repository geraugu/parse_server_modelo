

var _ = require("underscore");

Parse.Cloud.define("hello2", function(request, response) {
  response.success("hello");
});
