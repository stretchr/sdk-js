/*

  Stretchr JavaScript SDK v1.4.0
  /api/v1.1

  by Ryan Quinn and Mat Ryer
  Copyright (c) 2014 Stretchr, Inc.

  Please consider promoting this project if you find it useful.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
  to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies
  or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
  FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
  DEALINGS IN THE SOFTWARE.

*/

var Stretchr = Stretchr || {};

/**
 * Creates a new Stretchr client that can be used for making requests against Stretchr
 * @param {String} acc The Stretchr account to use
 * @param {String} proj The Stretchr project to use
 * @param {String} key The Stretchr key to use
 * @param {Object} options Set remaining options for the client
 */
Stretchr.Client = function(acc, proj, key, options) {
  var options = options || {};
  this.account = acc;
  this.project = proj;
  this.key = key;
}

/**
 * Takes in a path and returns a Request object that is used for the remainder of the request
 * @param {String} path The path of the resource within Stretchr
 */
Stretchr.Client.prototype.at = function(path) {
 return new Stretchr.Request(path, this);
}



/**
 * Creates a new Stretchr request object that gets used to build up a request and execute it
 * @param {String} path The path to the resource(s) within Stretchr
 * @param {Object} client The original client that initiated the request
 */
Stretchr.Request = function(path, client) {
  this.path = path;
  this.client = client;
  this._params = new Stretchr.Bag();
}

/**
 * Adds a param to the request object
 */
Stretchr.Request.prototype.params = function(key, value) {
  this._params.data.apply(this._params, arguments);
  return this;
}

/**
 * Generate a url for the request object
 * Relies heavily on information from the client object
 */
Stretchr.Request.prototype.url = function() {
  var baseUrl = [this.client.protocol, "://", this.client.account, ".", this.client.hostName, "/api/v", this.client.apiVersion, "/", this.client.project, "/", this.path].join(""),
    paramString = this._params.queryString();
   if (paramString) {
     baseUrl += "?" + paramString;
   }
  return baseUrl;
}

/**
 * Creates a new Stretchr bag object, which is used for handling query params and aggregations
 * @param {Object} options Set the options for the bag
 */
Stretchr.Bag = function(options) {
  var options = options || {},
    _data = {};

  //return a value
  function get(key) {
    return _data[key];
  }

  //set a value, creating an array if it doesn't already exist
  function set(key, value) {
    //turn value into an array
    if (!(typeof value === "object" && typeof value.length !== "undefined")) {
      value = [value]
    }

    if (typeof _data[key] === "object" && typeof _data[key].length !== "undefined") {
      // already an array
      _data[key] = _data[key].concat(value)
    } else if (typeof _data[key] === "undefined") {
      // no key
      _data[key] = value;
    }
  }

  return {
    /**
     * Let's you set or get data based on the params sent.  Takes a variety of inputs:
     * ---------
     * bag.data("key", "value") - adds "value" to the data["key"] array
     * bag.data({key: "value", key2: ["value1", "value2"]}) - stores the entire object
     * bag.data("key") - returns the data["key"] value
     * bag.data() - returns the entire data object
     */
    data: function(key, value) {
      if (arguments.length == 0) {
        // data()
        return _data;
      }

      if (typeof key != "object" && typeof value != "undefined") {
        // normal setter - data(keystring, value)
        set(key, value);

      } else if (typeof key != "object") {

        // getter with key - data(keystring)
        return get(key);

      } else {

        // set the all the items in the object - data(newData)
        for (var k in key) {
          set(k, key[k]);
        }

      }
    },

    queryString: function() {
      var items = [];
      for (var key in _data)
        for (var i = 0; i < _data[key].length; i++) {
          val = _data[key][i]
          items.push(encodeURIComponent(key) + "=" + encodeURIComponent(val));
        }
      return items.join("&");
    }
  }
}
