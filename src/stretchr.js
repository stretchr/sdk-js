/**

  Stretchr JavaScript SDK v1.2
  /api/v1.1

  by Mat Ryer and Ryan Quinn
  Copyright (c) 2013 Stretchr, Inc.

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

/**
 * @fileOverview A comprehensive client-side JavaScript SDK for HTML5 applications
 * interacting with Stretchr services.  See the {@link Stretchr} namespace.
 *
 * The Stretchr JavaScript SDK was written atop OO - http://github.com/stretchr/oo our
 * lightweight JavaScript object-orientation library.  See oo documentation for details
 * on how to use events and properties for the classes within this documentation.
 *
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
  apiVersion: "1.1",

  // _counter is the internal counter for Stretchr JSONP
  // requests.
  _counter: 0,

  PrefixFilterFields: ":",

  ResponseKeyStatus: "~status",
  ResponseKeyData: "~data",
  ResponseKeyErrors: "~errors",
  ResponseKeyErrorsMessage: "~message",
  ResponseKeyContext: "~context",

  ResponseKeyCollectionItems: "~items",

  ResponseKeyDataChanges: "~changes",
  ResponseKeyChangeInfoCreated: "~created",
  ResponseKeyChangeInfoUpdated: "~updated",
  ResponseKeyChangeInfoDeleted: "~deleted",
  ResponseKeyChangeInfoDeltas: "~deltas"

};

/**
 * Gets the next number in the global counter.
 */
Stretchr.counter = function(){
  return ++Stretchr._counter;
};

/**
 * Merges many objects into a new one.  None of the arguments
 * will be changed, and a fresh POJO is returned containing a shallow
 * copy of all arguments.
 */
Stretchr.merge = function(){
  var o = {};
  for (var a in arguments) {
    var arg = arguments[a];
    for (var k in arg) o[k] = arg[k];
  }
  return o;
};

/*
  oo
  v1.3.1
  github.com/stretchr/oo

  The worlds simplest JavaScript OO implementation.
  For if you just need cool classes, and nothing else.

  Copyright (c) 2013 Mat Ryer
  Please consider promoting this project if you find it useful.
  Be sure to check out the Licence: https://github.com/stretchr/oo#licence
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 1h=8(){5 k={1u:"1.3.1",10:[],11:{},L:8(c){6(k.11[c]){12 M k.13(c);m G}5 d=8(){6(!4.$14){12 M k.15(c);}4.$14.u(4);4.A.u(4,9)};d.7.A=8(){};d.$U={};d.7.$14=8(){n(5 a p 4.$w.$U){4[a]={};V=4.$w.$U[a].7;n(5 b p V){6(B V[b]==="8"){4[a][b]=V[b].P(4)}}}};5 e=[];n(5 i=1,l=9.o-1;i<l;i++){5 f=9[i];6(f){6(f.$1i){f=f.$1i(d,9)}6(!f)1v;6(f.$1j){d.$U[f.$16]=f;W(f.7,d.7)}y 6(B f=="1w"){W(f,d.7)}6(f.$1k){f.$1k(d,9)}6(f.$X){e.q(f.$X.P(f,d,9))}}y{1l("1x 1m 1y "+f+" 17 1z "+c+" w.")}}6(9.o>1){5 g=9[9.o-1];n(5 h p g){5 j=g[h];6(h.1A(0,1)==="$"){d[h]=j}y{d.7[h]=j}}}d.1n=8(){m"<{ z.L: "+4.$16+" }>"};d.$1j=v;d.7.1B=d.7.$w=d;k.10[k.10.o]=d.$16=c;k.11[c]=d;6(e.o>0){n(5 i p e){e[i]()}}m d}};k.F={$Y:8(c,d){c[d]=(8(){5 b=d;m 8(){6(9.o===1&&B 9[0]=="8"){5 a=[b,9[0]];4.Q.u(4,a)}y{5 a=[b];W(9,a);4.H.u(4,a)}m 4}})()},$X:8(a){a.Q=k.F.Q;a.H=k.F.H;a.Z=k.F.Z;a.18=k.F.18;6(a.7.19){n(5 i p a.7.19){5 b=a.7.19[i];k.F.$Y(a.7,b)}}},Q:8(a,b){4.r=4.r||{};4.r[a]=4.r[a]||[];4.r[a].q(b);m 4},Z:8(a,b){5 c=[];5 d=[a,4];n(5 i=2;i<9.o;i++){c.q(9[i]);d.q(9[i])}6(4.$w&&4.$w.r&&4.$w.r[a]){4.$w.H.u(4.$w,d)}5 e=[];6(4.r&&4.r[a]){e=4.r[a]}6(b&&b[a]){e.q(b[a])}6(e.o>0){n(5 i p e){5 f=e[i];5 g=f.u(4,c);6(g===x){m x}}}},H:8(a){5 b=[a,G];n(5 i=1;i<9.o;i++){b.q(9[i])}m 4.Z.u(4,b)},18:8(a,b){6(4.r&&4.r[a]){n(5 i p 4.r[a]){5 c=4.r[a][i];6(c==b){4.r[a].1C(i,1);m v}}}m x},R:8(a){5 b=9[9.o-1];6(B b!=="8"){12 M k.1a("R","1D 1E 1F 1G 1H 1b 1I 1m 1J.");}5 c=[];n(5 i=1;i<9.o-1;i++){c.q(9[i])}c.1K("1L:"+a);5 d=4.H.u(4,c);6(d===x){m x}d=b();c.q(d);c[0]=a;4.H.u(4,c);m d}};k.C={$X:8(a){6(a.7.I&&B a.7.I.o!="S"){n(5 b p a.7.I){k.C.$D(a.7,a.7.I[b],v,v,G)}}y 6(a.7.I){n(5 b p a.7.I){k.C.$D(a.7,b,v,v,a.7.I[b])}}6(a.7.J&&B a.7.J.o!="S"){n(5 b p a.7.J){k.C.$D(a.7,a.7.J[b],v,x,G)}}y 6(a.7.J){n(5 b p a.7.J){k.C.$D(a.7,b,v,x,a.7.J[b])}}6(a.7.K&&B a.7.K.o!="S"){n(5 b p a.7.K){k.C.$D(a.7,a.7.K[b],x,v,G)}}y 6(a.7.K){n(5 b p a.7.K){k.C.$D(a.7,b,x,v,a.7.K[b])}}},D:8(){5 a=[4];n(5 b p 9){a.q(9[b])}k.C.$D.u(4,a);m 4}};k.C.$D=8(c,d,e,f,g){6(c.Q){6(!c.1c){k.F.$Y(c,"1c")}k.F.$Y(c,d+"1o")}5 h=d;5 i;c.N=c.N||8(a){m"1M"+a};5 j=c.N(d);c.1d=c.1d||8(a,b){6(4.R){4.R("1c",d,4[j],b,8(){4.R(a+"1o",4[j],b,8(){4[4.N(a)]=b}.P(4))}.P(4))}y{4[4.N(a)]=b}m 4};c.1e=c.1e||8(a){m 4[4.N(a)]};c[j]=g||G;6(f!==x){6(f===v){i="1N"+d.1O(0).1P()+d.1Q(1)}y{i=f}c[i]=c[i]||8(a){4.1d(d,a);m 4}}6(e!==x){6(e!==v){h=e}c[h]=c[h]||8(){m 4.1e(d)}}m c};k.E=k.L("z.E",{A:8(a){4.1p=a},1n:8(){m"z.E: \\" + 1p + \\""}});k.13=k.L("z.13",k.E,{A:8(a){4["z.E"].A("1R 1S a w 1T \'"+a+"\' 1U 1V, 1W 1X 1Y w 1Z; e.g. 20."+a)}});k.15=k.L("z.15",k.E,{A:8(a){4["z.E"].A("1q 1r 17 21 a M 22; 23\'t 24 25 1b 26, 27 1b M 28: 5 29 = M "+a+"();")}});k.1a=k.L("z.1a",k.E,{A:8(a,b){4["z.E"].A("1q 1r 17 2a "+a+"; "+b)}});m k};5 1l=8(a){6(1f){6(1f.1s){1f.1s(a)}}};5 W=8(a,b){6(B a.o!=="S"&&B b.o!=="S"){n(5 s p a){b.q(a[s])}}y{n(5 s p a){6(a.2b(s))b[s]=a[s]}}};5 z=1h();5 1t=8(){5 b=9[0]||G,1g=9[1]||4,T=[],i=2,l=9.o,O;n(;i<l;i++){T.q(9[i])}O=8(){5 a=[];5 i=0;n(i=0,l=T.o;i<l;i++){a.q(T[i])}n(i=0,l=9.o;i<l;i++){a.q(9[i])}m b.u(1g,a)};O.2c=b;O.2d=1g;O.2e=T;m O};2f.7.P=8(){5 a=[],i=0,l=9.o;a.q(4);n(;i<l;i++){a.q(9[i])}m 1t.u(2g,a)};',62,141,'||||this|var|if|prototype|function|arguments|||||||||||||return|for|length|in|push|ooevents|||apply|true|class|false|else|oo|init|typeof|Properties|addProperty|Exception|Events|null|fire|properties|getters|setters|Class|new|getPropertyInternalName|bound|bind|on|withEvent|undefined|_args|bases|basePrototype|ooextend|afterClassDefined|addEvent|fireWith|classes|classesmap|throw|DuplicateClassNameException|initialiseBases|IncorrectSyntaxException|className|when|removeCallback|events|IncorrectArgumentsException|the|propertyChanged|setProperty|getProperty|console|_obj|ooreset|beforeInherited|isClass|afterInherited|oowarn|to|toString|Changed|message|Incorrect|syntax|warn|oobind|version|continue|object|Failed|inherit|building|substr|constructor|splice|The|last|argument|must|be|codeblock|execute|unshift|before|_|set|charAt|toUpperCase|slice|Cannot|define|because|already|exists|consider|namespacing|your|names|YourCompany|creating|instance|don|just|call|method|use|keyword|obj|calling|hasOwnProperty|func|context|args|Function|window'.split('|'),0,{}))

/** @class
 * Stretchr.Client represents a client that can be used to interact
 * with Stretchr services.
 * @property {string} projectName The name of the Stretchr project that this client will
 * interact with.
 * @property {string} apiKey The API key to use  when interacting with
 * the Stretchr services.
 * @property {Stretchr.Transport} transport The Transport object to use when making
 * real requests.
 */
Stretchr.Client = oo.Class("Stretchr.Client", oo.Events, oo.Properties, {

  properties: ["projectName", "apiKey", "host", "protocol", "apiVersion", "transport"],

  init: function(projectName, apiKey){

    this
      .setProjectName(projectName)
      .setApiKey(apiKey)
      .setTransport(new Stretchr.JSONPTransport(this))
      .setHost(projectName + ".stretchr.com")
      .setProtocol("http")
      .setApiVersion(1.1)
    ;

  },

  /**
   * Starts a new Request for the given path.
   * @param {string} path The path of the new request.
   * @memberOf Stretchr.Client.prototype
  */
  at: function(path) {
    return new Stretchr.Request(this, path);
  },

  /**
   * url generates a URL that makes up the request of the specified path.
   * @param {string} path The relative path of the request.
   * @memberOf Stretchr.Client.prototype
   */
  url: function(path) {

    // ensure it has the leading /
    if (path.substr(0,1) != "/") {
      path = "/"+path;
    }

    return [this.protocol(), "://", this.host(), "/api/v", this.apiVersion(), path].join("");

  },

});

/** @class
 * Stretchr.Request represents a single request to Stretchr services.
 * It is recommended that you use the `at` method on Stretchr.Client
 * instead of constructing this object directly.
 * @property {Stretchr.Client} client The client to use when making the
 * request.
 * @property {string} path The path for this Request.
 */
Stretchr.Request = oo.Class("Stretchr.Request", oo.Events, oo.Properties, {

  properties: ["client", "path"],

  init: function(client, path){
    this.setClient(client).setPath(path);
    this._params = new Stretchr.Bag(null, Stretchr.Bag.ParamBagOptions);
    this._where = new Stretchr.Bag(null, Stretchr.merge(Stretchr.Bag.ParamBagOptions, {
      keyPrefix: Stretchr.PrefixFilterFields
    }));
  },

  /**
  * Gets or sets parameters.
  * () = gets all the data
  * (key) = gets the value for the data with that key
  * (key, value) = sets the value for the data with that key
  * ({key:value,key2:value}) = sets the values for the keys in the object
  * @param {string|object} keyOrObject (optional) Either a string key or an object of multiple key/values
  * @param {string} value (optional) the value if a string key was provided
  * @memberOf Stretchr.Request.prototype
  */
  params: function(keyOrObject, value) {
    var v = this._params.data.apply(this._params, arguments);
    return typeof v === "undefined" ? this : v;
  },

  /**
  * Gets or sets filters.
  * () = gets all the data
  * (key) = gets the value for the data with that key
  * (key, value) = sets the value for the data with that key
  * ({key:value,key2:value}) = sets the values for the keys in the object
  * @param {string} keyOrObject (optional) Either a string key or an object of multiple key/values
  * @param {string} value (optional) the value if a string key was provided
  * @memberOf Stretchr.Request.prototype
  */
  where: function(keyOrObject, value) {
    var v = this._where.data.apply(this._where, arguments);
    return typeof v === "undefined" ? this : v;
  },

  /**
   * Gets the querystring segment for this request.
   */
  querystring: function(){
    return Stretchr.Bag.querystring(this._params, this._where);
  },

  url: function(){
    var qs = this.querystring();
    return this.client().url(this.path() + (qs != "" ? "?"+qs : ""))
  },


  /*
    Actions
    ----------------------------------------------------------------
  */

  read: function(options){
    this.client().transport().makeRequest(this, options);
  }

});

/** @class
 * Stretchr.Response represents a repsonse to a single Stretchr.Request.
 * @property {int} status() The HTTP Status code returned by the server.
 * @property {bool} success() Whether the request was a success or not.
 * @property {object} data() The data returned in the response.
 * @property {array} errors() A list of any errors that occurred.
 * @property {Stretchr.Client} client() The client used to generate this Repsonse.
 * @property {string} context() The client-context returned in the Response.
 */
Stretchr.Response = oo.Class("Stretchr.Response", oo.Properties, {

  getters: ["status", "data", "success", "errors", "context", "client", "request"],

  init: function(client, request, response) {

    this._client = client;
    this._status = response[Stretchr.ResponseKeyStatus];
    this._data = response[Stretchr.ResponseKeyData];
    this._success = this._status >= 200 && this._status <= 299;
    this._context = response[Stretchr.ResponseKeyContext];

    // collect any errors
    if (response[Stretchr.ResponseKeyErrors]) {
      this._errors = [];
      for (var err in response[Stretchr.ResponseKeyErrors]) {
        this._errors.push(response[Stretchr.ResponseKeyErrors][err][Stretchr.ResponseKeyErrorsMessage])
      }
    }

  },

  /**
  * Gets the Stretchr.Resource from the data in this response.
  * @memberOf Stretchr.Response.prototype
  */
  resource: function(){
    return new Stretchr.Resource(this.client(), this.data());
  },

  /**
  * Gets the Stretchr.ResourceCollection from the data in this response.
  * @memberOf Stretchr.Response.prototype
  */
  resources: function(){
    return new Stretchr.ResourceCollection(this.client(), this.data());
  },

  /**
  * Gets the Stretchr.ChangeInfo from the data in this response.
  * @memberOf Stretchr.Response.prototype
  */
  changes: function(){
    return new Stretchr.ChangeInfo(this.data()[Stretchr.ResponseKeyDataChanges]);
  }

});

/** @class
 * Stretchr.Resource represents a single resource.
 * @property {Stretchr.Client} client The client that relates to this resource.
 * @property {Stretchr.Request} request The request that caused this Response.
 */
Stretchr.Resource = oo.Class("Stretchr.Resource", oo.Events, oo.Properties, {

  getters: ["client"],

  init: function(client, data) {
    this._client = client;
    this._data = new Stretchr.Bag(data);
  },

  /**
  * Gets or sets data.
  * () = gets all the data
  * (key) = gets the value for the data with that key
  * (key, value) = sets the value for the data with that key
  * ({key:value,key2:value}) = sets the values for the keys in the object
  * @param {string|object} keyOrObject (optional) Either a string key or an object of multiple key/values
  * @param {string} value (optional) the value if a string key was provided
  * @memberOf Stretchr.Resource.prototype
  */
  data: function() {
    return this._data.data.apply(this._data, arguments) || this;
  }

});

/** @class
 * Stretchr.ResourceCollection represents a collection of Stretchr.Resource objects.
 * @property {Stretchr.Client} client The client that relates to this resource.
 * @property {array} rawData The raw data that makes up this collection.
 * @property (array of Stretchr.Resource) items The Resource items that make up this collection.
 */
Stretchr.ResourceCollection = oo.Class("Stretchr.ResourceCollection", oo.Properties, {

  getters: ["client", "rawData", "items"],

  init: function(client, data) {

    this._client = client;
    this._rawData = data;
    this._items = [];

    // make a Resource for each item
    var items = data[Stretchr.ResponseKeyCollectionItems];
    for (var index in items) {
      this._items.push(new Stretchr.Resource(client, items[index]));
    }

  },

  /**
  * Gets the number of resources currently held in this collection.
  * @memberOf Stretchr.ResourceCollection.prototype
  */
  count: function(){
    return this._items.length;
  }

});

/** @class
 * Stretchr.ChangeInfo holds details about changes that were made in response to
 * a request.
 * @property {array} rawData The raw data that makes up this collection.
 */
Stretchr.ChangeInfo = oo.Class("Stretchr.ChangeInfo", oo.Properties, {

  properties: ["rawData"],

  init: function(data) {

    this.setRawData(data);
    this._data = new Stretchr.Bag(data);

  },

  /**
  * Gets the number of resources that were created.
  * @memberOf Stretchr.ChangeInfo.prototype
  */
  created: function(){
    return this.data(Stretchr.ResponseKeyChangeInfoCreated);
  },

  /**
  * Gets the number of resources that were updated.
  * @memberOf Stretchr.ChangeInfo.prototype
  */
  updated: function(){
    return this.data(Stretchr.ResponseKeyChangeInfoUpdated);
  },

  /**
  * Gets the number of resources that were deleted.
  * @memberOf Stretchr.ChangeInfo.prototype
  */
  deleted: function(){
    return this.data(Stretchr.ResponseKeyChangeInfoDeleted);
  },

  /**
  * Gets an array containing data that changed.  The order of the
  * array reflects the order of the items from the request.
  * @memberOf Stretchr.ChangeInfo.prototype
  */
  deltas: function(){
    return this.data(Stretchr.ResponseKeyChangeInfoDeltas);
  },

  /**
  * Gets or sets data.
  * () = gets all the data
  * (key) = gets the value for the data with that key
  * (key, value) = sets the value for the data with that key
  * ({key:value,key2:value}) = sets the values for the keys in the object
  * @param {string|object} keyOrObject (optional) Either a string key or an object of multiple key/values
  * @param {string} value (optional) the value if a string key was provided
  * @memberOf Stretchr.Resource.prototype
  */
  data: function() {
    var v = this._data.data.apply(this._data, arguments);
    return typeof v === "undefined" ? this : v;
  }

});

/** @class
 * Stretchr.Transport is the base class for objects capable of communicating
 * with Stretchr services.
 * @property {string} host The host where requests will be made to.
 * @property {string} protocol The protocol to use when making requests (default: 'http')
 * @property {float} APIVersion The API version to target (default: 1.1)
 */
Stretchr.Transport = oo.Class("Stretchr.Transport", oo.Events, oo.Properties, {

  properties: ["client"],
  events: ["before", "after", "success", "error"],

  init: function(client){
    this
      .setClient(client)
    ;
  },

  /**
   * When overidden in a child class, makes a real request using the specified
   * options.
   */
  makeRequest: function(request, options){
    throw "Stretchr.Transport.makeRequest: Cannot use abstract Stretchr.Transport class, use a more concrete version instead.  Like Stretchr.JSONPTransport.";
  }

});

/**
 * Stretchr.TestTransport is a handy Transport alternative that allows you to easily
 * write unit tests for your Stretchr service code.  Simply make a TestTransport object,
 * assign it to the Stretchr.Client that you're using, then override the fakeResponse
 */
Stretchr.TestTransport = oo.Class("Stretchr.TestTransport", Stretchr.Transport, oo.Properties, {

  properties: ["requests"],

  /**
   * makeRequest calls fakeResponse to get a test response and handles it in the
   * normal way.
   * @fires before
   * @fires after
   * @fires success
   * @fires error
   * @memberOf Stretchr.TestTransport.prototype
   */
  makeRequest: function(request, options) {

    this._requests = this._requests || [];
    this._requests.push(arguments);

    // event: before
    this.fireWith("before", options, request, options);

    var response = this.fakeResponse(request, options);

    // make the response object
    var responseObject = new Stretchr.Response(this.client(), request, response);

    if (responseObject.success()) {
      this.success(responseObject);
    } else {
      this.error(responseObject);
    }

    // event: after
    this.fireWith("after", options, request, options);

  },

  /**
   * Override fakeResponse to provide your own responses to the requests.
   * @memberOf Stretchr.TestTransport.prototype
   */
  fakeResponse: function(options){
    var r = {};
    r[Stretchr.ResponseKeyStatus] = 200;
    return r;
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
   * @fires before
   * @fires after
   * @fires success
   * @fires error
   * @memberOf Stretchr.JSONPTransport.prototype
   */
  makeRequest: function(request, options) {

    // event: before
    this.fireWith("before", options, options);

    // make the callback function
    var callbackFunctionName = "scb" + Stretchr.counter();
    window[callbackFunctionName] = function(response) {

      // make the response object
      var responseObject = new Stretchr.Response(this.client(), request, response);

      if (responseObject.success()) {
        this.success(responseObject);
      } else {
        this.error(responseObject);
      }

      // event: after
      this.fireWith("after", options, options);

      // delete this function
      window[callbackFunctionName] = null;
      delete window[callbackFunctionName];

    }.bind(this);

    // add the script tag (JSONP)
    var script = document.createElement('script');
    script.src = request.url();
    document.getElementsByTagName('head')[0].appendChild(script);

    // save this for test use
    this.lastCallbackFunctionName = callbackFunctionName;

  }

});

/** @class
 * Stretchr.Bag is a container for data.  Whenever data changes, the bag
 * raises the `change` event, and will become `dirty()` until it is cleaned
 * with the `clean()` method.
 * @property {object} data (optional) The initial data to be stored in this bag.
 * @property {object} options (optional) An object of options.  "valueArrays"
 * @property {boolean} dirty() Whether the bag is dirty or not.
 */
Stretchr.Bag = oo.Class("Stretchr.Bag", oo.Events, oo.Properties, {

  properties: ["dirty"],
  events: ["change"],

  init: function(data, options){
    this._data = data || {};
    this._options = options || {};
    this.clean();
  },

  /**
   * _set sets the value to the specified key in the data but bypasses
   * events and clean/dirty considerations.
   *
   * It is used internally by set.
   * @memberOf Stretchr.Bag.prototype
   */
  _set: function(key, value) {

    if (!this._options["valueArrays"]) {
      this._data[key] = value;
    } else {

      if (typeof this._data[key] === "object" && typeof this._data[key].length !== "undefined") {
        // already an array
        this._data[key].push(value)
      } else if (typeof this._data[key] === "undefined") {
        // no key
        this._data[key] = [value];
      }

    }

  },

  /**
   * Sets the value to the specified key.
   * @param {string|Stretchr.bag} key The key to set, or the Stretchr.Bag to merge in.
   * @param {anything} value The value to assign to key.
   * @fires change
   * @memberOf Stretchr.Bag.prototype
   */
  set: function(key, value) {

    // handle set(bag)
    if (key.$class === Stretchr.Bag) {
      for (var k in key._data) {
        this.set(k, key._data[k]);
      }
      return this;
    }

    // handle set(key, value)
    this.setDirty(true);
    this.withEvent("change", this._data[key], value, function(){
      this._set(key, value);
    }.bind(this));
    return this;
  },

  /**
   * Gets the value for a specific key, or gets all the data.
   * @param {string} key (optional) The key whose value should be returned.
   * @memberOf Stretchr.Bag.prototype
   */
  get: function(key) {
    return key ? this._data[key] : this._data;
  },

  /**
   * Cleans the bag - meaning .dirty() will return false until something else
   * changes.
   * @memberOf Stretchr.Bag.prototype
   */
  clean: function(){
    this.setDirty(false);
  },

  /**
  * Abstracts the get/set methods and makes assumptions for you.
  * - Returns the value if just a key is given
  * - Returns all if no key or value is given
  * - Sets the key if a key/value is given
  * - Sets many keys if an object of keys/values is given
  * @param {string|object} keyOrObject (optional) States the key that you want to get the value for.
  * Returns all key/value pairs if none is given
  * @param {string} value (optional) States the value that should be applied to the above key
  * @memberOf Stretchr.Bag.prototype
  */
  data: function(keyOrObject, value) {

    if (arguments.length == 0) {
      // data()
      return this._data;
    }

    if (typeof keyOrObject != "object" && typeof value != "undefined") {

      // normal setter - data(keystring, value)
      this.set(keyOrObject, value);

    } else if (typeof keyOrObject != "object") {

      // getter with key - data(keystring)
      return this.get(keyOrObject);

    } else {

      // set the all the items in the object - data(newData)
      for (var k in keyOrObject) {
        this._set(k, keyOrObject[k]);
      }

    }

  },

  /**
   * Gets a URL query string representing the data in this map.
   */
  querystring: function(options) {

    var options = Stretchr.merge(this._options, options);
    var keyPrefix = options["keyPrefix"] || "";

    var items = [];
    for (var keyI in this._data)
      for (var valueI in this._data[keyI])
        items.push(encodeURIComponent(keyPrefix + keyI) + "=" + encodeURIComponent(this._data[keyI][valueI]));

    return items.join("&");

  }

});

/**
 * Generates a URL query string representing all the data specified
 * in all the specified bags.
 * @memberOf Stretchr.Bag
 */
Stretchr.Bag.querystring = function(){

  var segments = [];
  for (var a in arguments) {
    var bag = arguments[a];
    if (bag.$class != Stretchr.Bag) throw "Stretchr.Bag.querystring: Must only pass Stretchr.Bag objects."
    var qs = bag.querystring();
    if (qs != "") {
      segments.push(qs);
    }
  }

  return segments.join("&");

};

/**
 * Stretchr.Bag.ParamBagOptions is a set of options that describe
 * bag behaviour for URL parameters.  It should be passed in as the
 * 2nd argument to the Stretchr.Bag consturctor.
 */
Stretchr.Bag.ParamBagOptions = {
  valueArrays: true
};
