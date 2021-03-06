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

/** @module vertx-js/server_web_socket */
var utils = require('vertx-js/util/utils');
var WebSocketBase = require('vertx-js/web_socket_base');
var Buffer = require('vertx-js/buffer');
var MultiMap = require('vertx-js/multi_map');
var WebSocketFrame = require('vertx-js/web_socket_frame');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JServerWebSocket = io.vertx.core.http.ServerWebSocket;

/**
 Represents a server side WebSocket.
 <p>
 @class
*/
var ServerWebSocket = function(j_val) {

  var j_serverWebSocket = j_val;
  var that = this;
  WebSocketBase.call(this, j_val);

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link ServerWebSocket#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_serverWebSocket["writeQueueFull()"]();
    } else utils.invalidArgs();
  };

  /**
   When a <code>Websocket</code> is created it automatically registers an event handler with the event bus - the ID of that
   handler is given by this method.
   <p>
   Given this ID, a different event loop can send a binary frame to that event handler using the event bus and
   that buffer will be received by this instance in its own event loop and written to the underlying connection. This
   allows you to write data to other WebSockets which are owned by different event loops.

   @public

   @return {string} the binary handler id
   */
  this.binaryHandlerID = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_serverWebSocket["binaryHandlerID()"]();
    } else utils.invalidArgs();
  };

  /**
   When a <code>Websocket</code> is created it automatically registers an event handler with the eventbus, the ID of that
   handler is given by <code>textHandlerID</code>.
   <p>
   Given this ID, a different event loop can send a text frame to that event handler using the event bus and
   that buffer will be received by this instance in its own event loop and written to the underlying connection. This
   allows you to write data to other WebSockets which are owned by different event loops.

   @public

   @return {string}
   */
  this.textHandlerID = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_serverWebSocket["textHandlerID()"]();
    } else utils.invalidArgs();
  };

  /**
   Close the WebSocket.

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_serverWebSocket["close()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the remote address for this socket

   @public

   @return {SocketAddress}
   */
  this.remoteAddress = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedremoteAddress == null) {
        that.cachedremoteAddress = new SocketAddress(j_serverWebSocket["remoteAddress()"]());
      }
      return that.cachedremoteAddress;
    } else utils.invalidArgs();
  };

  /**
   @return the local address for this socket

   @public

   @return {SocketAddress}
   */
  this.localAddress = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedlocalAddress == null) {
        that.cachedlocalAddress = new SocketAddress(j_serverWebSocket["localAddress()"]());
      }
      return that.cachedlocalAddress;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {ServerWebSocket}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_serverWebSocket["exceptionHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {ServerWebSocket}
   */
  this.handler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_serverWebSocket["handler(io.vertx.core.Handler)"](function(jVal) {
      handler(new Buffer(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {ServerWebSocket}
   */
  this.pause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_serverWebSocket["pause()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {ServerWebSocket}
   */
  this.resume = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_serverWebSocket["resume()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param endHandler {function} 
   @return {ServerWebSocket}
   */
  this.endHandler = function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_serverWebSocket["endHandler(io.vertx.core.Handler)"](endHandler);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param data {Buffer} 
   @return {ServerWebSocket}
   */
  this.write = function(data) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_serverWebSocket["write(io.vertx.core.buffer.Buffer)"](data._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param maxSize {number} 
   @return {ServerWebSocket}
   */
  this.setWriteQueueMaxSize = function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_serverWebSocket["setWriteQueueMaxSize(int)"](maxSize);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {ServerWebSocket}
   */
  this.drainHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_serverWebSocket["drainHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param frame {WebSocketFrame} 
   @return {ServerWebSocket}
   */
  this.writeFrame = function(frame) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_serverWebSocket["writeFrame(io.vertx.core.http.WebSocketFrame)"](frame._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param data {Buffer} 
   @return {ServerWebSocket}
   */
  this.writeMessage = function(data) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_serverWebSocket["writeMessage(io.vertx.core.buffer.Buffer)"](data._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {ServerWebSocket}
   */
  this.closeHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_serverWebSocket["closeHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {ServerWebSocket}
   */
  this.frameHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_serverWebSocket["frameHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(new WebSocketFrame(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {string}
   */
  this.uri = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_serverWebSocket["uri()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the WebSocket handshake path.

   @public

   @return {string}
   */
  this.path = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_serverWebSocket["path()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the WebSocket handshake query string.

   @public

   @return {string}
   */
  this.query = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_serverWebSocket["query()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the headers in the WebSocket handshake

   @public

   @return {MultiMap}
   */
  this.headers = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedheaders == null) {
        that.cachedheaders = new MultiMap(j_serverWebSocket["headers()"]());
      }
      return that.cachedheaders;
    } else utils.invalidArgs();
  };

  /**
   Reject the WebSocket.
   <p>
   Calling this method from the websocket handler when it is first passed to you gives you the opportunity to reject
   the websocket, which will cause the websocket handshake to fail by returning
   a 404 response code.
   <p>
   You might use this method, if for example you only want to accept WebSockets with a particular path.

   @public

   */
  this.reject = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_serverWebSocket["reject()"]();
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_serverWebSocket;
};

// We export the Constructor function
module.exports = ServerWebSocket;