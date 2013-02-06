/*

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
	
	Special thanks to:

	  Jeff Mott for CryptoJS
	  - scroll down for more information

*/

/*
	Stretchr is the root namespace for all Stretchr activities.
*/
var Stretchr = {
	/*
		apiversion is the default API version.
	*/
	"apiversion": "v1",

	/*
		_context keeps track of request context values.
	*/
	"_context": 0,

	/*
		_requests holds an array of outstanding requests.
	*/
	"_requests": []
};

/*
	Tools
*/

/*
	Surprise, surprise, a function that does nothing!

	Weird eh?  No - it's a nice default for callbacks without having to define
	loads of empty functions.
*/
Stretchr.doNothing = function(){};

Stretchr.context = function() {
	return ++Stretchr._context;
}

/*
	encodeMap encodes the specified map into a sorted URL string.
*/
Stretchr.encodeMap = function(map) {

	// get the sorted keys
	var keys = [];
	for (key in map) {
		keys.push(key)
	}
	keys.sort()

	// prepare the encoded string
	var encodedString = ""

	// for each key, add the sorted values
	for (key in keys) {
		var theKey = keys[key]
		var theValues = map[theKey].sort()
		for (value in theValues) {
			encodedString += escape(theKey) + "=" + escape(theValues[value]) + "&"
		}
	}

	return encodedString.slice(0, -1)
}

/*
	Making requests
*/

/*
	callback gets called when a JSONP request has completed.
*/
Stretchr.callback = function(object, context) {

	// find the request that made this call
	request = Stretchr._requests[context]

	// trigger the callback
	request.onCompleted(object)

}

/*
	Session
*/

/*
	WithSession creates a new Stretchr session with the specified
	project and keys.
*/
Stretchr.WithSession = function(project, publicKey, privateKey){
	var newSession = new(Stretchr.Session)
	newSession._project = project
	newSession._publicKey = publicKey
	newSession._privateKey = privateKey
	return newSession
}

/*
	Session is the object from which you interact with Stretchr services.

	Create a new session by doing:

	  s = Stretchr.WithSession(project, publicKey, privateKey)
*/
Stretchr.Session = function(){}

/*
	go executes the request.
*/
Stretchr.Session.prototype.go = function(request){

	context = Stretchr.context()

	// add this request to the _requests array keyed by the context
	Stretchr._requests[context] = request

	// make the request
	Stretchr._makeRequest(request)

	return context
}

/*
	_makeRequest makes an actual HTTP JSONP request.
*/
Stretchr.Session.prototype._makeRequest = function(request) {

	var script = document.createElement('script');
	script.src = request.signedUrl()

	document.getElementsByTagName('head')[0].appendChild(script);

}

/*
	at starts a conversation with Stretchr by specifying the relevant path
	and returning a Stretchr.Request object which will continue the conversation.
*/
Stretchr.Session.prototype.at = function(path){
	return Stretchr.NewRequest(this, path)
}

/*
	Request
*/

/*
	NewRequest makes a new Stretchr.Request object with the specified session
	and path.
*/
Stretchr.NewRequest = function(session, path) {
	var request = new(Stretchr.Request);
	request._path = path;
	request._session = session;
	request._params = {
		"~method": ["GET"],
		"~key": [session._publicKey],
		"~always200": [1],
		"~callback": ["Stretchr.callback"]
	};
	request._filterparams = {};
	request._body = null;
	request._method = "GET"
	request.onCompleted = Stretchr.doNothing;
	return request;
}

/*
	Request represents a complete conversation with Stretchr.
*/
Stretchr.Request = function(){}

/*
	method sets the HTTP Method to use when accessing this request.
*/
Stretchr.Request.prototype.method = function(httpMethod) {

	this._params["~method"] = [httpMethod]
	return this;

}

/*
	bod sets the body object for this request.
*/
Stretchr.Request.prototype.body = function(body) {

	if (typeof body == "object") {
		this._body = body;
	} else if (typeof body == "string") {
		this._body = eval("(" + body + ")");
	}

	// set the body parameter
	this._params["~body"] = [this.bodystring()];

	// set the bodyhash
	if (this.hasBody()) {
		this._params["~bodyhash"] = [this.bodyhash()];
	}

	return this;

}

/*
	hasBody gets whether the request has a body or not.
*/
Stretchr.Request.prototype.hasBody = function() {
	return this._body != null
}

/*
	bodystring gets the JSON string that represents the body.
*/
Stretchr.Request.prototype.bodystring = function(){
	return JSON.stringify(this._body)
}

/*
	bodyhash gets a hash of the bodystring.
*/
Stretchr.Request.prototype.bodyhash = function(){
	if (!this.hasBody()) {
		return ""
	}
	return Stretchr.hash(this.bodystring())
}

/*
	with sets a parameter to the Request.
*/
Stretchr.Request.prototype.with = function(key, value) {

	this._params[key] = this._params[key] || []
	this._params[key].push(value)

	// chain
	return this
}

/*
	where sets a filter parameter in the Request.
*/
Stretchr.Request.prototype.where = function(key, value) {

	// add the prefix
	key = ":" + key

	this._filterparams[key] = this._filterparams[key] || []
	this._filterparams[key].push(value)

	// chain
	return this

}

/*
	allParamsString gets an encoded URL string of all the parameters ordered
	by key first, then value.
*/
Stretchr.Request.prototype.allParamsString = function(){

	var allParams = {}

	for (key in this._params) {
		allParams[key] = this._params[key]
	}
	for (key in this._filterparams) {
		allParams[key] = this._filterparams[key]
	}

	var s = Stretchr.encodeMap(allParams)

	if (s.length > 0) {
		s = "?" + s
	}

	return s

}

/*
	safeUrl generates an absolute URL from the properties in this request which is safe,
	i.e. contains no sensitive data (like private key).
*/
Stretchr.Request.prototype.safeUrl = function() {

	// ensure we do not send sensitive information
	delete this._params["~private"]
	delete this._params["~bodyhash"]

	return this.url()

}

/*
	url generates an absolute URL from the properties in this request
*/
Stretchr.Request.prototype.url = function() {
	return ["http://", this._session._project, ".stretchr.com/api/", Stretchr.apiversion, "/", this._path, this.allParamsString()].join("")
}

/*
	stringToSign gets the string that should be signed for security purposes.
*/
Stretchr.Request.prototype.stringToSign = function(){

	// add the private key
	this._params["~private"] = [this._session._privateKey]

	return [this._method, "&", this.url()].join("")

}

/*
	signature gets the security hash that should be sent along with this request.
*/
Stretchr.Request.prototype.signature = function(){
	return Stretchr.hash(this.stringToSign())
}

/*
	signedUrl gets the actual URL of the request to make, with the ~sign parameter added.
*/
Stretchr.Request.prototype.signedUrl = function(){
	return [this.safeUrl(), "&~sign=", this.signature()].join("")
}

/*
	Actions
*/

Stretchr.Request.prototype.read = function(){
	this._session.go(this.method("GET"))
}

Stretchr.Request.prototype.update = function(){
	this._session.go(this.method("PUT"))
}

Stretchr.Request.prototype.replace = function(){
	this._session.go(this.method("POST"))
}

Stretchr.Request.prototype.create = function(){
	this._session.go(this.method("POST"))
}

Stretchr.Request.prototype.remove = function(){
	this._session.go(this.method("DELETE"))
}

/*
	Security
*/

/*
	hashSHA1 uses the SHA1 algorithm to hash the specified string.
*/
Stretchr.hashSHA1 = function(s) {
	return CryptoJS.SHA1(s);
}

/*
	hash uses the current hashing function to hash the specified string.
*/
Stretchr.hash = Stretchr.hashSHA1;

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License

© 2009–2013 by Jeff Mott. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions, and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions, and the following disclaimer in the documentation or other materials provided with the distribution.
Neither the name CryptoJS nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS," AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE
*/
var CryptoJS=CryptoJS||function(e,m){var p={},j=p.lib={},l=function(){},f=j.Base={extend:function(a){l.prototype=this;var c=new l;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
n=j.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=m?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,q=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)c[d+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[d+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=e.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*e.random()|0);return new n.init(c,a)}}),b=p.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,
2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},
k=j.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(b,f){return(new s.HMAC.init(a,
f)).finalize(b)}}});var s=p.algo={};return p}(Math);
(function(){var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^
k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();