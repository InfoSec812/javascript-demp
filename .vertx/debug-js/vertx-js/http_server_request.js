/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-js/http_server_request */
var utils = require('vertx-js/util/utils');
var ServerWebSocket = require('vertx-js/server_web_socket');
var HttpServerFileUpload = require('vertx-js/http_server_file_upload');
var Buffer = require('vertx-js/buffer');
var HttpServerResponse = require('vertx-js/http_server_response');
var ReadStream = require('vertx-js/read_stream');
var MultiMap = require('vertx-js/multi_map');
var SocketAddress = require('vertx-js/socket_address');
var NetSocket = require('vertx-js/net_socket');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpServerRequest = io.vertx.core.http.HttpServerRequest;

/**
 Represents a server-side HTTP request.
 <p>
 Instances are created for each request and passed to the user via a handler.
 <p>
 @class
*/
var HttpServerRequest = function(j_val) {

  var j_httpServerRequest = j_val;
  var that = this;
  ReadStream.call(this, j_val);

  /**

   @public
   @param handler {function} 
   @return {HttpServerRequest}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["exceptionHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {HttpServerRequest}
   */
  this.handler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["handler(io.vertx.core.Handler)"](function(jVal) {
      handler(new Buffer(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {HttpServerRequest}
   */
  this.pause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerRequest["pause()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {HttpServerRequest}
   */
  this.resume = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerRequest["resume()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param endHandler {function} 
   @return {HttpServerRequest}
   */
  this.endHandler = function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["endHandler(io.vertx.core.Handler)"](endHandler);
      return that;
    } else utils.invalidArgs();
  };

  /**
   @return the HTTP version of the request

   @public

   @return {Object}
   */
  this.version = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return (j_httpServerRequest["version()"]()).toString();
    } else utils.invalidArgs();
  };

  /**
   @return the HTTP method for the request.

   @public

   @return {Object}
   */
  this.method = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return (j_httpServerRequest["method()"]()).toString();
    } else utils.invalidArgs();
  };

  /**
   @return the URI of the request. This is usually a relative URI

   @public

   @return {string}
   */
  this.uri = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["uri()"]();
    } else utils.invalidArgs();
  };

  /**
   @return The path part of the uri. For example /somepath/somemorepath/someresource.foo

   @public

   @return {string}
   */
  this.path = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["path()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the query part of the uri. For example someparam=32&amp;someotherparam=x

   @public

   @return {string}
   */
  this.query = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["query()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the response. Each instance of this class has an {@link HttpServerResponse} instance attached to it. This is used
   to send the response back to the client.

   @public

   @return {HttpServerResponse}
   */
  this.response = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedresponse == null) {
        that.cachedresponse = new HttpServerResponse(j_httpServerRequest["response()"]());
      }
      return that.cachedresponse;
    } else utils.invalidArgs();
  };

  /**
   @return the headers in the request.

   @public

   @return {MultiMap}
   */
  this.headers = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedheaders == null) {
        that.cachedheaders = new MultiMap(j_httpServerRequest["headers()"]());
      }
      return that.cachedheaders;
    } else utils.invalidArgs();
  };

  /**
   Return the first header value with the specified name

   @public
   @param headerName {string} the header name 
   @return {string} the header value
   */
  this.getHeader = function(headerName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_httpServerRequest["getHeader(java.lang.String)"](headerName);
    } else utils.invalidArgs();
  };

  /**
   @return the query parameters in the request

   @public

   @return {MultiMap}
   */
  this.params = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedparams == null) {
        that.cachedparams = new MultiMap(j_httpServerRequest["params()"]());
      }
      return that.cachedparams;
    } else utils.invalidArgs();
  };

  /**
   Return the first param value with the specified name

   @public
   @param paramName {string} the param name 
   @return {string} the param value
   */
  this.getParam = function(paramName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_httpServerRequest["getParam(java.lang.String)"](paramName);
    } else utils.invalidArgs();
  };

  /**
   @return the remote (client side) address of the request

   @public

   @return {SocketAddress}
   */
  this.remoteAddress = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedremoteAddress == null) {
        that.cachedremoteAddress = new SocketAddress(j_httpServerRequest["remoteAddress()"]());
      }
      return that.cachedremoteAddress;
    } else utils.invalidArgs();
  };

  /**
   @return the local (server side) address of the server that handles the request

   @public

   @return {SocketAddress}
   */
  this.localAddress = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedlocalAddress == null) {
        that.cachedlocalAddress = new SocketAddress(j_httpServerRequest["localAddress()"]());
      }
      return that.cachedlocalAddress;
    } else utils.invalidArgs();
  };

  /**
   @return the absolute URI corresponding to the the HTTP request

   @public

   @return {string}
   */
  this.absoluteURI = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["absoluteURI()"]();
    } else utils.invalidArgs();
  };

  /**
   Convenience method for receiving the entire request body in one piece.
   <p>
   This saves the user having to manually setting a data and end handler and append the chunks of the body until
   the whole body received. Don't use this if your request body is large - you could potentially run out of RAM.

   @public
   @param bodyHandler {function} This handler will be called after all the body has been received 
   @return {HttpServerRequest}
   */
  this.bodyHandler = function(bodyHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["bodyHandler(io.vertx.core.Handler)"](function(jVal) {
      bodyHandler(new Buffer(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**
   Get a net socket for the underlying connection of this request.
   <p>
   USE THIS WITH CAUTION!
   <p>
   Once you have called this method, you must handle writing to the connection yourself using the net socket,
   the server request instance will no longer be usable as normal.
   Writing to the socket directly if you don't know what you're doing can easily break the HTTP protocol.

   @public

   @return {NetSocket} the net socket
   */
  this.netSocket = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachednetSocket == null) {
        that.cachednetSocket = new NetSocket(j_httpServerRequest["netSocket()"]());
      }
      return that.cachednetSocket;
    } else utils.invalidArgs();
  };

  /**
   Call this with true if you are expecting a multi-part body to be submitted in the request.
   This must be called before the body of the request has been received

   @public
   @param expect {boolean} true - if you are expecting a multi-part body 
   @return {HttpServerRequest} a reference to this, so the API can be used fluently
   */
  this.setExpectMultipart = function(expect) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_httpServerRequest["setExpectMultipart(boolean)"](expect);
      return that;
    } else utils.invalidArgs();
  };

  /**
   @return  true if we are expecting a multi-part body for this request. See {@link HttpServerRequest#setExpectMultipart}.

   @public

   @return {boolean}
   */
  this.isExpectMultipart = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerRequest["isExpectMultipart()"]();
    } else utils.invalidArgs();
  };

  /**
   Set an upload handler. The handler will get notified once a new file upload was received to allow you to deal
   with the file upload.

   @public
   @param uploadHandler {function} 
   @return {HttpServerRequest} a reference to this, so the API can be used fluently
   */
  this.uploadHandler = function(uploadHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpServerRequest["uploadHandler(io.vertx.core.Handler)"](function(jVal) {
      uploadHandler(new HttpServerFileUpload(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**
   Returns a map of all form attributes in the request.
   <p>
   Be aware that the attributes will only be available after the whole body has been received, i.e. after
   the request end handler has been called.
   <p>
   {@link HttpServerRequest#setExpectMultipart} must be called first before trying to get the form attributes.

   @public

   @return {MultiMap} the form attributes
   */
  this.formAttributes = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedformAttributes == null) {
        that.cachedformAttributes = new MultiMap(j_httpServerRequest["formAttributes()"]());
      }
      return that.cachedformAttributes;
    } else utils.invalidArgs();
  };

  /**
   Return the first form attribute value with the specified name

   @public
   @param attributeName {string} the attribute name 
   @return {string} the attribute value
   */
  this.getFormAttribute = function(attributeName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_httpServerRequest["getFormAttribute(java.lang.String)"](attributeName);
    } else utils.invalidArgs();
  };

  /**
   Upgrade the connection to a WebSocket connection.
   <p>
   This is an alternative way of handling WebSockets and can only be used if no websocket handlers are set on the
   Http server, and can only be used during the upgrade request during the WebSocket handshake.

   @public

   @return {ServerWebSocket} the WebSocket
   */
  this.upgrade = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new ServerWebSocket(j_httpServerRequest["upgrade()"]());
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpServerRequest;
};

// We export the Constructor function
module.exports = HttpServerRequest;