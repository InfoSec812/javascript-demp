// var Vertx = require("vertx-js/vertx");
// var vertx = Vertx.vertx();

var httpServer = vertx.createHttpServer().requestHandler(function(req) {
  req.response().end("Hello World!".match("/World/"));
}).listen(11980);
