/*

	Stretchr JavaScript SDK - Test support

	This file should be included if you intend to write test-driven code that utilises
	Stretchr.

	Copyright (c) 2012 Mat Ryer and Tyler Bunnell

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

// ensure we have the right file too
if (typeof Stretchr == "undefined") {
	throw "Stretchr: You must include the stretchr.js file as well as stretchr-testing.js"
}

/*
	TestResponse is a test response object that will be returned to callbacks
	if actual code is NOT.
*/
Stretchr.TestResponse = {
	"~s": 200
};

/*
	ResponseDelay is the amount of time to wait before responding.  If zero, calls
	will be made immediately and before returning (recommended for unit testing).
*/
Stretchr.ResponseDelay = 0;

/*
	TestRequest is a test Request object that doesn't actually make any
	real requests.
*/
Stretchr.GetTestRequest = function(session, path){

	r = Stretchr.NewRequest(session, path)

	r.recordRequest = function(){

		this.path = r._path

		this.where = {};

		// remove the :
		for (param in this._filterparams) {
			this.where[param.slice(1, param.length)] = this._filterparams[param]
		}

		this.with = this._params;

		// add to the request array
		this._session.requests.push(this);

		// if there is an onCompleted callback, call it with the next
		// pre-defined response
		if (this.onCompleted) {
			if (this._session.responses.length > 0) {

				if (Stretchr.ResponseDelay > 0) {
					var _this = this
					window.setTimeout(function(){
				  	_this.onCompleted(_this._session.responses.pop())
					}, Stretchr.ResponseDelay);
				} else {
					this.onCompleted(this._session.responses.pop())
				}

			} else {
				// call the callback with the Stretchr.TestResponse
				this.onCompleted(Stretchr.TestResponse)
			}
		}

	}

	r.create = function(callback){
		this.onCompleted = callback;
		this.action = "create";
		this.recordRequest();
		return this;
	}
	r.read = function(callback){
		this.onCompleted = callback;
		this.action = "read";
		this.recordRequest();
		return this;
	}
	r.update = function(callback){
		this.onCompleted = callback;
		this.action = "update";
		this.recordRequest();
		return this;
	}
	r.remove = function(callback){
		this.onCompleted = callback;
		this.action = "remove";
		this.recordRequest();
		return this;
	}
	r.replace = function(callback){
		this.onCompleted = callback;
		this.action = "replace";
		this.recordRequest();
		return this;
	}

	return r

}

/*
	NewTestSession creates a Stretchr.Session object that will not make real
	HTTP requests, allowing you to stub out responses and make assertions about the
	calls made by your code.
*/
Stretchr.NewTestSession = function() {

	s = Stretchr.NewSession("test", "public", "private")

	/*
		requests keeps track of all requests made.
	*/
	s.requests = [];

	/*
		responses holds a queue of the response objects to respond with.
	*/
	s.responses = [];

	/*
		respond sets up a response.  Responses will be returned in the order in which
		they are called.
	*/
	s.respond = function(obj){

		s.responses.push(obj)

		// chain
		return this;
	}

	// tell the at method to return a test request
	s.at = function(path){
		return Stretchr.GetTestRequest(this, path)
	}

	return s

}