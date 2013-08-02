/*

  Stretchr JavaScript SDK
  /api/v1.1

  Copyright (c) 2013 Mat Ryer and Tyler Bunnell

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
  oo
  v1.0
  
  The worlds simplest JavaScript OO implementation.
  For if you just need classes, and nothing else.

  Copyright (c) 2013 Mat Ryer
  Please consider promoting this project if you find it useful.
  Be sure to check out the Licence: https://github.com/stretchrcom/oo#licence
*/
var ooreset=function(){var e={version:"1.0",classes:[],classesmap:{},Class:function(t){if(e.classesmap[t]){throw new e.DuplicateClassNameException(t);return null}var n=function(){this.$initialiseBases.apply(this);this.init.apply(this,arguments)};n.prototype.init=function(){};n.$bases={};n.prototype.$initialiseBases=function(){for(var e in this.$class.$bases){var t=this.$class.$bases[e];for(var n in t.prototype){if(typeof t.prototype[n]=="function"){if(n.substr(0,1)!="$"){t.prototype[n]=t.prototype[n].bind(this)}}}}};for(var r=1,i=arguments.length-1;r<i;r++){var s=arguments[r];if(s.$isClass){n.$bases[s.$className]=s;ooextend(s.prototype,n.prototype);n.prototype[s.$className]=s.prototype}else if(typeof s=="object"){ooextend(s,n.prototype)}}if(arguments.length>1){ooextend(arguments[arguments.length-1],n.prototype)}n.toString=function(){return"<{ oo.Class: "+this.$className+" }>"};n.$isClass=true;n.prototype.constructor=n.prototype.$class=n;e.classes[e.classes.length]=n.$className=t;return e.classesmap[t]=n}};e.Exception=e.Class("oo.Exception",{init:function(e){this.message=e},toString:function(){return'<{ oo.Exception: " + message + " }>'}});e.DuplicateClassNameException=e.Class("oo.DuplicateClassNameException",e.Exception,{init:function(e){"Cannot define a class because '"+e+"' already exists."}});return e};var ooextend=function(e,t){for(var n in e){t[n]=e[n]}};var oo=ooreset();var oobind=function(){var e=arguments[0]||null,t=arguments[1]||this,n=[],r=2,i=arguments.length,s;for(;r<i;r++){n.push(arguments[r])}s=function(){var r=[];var s=0;for(s=0,i=n.length;s<i;s++){r.push(n[s])}for(s=0,i=arguments.length;s<i;s++){r.push(arguments[s])}return e.apply(t,r)};s.func=e;s.context=t;s.args=n;return s};Function.prototype.bind=function(){var e=[],t=0,n=arguments.length;e.push(this);for(;t<n;t++){e.push(arguments[t])}return oobind.apply(window,e)}

/*
  Stretchr is the root namespace for all Stretchr activities.
*/
var Stretchr = {

  /*
    apiversion is the default API version.
  */
  "apiversion": "v1.1",

  /*
    version is the JavaScript SDK version.
  */
  "version": "v1.1.2",

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

/*
  context() gets a unique context variable.
*/
Stretchr.context = function() {
  return "" + (++Stretchr._context);
}

/*
  encodeMap encodes the specified map into a sorted URL string.
*/
Stretchr.encodeMap = function(map, encodeValues) {

  // get the sorted keys
  var keys = [];
  for (key in map) {
    keys.push(key);
  }
  keys.sort();

  // prepare the encoded string
  var encodedString = "";

  // for each key, add the sorted values
  for (key in keys) {
    var theKey = keys[key];
    var theValues = map[theKey].sort();
    for (value in theValues) {

      if (encodeValues) {
        encodedString += theKey + "=" + Stretchr.encode(theValues[value]) + "&";  
      } else {
        encodedString += theKey + "=" + theValues[value] + "&";
      }

    }
  }

  return encodedString.slice(0, -1);
}

/*
  encode performs a encodeURIComponent plus some extras.
*/
Stretchr.encode = function(v) {

  v = encodeURIComponent(v)

  return v

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

  if (request && request.onCompleted) {
    // trigger the callback
    request.onCompleted(object)
  }

}

/*
  Session
*/

/*
  NewSession creates a new Stretchr session with the specified
  project and keys.

  DEPRECATED in favour of new Stretchr.Session(project, publicKey, privateKey);
  that we get thanks to oo.
*/
Stretchr.NewSession = function(project, publicKey, privateKey){
  return new Stretchr.Session(project, publicKey, privateKey);
}

/*
  Session is the object from which you interact with Stretchr services.

  Create a new session by doing:

    s = Stretchr.NewSession(project, publicKey, privateKey)
*/
Stretchr.Session = oo.Class("Stretchr.Session", {

  init: function(project, publicKey, privateKey) {
    this._project = project
    this._publicKey = publicKey
    this._privateKey = privateKey
  },

  /*
    go executes the request.
  */
  go: function(request){

    // get a context for this request
    context = Stretchr.context();

    // set it in the request
    request.set("context", context);

    // add this request to the _requests array keyed by the context
    Stretchr._requests[context] = request;

    // make the request
    this._makeRequest(request);

    // return the context value
    return context;
  },

  /*
    _makeRequest makes an actual HTTP JSONP request.
  */
  _makeRequest: function(request) {

    var script = document.createElement('script');
    script.src = request.signedUrl();

    document.getElementsByTagName('head')[0].appendChild(script);

  },

  /*
    at starts a conversation with Stretchr by specifying the relevant path
    and returning a Stretchr.Request object which will continue the conversation.
  */
  at: function(path){
    return Stretchr.NewRequest(this, path)
  }

});


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
    "method": ["GET"],
    "key": [session._publicKey],
    "always200": [1],
    "callback": ["Stretchr.callback"]
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
Stretchr.Request = oo.Class("Stretchr.Request", {


  /*
    method sets the HTTP Method to use when accessing this request.
  */
  method: function(httpMethod) {

    this._params["method"] = [httpMethod]
    return this;

  },

  /*
    body sets the body object for this request.
  */
  body: function(body) {

    if (typeof body == "object") {
      this._body = body;
    } else if (typeof body == "string") {
      this._body = eval("(" + body + ")");
    }

    // set the body parameter
    if (this.bodystring()) {
      this._params["body"] = [this.bodystring()];
    }

    return this;

  },

  /*
    hasBody gets whether the request has a body or not.
  */
  hasBody: function() {
    return this._body != null
  },

  /*
    bodystring gets the JSON string that represents the body.
  */
  bodystring: function(){
    if (!this._body) { return null; }
    return JSON.stringify(this._body)
  },

  /*
    set sets a parameter in the Request and removed any existing
    parameters with the same key.
  */
  set: function(key, value) {

    // set the value
    this._params[key] = [value];

    // chain
    return this;

  },

  /*
    param sets a parameter to the Request.
  */
  param: function(key, value) {

    this._params[key] = this._params[key] || [];
    this._params[key].push(value);

    // chain
    return this;
  },

  /*
    where sets a filter parameter in the Request.
  */
  where: function(key, value) {

    // add the prefix
    key = ":" + key;

    this._filterparams[key] = this._filterparams[key] || [];
    this._filterparams[key].push(value);

    // chain
    return this;

  },

  /*
    allParamsString gets an encoded URL string of all the parameters ordered
    by key first, then value.
  */
  allParamsString: function(encodeValues) {

    var allParams = {}

    for (key in this._params) {
      allParams[key] = this._params[key]
    }
    for (key in this._filterparams) {
      allParams[key] = this._filterparams[key]
    }

    return Stretchr.encodeMap(allParams, encodeValues)

  },

  /*
    safeUrl generates an absolute URL from the properties in this request which is safe,
    i.e. contains no sensitive data (like private key).
  */
  safeUrl: function(encodeValues) {

    // ensure we do not send sensitive information
    delete this._params["private"]
    delete this._params["bodyhash"]

    return this.url(encodeValues)

  },

  /*
    url generates an absolute URL from the properties in this request
  */
  url: function(encodeValues) {
    return ["http://", this._session._project, ".stretchr.com/api/", Stretchr.apiversion, "/", this._path, "?", this.allParamsString(encodeValues)].join("")
  },

  /*
    stringToSign gets the string that should be signed for security purposes.
  */
  stringToSign: function(){

    // add the private key
    this._params["private"] = [this._session._privateKey]

    var stringToSign = [this._method, "&", this.url()].join("")
    return stringToSign

  },

  /*
    signature gets the security hash that should be sent along with this request.
  */
  signature: function(){
    return Stretchr.hash(this.stringToSign())
  },

  /*
    signedUrl gets the actual URL of the request to make, with the sign parameter added.
  */
  signedUrl: function(){

    signature = this.signature()
    
    // set the body string
    if (this.bodystring()) {
      this._params["body"] = [this.bodystring()];
    }

    /*
    for (var key in this._params) {
      for (var valI in this._params[key]) {
        this._params[key][valI] = Stretchr.encode(this._params[key][valI]);
      }
    }
    */

    return [this.safeUrl(true), "&sign=", signature].join("")
  },

  /*
    Actions
  */

  read: function(completed){
    this.onCompleted = completed || Stretchr.doNothing;
    this._session.go(this.method("GET"));
    return this; // chain
  },

  update: function(completed){
    this.onCompleted = completed || Stretchr.doNothing;
    this._session.go(this.method("PUT"));
    return this; // chain
  },

  replace: function(completed){
    this.onCompleted = completed || Stretchr.doNothing;
    this._session.go(this.method("POST"));
    return this; // chain
  },

  create: function(completed){
    this.onCompleted = completed || Stretchr.doNothing;
    this._session.go(this.method("POST"));
    return this; // chain
  },

  remove: function(completed){
    this.onCompleted = completed || Stretchr.doNothing;
    this._session.go(this.method("DELETE"));
    return this; // chain
  },

  readAll: function(options) {

    var reader = this._newMultiplePageReader();
    for (var key in options) {
      reader[key] = options[key];
    }

    // start reading
    reader.readAll(options);
  },

  /*
    Reading multiple pages
  */
  _newMultiplePageReader: function(){
    return new Stretchr.MultiplePageReader(this);
  }

});

/*
  Stretchr.MultiplePageReader makes multiple requests to load many pages
  of data.
*/
Stretchr.MultiplePageReader = oo.Class("Stretchr.MultiplePageReader", {

  init: function(request){

    this._request = request;
    this._currentPage = -1;
    this._pageSize = 1000;
    this._totalCount = -1;
    this._responses = [];
    this._items = [];
    this._interval = 100;
    this._loadedItemsCount = 0;

  },

  /*
    options:
      onCompleted: function(){}
      onProgress: function(repsonse, percentage){}
  */
  readAll: function(options) {

    this.onCompleted = options["onCompleted"] || Stretchr.doNothing;
    this.onProgress = options["onProgress"] || Stretchr.doNothing;

    this.readNextPage();

  },

  // readNextPage reads the next page.
  readNextPage: function(){
    this._currentPage++;

    // set the limit value
    var request = this._request;
    var $this = this;

    request.set("total", 1);

    request
      .set("limit", this._pageSize)
      .set("skip", this._pageSize * this._currentPage)
      .read(function(response){

        if (response["~status"] == 200) {

          // do we have a total count?
          if (response["~data"]["~total"]) {
            $this._totalCount = response["~data"]["~total"];
          }

          // add the items
          $this._responses.push(response);
          for (var i in response["~data"]["~items"]) {

            var index = ($this._currentPage * $this._pageSize) + parseInt(i);
            $this._items[index] = response["~data"]["~items"][i];
            $this._loadedItemsCount++;

          }

          $this._progressPercentage = Math.floor(100 / ($this._totalCount / $this._loadedItemsCount));

          // update the progress
          $this.onProgress(response, $this._progressPercentage);

          if ($this._loadedItemsCount == $this._totalCount || $this._totalCount <= 0) {

            // finished
            $this.onCompleted({
              "~status": 200,
              "~data": {
                "~total": $this._totalCount,
                "~count": $this._totalCount,
                "~items": $this._items
              }
            });

          } else {

            // more pages
            window.setTimeout(function(){ $this.readNextPage(); }, $this._interval);

          }

        } else {

          // finished with error
          $this.onCompleted(response);

        }

      })
    ;

  }

});

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