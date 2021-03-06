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

/** @module vertx-js/net_socket_stream */
var utils = require('vertx-js/util/utils');
var ReadStream = require('vertx-js/read_stream');
var NetSocket = require('vertx-js/net_socket');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JNetSocketStream = io.vertx.core.net.NetSocketStream;

/**

 @class
*/
var NetSocketStream = function(j_val) {

  var j_netSocketStream = j_val;
  var that = this;
  ReadStream.call(this, j_val);

  /**

   @public
   @param handler {function} 
   @return {NetSocketStream}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_netSocketStream["exceptionHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {NetSocketStream}
   */
  this.handler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_netSocketStream["handler(io.vertx.core.Handler)"](function(jVal) {
      handler(new NetSocket(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {NetSocketStream}
   */
  this.pause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_netSocketStream["pause()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {NetSocketStream}
   */
  this.resume = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_netSocketStream["resume()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param endHandler {function} 
   @return {NetSocketStream}
   */
  this.endHandler = function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_netSocketStream["endHandler(io.vertx.core.Handler)"](endHandler);
      return that;
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_netSocketStream;
};

// We export the Constructor function
module.exports = NetSocketStream;