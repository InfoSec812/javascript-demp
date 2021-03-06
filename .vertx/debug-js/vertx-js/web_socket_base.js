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

/** @module vertx-js/web_socket_base */
var utils = require('vertx-js/util/utils');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');
var WebSocketFrame = require('vertx-js/web_socket_frame');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JWebSocketBase = io.vertx.core.http.WebSocketBase;

/**
 Base WebSocket implementation.
 <p>
 @class
*/
var WebSocketBase = function(j_val) {

  var j_webSocketBase = j_val;
  var that = this;
  ReadStream.call(this, j_val);
  WriteStream.call(this, j_val);

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link WebSocketBase#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketBase["writeQueueFull()"]();
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_webSocketBase["exceptionHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.handler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_webSocketBase["handler(io.vertx.core.Handler)"](function(jVal) {
      handler(new Buffer(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {WebSocketBase}
   */
  this.pause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_webSocketBase["pause()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {WebSocketBase}
   */
  this.resume = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_webSocketBase["resume()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param endHandler {function} 
   @return {WebSocketBase}
   */
  this.endHandler = function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_webSocketBase["endHandler(io.vertx.core.Handler)"](endHandler);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param data {Buffer} 
   @return {WebSocketBase}
   */
  this.write = function(data) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["write(io.vertx.core.buffer.Buffer)"](data._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param maxSize {number} 
   @return {WebSocketBase}
   */
  this.setWriteQueueMaxSize = function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_webSocketBase["setWriteQueueMaxSize(int)"](maxSize);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.drainHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_webSocketBase["drainHandler(io.vertx.core.Handler)"](handler);
      return that;
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
      return j_webSocketBase["binaryHandlerID()"]();
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
      return j_webSocketBase["textHandlerID()"]();
    } else utils.invalidArgs();
  };

  /**
   Write a WebSocket frame to the connection

   @public
   @param frame {WebSocketFrame} the frame to write 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.writeFrame = function(frame) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["writeFrame(io.vertx.core.http.WebSocketFrame)"](frame._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**
   Writes a (potentially large) piece of data to the connection. This data might be written as multiple frames
   if it exceeds the maximum WebSocket frame size.

   @public
   @param data {Buffer} the data to write 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.writeMessage = function(data) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["writeMessage(io.vertx.core.buffer.Buffer)"](data._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**
   Set a close handler. This will be called when the WebSocket is closed.

   @public
   @param handler {function} the handler 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.closeHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_webSocketBase["closeHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else utils.invalidArgs();
  };

  /**
   Set a frame handler on the connection. This handler will be called when frames are read on the connection.

   @public
   @param handler {function} the handler 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.frameHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_webSocketBase["frameHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(new WebSocketFrame(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**
   Close the WebSocket.

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_webSocketBase["close()"]();
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
        that.cachedremoteAddress = new SocketAddress(j_webSocketBase["remoteAddress()"]());
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
        that.cachedlocalAddress = new SocketAddress(j_webSocketBase["localAddress()"]());
      }
      return that.cachedlocalAddress;
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_webSocketBase;
};

// We export the Constructor function
module.exports = WebSocketBase;