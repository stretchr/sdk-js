/*

  Stretchr Test Transporter

  Include this file in your project if you want to use the test transporter.  The test transporter will let you pre-define
  responses and then return them whenever a request is made against the system.

  You also have access to the original requests that were made.  Learn more in the docs.

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
Stretchr.TestTransporter = function() {
  this.requests = [];
  this.responses = [];

  this.makeRequest = function(request, options) {
    this.requests.push(arguments);
    response = new Stretchr.Response(request.client, this.responses.shift(), options);
  }
}

/**
 * Stubbed responses
 * gives you a few stubbed responses to expect from Stretchr for a given API version
 */

Stretchr.V1_1 = Stretchr.V1_1 || {};
Stretchr.V1_1.Stubs = {
  "get_single" : {
    "~data":{
        "field":"value"
    },
    "~status": 200
  },
  "get_multiple": {
    "~data":{
      "~count":4,
      "~items":[
        {"name":"Mat","~id":"id-here"},
        {"name":"Laurie","~id":"id-here"},
        {"name":"Steve","~id":"id-here"},
        {"name":"Chi","~id":"id-here"}
      ],
      "~total": 155563
    },
    "~status":200
  },

  "not_found" : {
    "~status": 404,
    "~errors": [{"~message":"one"}, {"~message":"two"}]
  },

  "changes" : {
    "~changes":
      {
        "~created":1,
        "~deltas":[{"~id":"asdf"}]
      },
    "~status":201
    }
}
