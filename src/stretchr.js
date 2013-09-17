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
  v1.2.2
  github.com/stretchr/oo

  The worlds simplest JavaScript OO implementation.
  For if you just need cool classes, and nothing else.

  Copyright (c) 2013 Mat Ryer
  Please consider promoting this project if you find it useful.
  Be sure to check out the Licence: https://github.com/stretchr/oo#licence
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 1m=5(){4 m={28:"1.2.2",12:[],1a:{},I:5(d){6(m.1a[d]){18 F m.Y(d);9 11}4 e=5(){6(!3.$14){18 F m.15(d);}3.$14.v(3);3.x.v(3,8)};e.7.x=5(){};e.$V={};e.7.$14=5(){n(4 a q 3.$u.$V){4 b=3.$u.$V[a];n(4 c q b.7){6(J b.7[c]=="5"){6(c.1f(0,1)!="$"){b.7[c]=b.7[c].L(3)}}}}};4 f=[];n(4 i=1,l=8.o-1;i<l;i++){4 g=8[i];6(g){6(g.$1s){g=g.$1s(e,8)}6(!g)24;6(g.$1o){e.$V[g.$U]=g;T(g.7,e.7);e.7[g.$U]=g.7}D 6(J g=="1D"){T(g,e.7)}6(g.$1k){g.$1k(e,8)}6(g.$W){f.r(g.$W.L(g,e,8))}}D{1j("1v 1h 26 "+g+" 1c 25 "+d+" u.")}}6(8.o>1){4 h=8[8.o-1];n(4 j q h){4 k=h[j];6(j.1f(0,1)==="$"){e[j]=k}D{e.7[j]=k}}}e.1g=5(){9"<{ w.I: "+3.$U+" }>"};e.$1o=A;e.7.22=e.7.$u=e;m.12[m.12.o]=e.$U=d;m.1a[d]=e;6(f.o>0){n(4 i q f){f[i]()}}9 e}};m.C={$Q:5(c,d){c[d]=(5(){4 b=d;9 5(){6(8.o===1&&J 8[0]=="5"){4 a=[b,8[0]];3.O.v(3,a)}D{4 a=[b];T(8,a);3.B.v(3,a)}9 3}})()},$W:5(a){a.O=m.C.O;a.B=m.C.B;a.17=m.C.17;6(a.7.10){n(4 i q a.7.10){4 b=a.7.10[i];m.C.$Q(a.7,b)}}},O:5(a,b){3.p=3.p||{};3.p[a]=3.p[a]||[];3.p[a].r(b);9 3},B:5(a){4 b=[];4 c=[a,3];n(4 i=1;i<8.o;i++){b.r(8[i]);c.r(8[i])}6(3.$u&&3.$u.p&&3.$u.p[a]){3.$u.B.v(3.$u,c)}6(3.p&&3.p[a]){n(4 i q 3.p[a]){4 d=3.p[a][i];4 e=d.v(3,b);6(e===y){9 y}}}},17:5(a,b){6(3.p&&3.p[a]){n(4 i q 3.p[a]){4 c=3.p[a][i];6(c==b){3.p[a].1x(i,1);9 A}}}9 y},N:5(a){4 b=8[8.o-1];6(J b!=="5"){18 F m.1d("N","21 1J 23 27 1u 1b 1y 1h 1E.");}4 c=[];n(4 i=1;i<8.o-1;i++){c.r(8[i])}c.1P("1Q:"+a);4 d=3.B.v(3,c);6(d===y){9 y}d=b();c.r(d);c[0]=a;3.B.v(3,c);9 d}};m.K={$W:5(a){6(a.7.P&&a.7.P.o){n(4 b q a.7.P){m.K.$H(a.7,a.7.P[b],A,A)}}6(a.7.R&&a.7.R.o){n(4 b q a.7.R){m.K.$H(a.7,a.7.R[b],A,y)}}6(a.7.S&&a.7.S.o){n(4 b q a.7.S){m.K.$H(a.7,a.7.S[b],y,A)}}},H:5(){4 a=[3];n(4 b q 8){a.r(8[b])}m.K.$H.v(3,a);9 3}};m.K.$H=5(c,d,e,f){6(c.O){6(!c.19){m.C.$Q(c,"19")}m.C.$Q(c,d+"1i")}4 g=d;4 h;c.E=c.E||5(a){9"1w"+a};4 i=c.E(d);c.16=c.16||5(a,b){6(3.N){3.N("19",d,3[i],b,5(){3.N(a+"1i",3[i],b,5(){3[3.E(a)]=b}.L(3))}.L(3))}D{3[3.E(a)]=b}9 3};c.13=c.13||5(a){9 3[3.E(a)]};c[i]=11;6(f!==y){6(f===A){h="1z"+d.1A(0).1B()+d.1C(1)}D{h=f}c[h]=c[h]||5(a){3.16(d,a);9 3}}6(e!==y){6(e!==A){g=e}c[g]=c[g]||5(){9 3.13(d)}}9 c};m.z=m.I("w.z",{x:5(a){3.1l=a},1g:5(){9"w.z: \\" + 1l + \\""}});m.Y=m.I("w.Y",m.z,{x:5(a){3["w.z"].x("1F 1G a u 1H \'"+a+"\' 1I 1t, 1K 1L 1M u 1N; e.g. 1O."+a)}});m.15=m.I("w.15",m.z,{x:5(a){3["w.z"].x("1e 1n 1c 1R a F 1S; 1T\'t 1U 1V 1b 1W, 1X 1b F 1Y: 4 1Z = F "+a+"();")}});m.1d=m.I("w.1d",m.z,{x:5(a,b){3["w.z"].x("1e 1n 1c 20 "+a+"; "+b)}});9 m};4 1j=5(a){6(Z){6(Z.1p){Z.1p(a)}}};4 T=5(a,b){6(J a.o!="1q"&&J b.o!="1q"){n(4 s q a){b.r(a[s])}}D{n(4 s q a){b[s]=a[s]}}};4 w=1m();4 1r=5(){4 b=8[0]||11,X=8[1]||3,M=[],i=2,l=8.o,G;n(;i<l;i++){M.r(8[i])}G=5(){4 a=[];4 i=0;n(i=0,l=M.o;i<l;i++){a.r(M[i])}n(i=0,l=8.o;i<l;i++){a.r(8[i])}9 b.v(X,a)};G.29=b;G.2a=X;G.2b=M;9 G};2c.7.L=5(){4 a=[],i=0,l=8.o;a.r(3);n(;i<l;i++){a.r(8[i])}9 1r.v(2d,a)};',62,138,'|||this|var|function|if|prototype|arguments|return||||||||||||||for|length|ooevents|in|push|||class|apply|oo|init|false|Exception|true|fire|Events|else|getPropertyInternalName|new|bound|addProperty|Class|typeof|Properties|bind|_args|withEvent|on|properties|addEvent|getters|setters|ooextend|className|bases|afterClassDefined|_obj|DuplicateClassNameException|console|events|null|classes|getProperty|initialiseBases|IncorrectSyntaxException|setProperty|removeCallback|throw|propertyChanged|classesmap|the|when|IncorrectArgumentsException|Incorrect|substr|toString|to|Changed|oowarn|afterInherited|message|ooreset|syntax|isClass|warn|undefined|oobind|beforeInherited|exists|be|Failed|_|splice|codeblock|set|charAt|toUpperCase|slice|object|execute|Cannot|define|because|already|last|consider|namespacing|your|names|YourCompany|unshift|before|creating|instance|don|just|call|method|use|keyword|obj|calling|The|constructor|argument|continue|building|inherit|must|version|func|context|args|Function|window'.split('|'),0,{}))

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
    Starts a new Request for the given path.
    @param {string} path The path of the new request.
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
  */
  params: function(key, value) {
    return this._params.params(key, value) || this;
  },

  /**
  * Adds an item to the params, takes a key/value add("key", "value) or an 
  * object of multiple keys/values add({key: "value", key2: "value2"})
  * @param {key} either a string key or an object of multiple key/values
  * @param {value} the value if a string key was provided for key
  */
  param: function(key, value) {
    return this._params.params(key, value) || this;
  },

  /**
  * Adds an item to the filters, takes a key/value add("key", "value) or an 
  * object of multiple keys/values add({key: "value", key2: "value2"})
  * @param {key} either a string key or an object of multiple key/values
  * @param {value} the value if a string key was provided for key
  */
  where: function(key, value) {
    return this._where.params(key, value) || this;
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
  * @param {key} either a string key or an object of multiple key/values
  * @param {value} the value if a string key was provided for key
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
  * @param {key} A string that sets the key you want to overwrite
  * @param {value} The value applied to the given key
  */
  set: function(key, value) {
    this._params[key] = [];
    this.add(key, value);
    return this;
  },

  /**
  * Returns a specific key/value combination or all of them
  * @param {key} (Optional) States the key that you want to get the value for.
  * Returns all key/value pairs if none is given
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
  * @param {key} (Optional) States the key that you want to get the value for.  
  * Returns all key/value pairs if none is given
  * @param {value} (Optional) States the value that should be applied to the above key
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
  * @param {options} Settings for the url encoding process.
  * currently only supports {keyPrefix: ":"} which will set the
  * prefix applied to all keys
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
