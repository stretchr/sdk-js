/**

  Stretchr JavaScript SDK
  /api/v1.1

  Copyright (c) 2013 Mat Ryer

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

/**
 * @fileOverview A comprehensive client-side JavaScript SDK for HTML5 applications
 * interacting with Stretchr services.  See the {@link Stretchr} namespace.
 * @name Stretchr JavaScript SDK
 */

/**
 * @namespace
 * @version 1.2
 */
var Stretchr = {

  /** version represents this SDK version. */
  version: "1.2",

  /** apiVersion represents the default API version this SDK will
    * attempt to interact with. */
  apiVersion: "1.1"

};

/*
  oo
  v1.3
  github.com/stretchr/oo

  The worlds simplest JavaScript OO implementation.
  For if you just need cool classes, and nothing else.

  Copyright (c) 2013 Mat Ryer
  Please consider promoting this project if you find it useful.
  Be sure to check out the Licence: https://github.com/stretchr/oo#licence
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 1o=6(){5 m={2a:"1.3",11:[],14:{},L:6(d){7(m.14[d]){15 K m.10(d);n Y}5 e=6(){7(!4.$1e){15 K m.1f(d);}4.$1e.v(4);4.y.v(4,9)};e.8.y=6(){};e.$Z={};e.8.$1e=6(){o(5 a u 4.$w.$Z){5 b=4.$w.$Z[a];o(5 c u b.8){7(G b.8[c]=="6"){7(c.1h(0,1)!="$"){b.8[c]=b.8[c].P(4)}}}}};5 f=[];o(5 i=1,l=9.p-1;i<l;i++){5 g=9[i];7(g){7(g.$1t){g=g.$1t(e,9)}7(!g)24;7(g.$1n){e.$Z[g.$X]=g;V(g.8,e.8);e.8[g.$X]=g.8}D 7(G g=="1B"){V(g,e.8)}7(g.$1m){g.$1m(e,9)}7(g.$U){f.r(g.$U.P(g,e,9))}}D{1l("1w 1j 28 "+g+" 1c 27 "+d+" w.")}}7(9.p>1){5 h=9[9.p-1];o(5 j u h){5 k=h[j];7(j.1h(0,1)==="$"){e[j]=k}D{e.8[j]=k}}}e.1i=6(){n"<{ x.L: "+4.$X+" }>"};e.$1n=C;e.8.25=e.8.$w=e;m.11[m.11.p]=e.$X=d;m.14[d]=e;7(f.p>0){o(5 i u f){f[i]()}}n e}};m.B={$T:6(c,d){c[d]=(6(){5 b=d;n 6(){7(9.p===1&&G 9[0]=="6"){5 a=[b,9[0]];4.M.v(4,a)}D{5 a=[b];V(9,a);4.E.v(4,a)}n 4}})()},$U:6(a){a.M=m.B.M;a.E=m.B.E;a.W=m.B.W;a.1a=m.B.1a;7(a.8.16){o(5 i u a.8.16){5 b=a.8.16[i];m.B.$T(a.8,b)}}},M:6(a,b){4.q=4.q||{};4.q[a]=4.q[a]||[];4.q[a].r(b);n 4},W:6(a,b){5 c=[];5 d=[a,4];o(5 i=2;i<9.p;i++){c.r(9[i]);d.r(9[i])}7(4.$w&&4.$w.q&&4.$w.q[a]){4.$w.E.v(4.$w,d)}5 e=[];7(4.q&&4.q[a]){e=4.q[a]}7(b&&b[a]){e.r(b[a])}7(e.p>0){o(5 i u e){5 f=e[i];5 g=f.v(4,c);7(g===A){n A}}}},E:6(a){5 b=[a,Y];o(5 i=1;i<9.p;i++){b.r(9[i])}n 4.W.v(4,b)},1a:6(a,b){7(4.q&&4.q[a]){o(5 i u 4.q[a]){5 c=4.q[a][i];7(c==b){4.q[a].1G(i,1);n C}}}n A},N:6(a){5 b=9[9.p-1];7(G b!=="6"){15 K m.1d("N","26 29 1x 1y 1A 1b 1H 1j 1L.");}5 c=[];o(5 i=1;i<9.p-1;i++){c.r(9[i])}c.1S("1T:"+a);5 d=4.E.v(4,c);7(d===A){n A}d=b();c.r(d);c[0]=a;4.E.v(4,c);n d}};m.H={$U:6(a){7(a.8.Q&&a.8.Q.p){o(5 b u a.8.Q){m.H.$I(a.8,a.8.Q[b],C,C)}}7(a.8.R&&a.8.R.p){o(5 b u a.8.R){m.H.$I(a.8,a.8.R[b],C,A)}}7(a.8.S&&a.8.S.p){o(5 b u a.8.S){m.H.$I(a.8,a.8.S[b],A,C)}}},I:6(){5 a=[4];o(5 b u 9){a.r(9[b])}m.H.$I.v(4,a);n 4}};m.H.$I=6(c,d,e,f){7(c.M){7(!c.17){m.B.$T(c,"17")}m.B.$T(c,d+"1k")}5 g=d;5 h;c.F=c.F||6(a){n"1z"+a};5 i=c.F(d);c.13=c.13||6(a,b){7(4.N){4.N("17",d,4[i],b,6(){4.N(a+"1k",4[i],b,6(){4[4.F(a)]=b}.P(4))}.P(4))}D{4[4.F(a)]=b}n 4};c.12=c.12||6(a){n 4[4.F(a)]};c[i]=Y;7(f!==A){7(f===C){h="1C"+d.1D(0).1E()+d.1F(1)}D{h=f}c[h]=c[h]||6(a){4.13(d,a);n 4}}7(e!==A){7(e!==C){g=e}c[g]=c[g]||6(){n 4.12(d)}}n c};m.z=m.L("x.z",{y:6(a){4.1g=a},1i:6(){n"x.z: \\" + 1g + \\""}});m.10=m.L("x.10",m.z,{y:6(a){4["x.z"].y("1I 1J a w 1K \'"+a+"\' 1v 1M, 1N 1O 1P w 1Q; e.g. 1R."+a)}});m.1f=m.L("x.1f",m.z,{y:6(a){4["x.z"].y("1p 1q 1c 1U a K 1V; 1W\'t 1X 1Y 1b 1Z, 20 1b K 21: 5 22 = K "+a+"();")}});m.1d=m.L("x.1d",m.z,{y:6(a,b){4["x.z"].y("1p 1q 1c 23 "+a+"; "+b)}});n m};5 1l=6(a){7(19){7(19.1r){19.1r(a)}}};5 V=6(a,b){7(G a.p!="1s"&&G b.p!="1s"){o(5 s u a){b.r(a[s])}}D{o(5 s u a){b[s]=a[s]}}};5 x=1o();5 1u=6(){5 b=9[0]||Y,18=9[1]||4,O=[],i=2,l=9.p,J;o(;i<l;i++){O.r(9[i])}J=6(){5 a=[];5 i=0;o(i=0,l=O.p;i<l;i++){a.r(O[i])}o(i=0,l=9.p;i<l;i++){a.r(9[i])}n b.v(18,a)};J.2b=b;J.2c=18;J.2d=O;n J};2e.8.P=6(){5 a=[],i=0,l=9.p;a.r(4);o(;i<l;i++){a.r(9[i])}n 1u.v(2f,a)};',62,140,'||||this|var|function|if|prototype|arguments||||||||||||||return|for|length|ooevents|push|||in|apply|class|oo|init|Exception|false|Events|true|else|fire|getPropertyInternalName|typeof|Properties|addProperty|bound|new|Class|on|withEvent|_args|bind|properties|getters|setters|addEvent|afterClassDefined|ooextend|fireWith|className|null|bases|DuplicateClassNameException|classes|getProperty|setProperty|classesmap|throw|events|propertyChanged|_obj|console|removeCallback|the|when|IncorrectArgumentsException|initialiseBases|IncorrectSyntaxException|message|substr|toString|to|Changed|oowarn|afterInherited|isClass|ooreset|Incorrect|syntax|warn|undefined|beforeInherited|oobind|already|Failed|argument|must|_|be|object|set|charAt|toUpperCase|slice|splice|codeblock|Cannot|define|because|execute|exists|consider|namespacing|your|names|YourCompany|unshift|before|creating|instance|don|just|call|method|use|keyword|obj|calling|continue|constructor|The|building|inherit|last|version|func|context|args|Function|window'.split('|'),0,{}))

/*
  Session
  =====================================================================
*/

/** @class
 * Stretchr.Session represents a session that can be used to interact
 * with Stretchr services.
 * @property {string} projectName The name of the Stretchr project that this session will
 * interact with.  Use `projectName()` and `setProjetName()` accessors.
 * @property {string} publicKey The public key to use for security when interacting with
 * the Stretchr services.  Use `publicKey()` and `setPublicKey()` accessors.
 * @property {string} privateKey The private key to use for security when interacting with
 * the Stretchr services.  Use `privateKey()` and `setPrivateKey()` accessors.
 */
Stretchr.Session = oo.Class("Stretchr.Session", oo.Events, oo.Properties, {

  properties: ["projectName", "publicKey", "privateKey"],

  init: function(projectName, publicKey, privateKey){

    this
      .setProjectName(projectName)
      .setPublicKey(publicKey)
      .setPrivateKey(privateKey)
    ;

  },

  /**
   * Starts a new Request for the given path.
   * @param {string} path The path of the new request.
   * @memberOf Stretchr.Session.prototype
  */
  at: function(path) {
    return new Stretchr.Request(this, path);
  }

});

/** @class
 * Stretchr.Request represents a single request to Stretchr services.
 * It is recommended that you use the `at` method on Stretchr.Session
 * instead of constructing this object directly.
 * @property {Stretchr.Session} session The session to use when making the
 * request.
 * @property {string} path The path for this Request.
 */
Stretchr.Request = oo.Class("Stretchr.Request", oo.Events, oo.Properties, {

  properties: ["session", "path"],

  init: function(session, path){
    this.setSession(session).setPath(path);
    this._params = new Stretchr.ParamBag();
    this._where = new Stretchr.ParamBag();
  },

  /**
  * Adds an item to the params, takes a key/value add("key", "value) or an
  * object of multiple keys/values add({key: "value", key2: "value2"})
  * @param {key} either a string key or an object of multiple key/values
  * @param {value} the value if a string key was provided for key
  * @memberOf Stretchr.Request.prototype
  */
  params: function(key, value) {
    return this._params.params(key, value) || this;
  },

  /**
  * Adds an item to the params, takes a key/value add("key", "value) or an
  * object of multiple keys/values add({key: "value", key2: "value2"})
  * @param {key} either a string key or an object of multiple key/values
  * @param {value} the value if a string key was provided for key
  * @memberOf Stretchr.Request.prototype
  */
  param: function(key, value) {
    return this._params.params(key, value) || this;
  },

  /**
  * Adds an item to the filters, takes a key/value add("key", "value) or an
  * object of multiple keys/values add({key: "value", key2: "value2"})
  * @param {key} either a string key or an object of multiple key/values
  * @param {value} the value if a string key was provided for key
  * @memberOf Stretchr.Request.prototype
  */
  where: function(key, value) {
    return this._where.params(key, value) || this;
  }

});

/** @class
 * Stretchr.Transport is the base class for objects capable of communicating
 * with Stretchr services.
 */
Stretchr.Transport = oo.Class("Stretchr.Transport", oo.Events, oo.Properties, {

  properties: ["host", "protocol", "APIVersion"],
  events: ["before", "after", "success", "error"],

  init: function(){
    this.setProtocol("http");
  },

  url: function(path) {
    return [this.protocol(), "://", this.host(), "/api/v", this.APIVersion(), path].join("");
  }

});

/** @class
 * Stretchr.JSONPTransport is the class for objects capable of communicating
 * with Stretchr services via JSONP.
 */
Stretchr.JSONPTransport = oo.Class("Stretchr.JSONPTransport", Stretchr.Transport, {

  /**
   * makeRequest makes a JSONP request using the specified options.
   * @param {string} path The path of the request to make.
  * @memberOf Stretchr.JSONPTransport.prototype
   */
  makeRequest: function(options) {

    // event: before
    this.fireWith("before", options, options);

    // add the script tag (JSONP)
    var script = document.createElement('script');
    script.src = options.path;
    document.getElementsByTagName('head')[0].appendChild(script);

    // event: after
    this.fireWith("after", options, options);

  }

});

/** @class
 * Stretchr.ParamBag is a container for params when building a stretchr
 * request.  It should be used through the request object, not necessarily on its own.
 */
Stretchr.ParamBag = oo.Class("Stretchr.ParamBag", {
  init: function() {
    this._params = {};
  },

  /**
  * Adds an item to the params, takes a key/value add("key", "value) or an
  * object of multiple keys/values add({key: "value", key2: "value2"})
  * @param {string} key Either a string key or an object of multiple key/values
  * @param {string} value The value if a string key was provided for key
  * @memberOf Stretchr.ParamBag.prototype
  */
  add: function(key, value) {
    if (typeof(key) === "string") {
      //initialize the key as an array
      this._params[key] = this._params[key] || [];
      if (value instanceof Array) {
        //because this is an array, we want to concat it to what we already have
        this._params[key] = this._params[key].concat(value);
      } else {
        //not an array, just push it on
        this._params[key].push(value);
      }
    } else if (typeof(key) === "object") {
      //we were given an object of multiple key/value pairs, so iterate through them and call add
      for (var i in key) {
        this.add(i, key[i]);
      }
    }
    return this;
  },

  /**
  * Overwrites a param with a given key/value
  * @param {string} key A string that sets the key you want to overwrite
  * @param {string} value The value applied to the given key
  * @memberOf Stretchr.ParamBag.prototype
  */
  set: function(key, value) {
    this._params[key] = [];
    this.add(key, value);
    return this;
  },

  /**
  * Returns a specific key/value combination or all of them
  * @param {string} key (Optional) States the key that you want to get the value for.
  * Returns all key/value pairs if none is given
  * @memberOf Stretchr.ParamBag.prototype
  */
  get: function(key) {
    return key ? this._params[key] : this._params;
  },

  /**
  * Abstracts the get/set methods and makes assumptions for you
  * - Returns the value if just a key is given
  * - Returns all if no key or value is given
  * - Sets the key if a key/value is given
  * - Sets many keys if an object of keys/values is given
  * @param {string} key (Optional) States the key that you want to get the value for.
  * Returns all key/value pairs if none is given
  * @param {string} value (Optional) States the value that should be applied to the above key
  * @memberOf Stretchr.ParamBag.prototype
  */
  params: function(key, value) {
    if (value || (key && typeof(key) === "object")) {
      //typical setter, just do it
      this.add(key, value);
    } else {
      return this.get(key);
    }
  },

  /**
  * Returns a URL encoded version of the params
  * @param {object} options Settings for the url encoding process.
  * currently only supports {keyPrefix: ":"} which will set the
  * prefix applied to all keys
  * @memberOf Stretchr.ParamBag.prototype
  */
  urlEncoded: function(options) {
    var d = [],
      options = options || {};

    //set some defaults
    options = {
      keyPrefix: options.keyPrefix || ""
    }

    for (var key in this._params) {
      d.push( encodeURIComponent(options.keyPrefix + key) + "=" + encodeURIComponent( this._params[key].join(",") ) );
    }
    return d.join("&");
  }
});

/**
 * hashSHA1 hashes the specified value using the SHA1 algorithm.
 * Usually instead of calling this method directly, you should assign this to the
 * {@link Stretchr.hash} member, and call that instead.
 * @param {string} value - The value to hash.
 * @function
 */
Stretchr.hashSHA1 = function(value){
  return CryptoJS.SHA1(value);
};

/**
 * hash is the function that the Stretchr JavaScript SDK will use to
 * hash strings.  Calling it will hash the specified value.
 * By default, it will be a pointer to the {@link Stretchr.hashSHA1} function.
 * @param {string} value - The value to hash.
 * @returns Returns the hashed version of the specified value.
 */
Stretchr.hash = Stretchr.hashSHA1;

/*
  Dependencies
  =====================================================================
*/

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
