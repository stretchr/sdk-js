/*

  Stretchr JavaScript SDK v1.3.2
  /api/v1.1

  by Mat Ryer and Ryan Quinn
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

/*
  oo
  v1.3.2
  github.com/stretchr/oo

  The worlds simplest JavaScript OO implementation.
  For if you just need cool classes, and nothing else.

  Copyright (c) 2013 Mat Ryer
  Please consider promoting this project if you find it useful.
  Be sure to check out the Licence: https://github.com/stretchr/oo#licence
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 1p=8(){5 m={2c:"1.3.2",1f:[],16:{},O:8(c){6(m.16[c]){12 N m.17(c);o M}5 d=8(){6(!4.$13){12 N m.14(c);}4.$13.w(4);4.D.w(4,9)};d.7.D=8(){};d.$H={};d.7.$13=8(){n(5 a q 4.$x.$H){4[a]={};10=4.$x.$H[a].7;n(5 b q 10){6(C 10[b]==="8"){4[a][b]=10[b].U(4)}}}};5 e=[];n(5 i=1,l=9.p-1;i<l;i++){5 f=9[i];6(f){6(f.$1j){f=f.$1j(d,9)}6(!f)28;6(f.$1s){n(5 i q f.$H){5 g=f.$H[i];d.$H[g.$Z]=g}d.$H[f.$Z]=f;Y(f.7,d.7)}z 6(C f=="1I"){Y(f,d.7)}6(f.$1o){f.$1o(d,9)}6(f.$11){e.r(f.$11.U(f,d,9))}}z{1n("1A 1l 1x "+f+" 1c 1w "+c+" x.")}}6(9.p>1){5 h=9[9.p-1];n(5 j q h){5 k=h[j];6(j.2b(0,1)==="$"){d[j]=k}z{d.7[j]=k}}}d.1k=8(){o"<{ A.O: "+4.$Z+" }>"};d.$1s=v;d.7.27=d.7.$x=d;m.1f[m.1f.p]=d.$Z=c;m.16[c]=d;6(e.p>0){n(5 i q e){e[i]()}}o d}};m.G={$W:8(c,d){c[d]=(8(){5 b=d;o 8(){6(9.p===1&&C 9[0]=="8"){5 a=[b,9[0]];4.V.w(4,a)}z{5 a=[b];Y(9,a);4.L.w(4,a)}o 4}})()},$11:8(a){a.V=m.G.V;a.L=m.G.L;a.X=m.G.X;a.1b=m.G.1b;6(a.7.1e){n(5 i q a.7.1e){5 b=a.7.1e[i];m.G.$W(a.7,b)}}},V:8(a,b){4.u=4.u||{};4.u[a]=4.u[a]||[];4.u[a].r(b);o 4},X:8(a,b){5 c=[];5 d=[a,4];n(5 i=2;i<9.p;i++){c.r(9[i]);d.r(9[i])}6(4.$x&&4.$x.u&&4.$x.u[a]){4.$x.L.w(4.$x,d)}5 e=[];6(4.u&&4.u[a]){e=4.u[a]}6(b&&b[a]){e.r(b[a])}6(e.p>0){n(5 i q e){5 f=e[i];5 g=f.w(4,c);6(g===y){o y}}}},L:8(a){5 b=[a,M];n(5 i=1;i<9.p;i++){b.r(9[i])}o 4.X.w(4,b)},1b:8(a,b){6(4.u&&4.u[a]){n(5 i q 4.u[a]){5 c=4.u[a][i];6(c==b){4.u[a].1C(i,1);o v}}}o y},R:8(a){5 b=9[9.p-1];6(C b!=="8"){12 N m.1h("R","26 1O 2a 1y 1z 1g 1D 1l 1J.");}5 c=[];n(5 i=1;i<9.p-1;i++){c.r(9[i])}c.1U("1V:"+a);5 d=4.L.w(4,c);6(d===y){o y}d=b();c.r(d);c[0]=a;4.L.w(4,c);o d}};m.B={$11:8(a){6(a.7.K&&C a.7.K.p!="T"){n(5 b q a.7.K){m.B.$E(a.7,a.7.K[b],v,v,M)}}z 6(a.7.K){n(5 b q a.7.K){m.B.$E(a.7,b,v,v,a.7.K[b])}}6(a.7.J&&C a.7.J.p!="T"){n(5 b q a.7.J){m.B.$E(a.7,a.7.J[b],v,y,M)}}z 6(a.7.J){n(5 b q a.7.J){m.B.$E(a.7,b,v,y,a.7.J[b])}}6(a.7.I&&C a.7.I.p!="T"){n(5 b q a.7.I){m.B.$E(a.7,a.7.I[b],y,v,M)}}z 6(a.7.I){n(5 b q a.7.I){m.B.$E(a.7,b,y,v,a.7.I[b])}}},E:8(){5 a=[4];n(5 b q 9){a.r(9[b])}m.B.$E.w(4,a);o 4}};m.B.$E=8(c,d,e,f,g){6(c.V){6(!c.1a){m.G.$W(c,"1a")}m.G.$W(c,d+"1m")}5 h=d;5 i;c.P=c.P||8(a){o"1B"+a};5 j=c.P(d);c.18=c.18||8(a,b){6(4.R){4.R("1a",d,4[j],b,8(){4.R(a+"1m",4[j],b,8(){4[4.P(a)]=b}.U(4))}.U(4))}z{4[4.P(a)]=b}o 4};c.15=c.15||8(a){o 4[4.P(a)]};c[j]=g||M;6(f!==y){6(f===v){i="1E"+d.1F(0).1G()+d.1H(1)}z{i=f}c[i]=c[i]||8(a){4.18(d,a);o 4}}6(e!==y){6(e!==v){h=e}c[h]=c[h]||8(){o 4.15(d)}}o c};m.F=m.O("A.F",{D:8(a){4.1i=a},1k:8(){o"A.F: \\" + 1i + \\""}});m.17=m.O("A.17",m.F,{D:8(a){4["A.F"].D("1K 1L a x 1M \'"+a+"\' 1N 1v, 1P 1Q 1R x 1S; e.g. 1T."+a)}});m.14=m.O("A.14",m.F,{D:8(a){4["A.F"].D("1q 1r 1c 1W a N 1X; 1Y\'t 1Z 20 1g 21, 22 1g N 23: 5 24 = N "+a+"();")}});m.1h=m.O("A.1h",m.F,{D:8(a,b){4["A.F"].D("1q 1r 1c 25 "+a+"; "+b)}});o m};5 1n=8(a){6(1d){6(1d.1t){1d.1t(a)}}};5 Y=8(a,b){6(C a.p!=="T"&&C b.p!=="T"){n(5 s q a){b.r(a[s])}}z{n(5 s q a){6(a.29(s))b[s]=a[s]}}};5 A=1p();5 1u=8(){5 b=9[0]||M,19=9[1]||4,S=[],i=2,l=9.p,Q;n(;i<l;i++){S.r(9[i])}Q=8(){5 a=[];5 i=0;n(i=0,l=S.p;i<l;i++){a.r(S[i])}n(i=0,l=9.p;i<l;i++){a.r(9[i])}o b.w(19,a)};Q.2d=b;Q.2e=19;Q.2f=S;o Q};2g.7.U=8(){5 a=[],i=0,l=9.p;a.r(4);n(;i<l;i++){a.r(9[i])}o 1u.w(2h,a)};',62,142,'||||this|var|if|prototype|function|arguments||||||||||||||for|return|length|in|push|||ooevents|true|apply|class|false|else|oo|Properties|typeof|init|addProperty|Exception|Events|bases|setters|getters|properties|fire|null|new|Class|getPropertyInternalName|bound|withEvent|_args|undefined|bind|on|addEvent|fireWith|ooextend|className|basePrototype|afterClassDefined|throw|initialiseBases|IncorrectSyntaxException|getProperty|classesmap|DuplicateClassNameException|setProperty|_obj|propertyChanged|removeCallback|when|console|events|classes|the|IncorrectArgumentsException|message|beforeInherited|toString|to|Changed|oowarn|afterInherited|ooreset|Incorrect|syntax|isClass|warn|oobind|exists|building|inherit|must|be|Failed|_|splice|codeblock|set|charAt|toUpperCase|slice|object|execute|Cannot|define|because|already|last|consider|namespacing|your|names|YourCompany|unshift|before|creating|instance|don|just|call|method|use|keyword|obj|calling|The|constructor|continue|hasOwnProperty|argument|substr|version|func|context|args|Function|window'.split('|'),0,{}));

/*

  arg.js - v1.1
  JavaScript URL parameter processing once and for all.

  by Mat Ryer and Ryan Quinn
  Copyright (c) 2013 Stretchr, Inc.

  see https://github.com/stretchr/arg.js/blob/master/LICENSE.md

*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(7(j){j.12=7(){4 i=7(){5 i.17.19(j,8)};i.1k="1.1.0";i.x=7(s){6(!s)5{};6(s.9("=")===-1&&s.9("&")===-1)5{};s=i.A(s);4 a={};4 b=s.B("&");C(4 c y b){6(b.z(c)){4 d=b[c].B("=");4 e=M(d[0]),18=M(d[1]);i.w(a,e,18)}}5 a};i.11=7(s){s=M(s);Y(s.9("+")>-1){s=s.V("+"," ")};5 s};i.w=7(a,b,c){4 d=l c!=="o";4 e=-1;4 f={\'F\':F,\'K\':K,\'16\':16};6(l b==\'T\'||1e.1j(b)==\'[D 1m]\'){e=b.I(/[\\.\\[]/)}6(e===-1){6(i.S){c=c&&!1h(c)?+c:c===\'o\'?o:f[c]!==o?f[c]:i.11(c)}5 d?(a[b]=c):a[b]}4 g=b.v(0,e);4 h=b.v(e+1);E(b.1c(e)){u\'[\':a[g]=a[g]||[];h=h.V(\']\',\'\');6(h.I(/[\\.\\[]/)===-1){h=1f(h,10)}5 i.w(a[g],h,c);u\'.\':a[g]=a[g]||{};5 i.w(a[g],h,c)}5 a};i.t=7(a,b){E(l(a)){u"D":4 c=[];4 d;C(4 e y a){6(!a.z(e))W;4 f=a[e];6(l(e)==="o"||e.r===0||l(f)==="o")W;d=b?b+"."+e:e;6(l a.r!=="o"){d=b?b+"["+e+"]":e}6(l f==="D"){c.n(i.t(f,d))}1a{c.n(G(d)+"="+G(f))}}5 c.13("&")}5 G(a)};i.1d=7(){4 a=(i.14?i.H:i.m);4 b=[J.1i,a];4 c={};E(8.r){u 1:b.n(i.t(8[0]));U;u 2:b[0]=i.L(8[0]);c=i.x(8[0]);c=i.X(c,8[1]);b.n(i.t(c));U;u 3:b[0]=i.L(8[0]);b[1]=i.m;b.n(i.t(8[1]));(l(8[2])==="T")?b.n(i.q):b.n(i.H);b.n(i.t(8[2]))}4 s=b.13("");6(s.9(a)==s.r-a.r){s=s.v(0,s.r-a.r)}5 s};i.14=K;i.m="?";i.q="#";i.H="#?";i.S=F;i.Z=7(){4 a=i.x(i.N()+"&"+i.O());5 i.P?i.P:i.P=a};i.17=7(a,b){4 c=i.w(i.Z(),a);5 l(c)==="o"?b:c};i.1g=7(){5 i.Q?i.Q:i.Q=i.x(i.N())};i.15=7(){5 i.R?i.R:i.R=i.x(i.O())};i.N=7(){5 i.A(J.I)};i.O=7(){5 i.A(J.15)};i.A=7(s){6(s.9(i.m)>-1)s=s.B(i.m)[1];6(s.9(i.q)>-1)s=s.B(i.q)[1];6(s.9("=")===-1&&s.9("&")===-1)5"";Y(s.9(i.q)==0||s.9(i.m)==0)s=s.v(1);5 s};i.L=7(p){6(p.9(i.m)>-1)p=p.v(0,p.9(i.m));6(p.9(i.q)>-1)p=p.v(0,p.9(i.q));5 p};i.X=7(){4 a={};C(4 b y 8){6(8.z(b)){C(4 k y 8[b]){6(8[b].z(k)){a[k]=8[b][k]}}}}5 a};5 i};j.1l=12()})(1b);',62,85,'||||var|return|if|function|arguments|indexOf||||||||||||typeof|querySeperator|push|undefined||hashSeperator|length||stringify|case|substr|_access|parse|in|hasOwnProperty|_cleanParamStr|split|for|object|switch|true|encodeURIComponent|hashQuerySeperator|search|location|false|_cleanPath|decodeURIComponent|querystring|hashstring|_all|_query|_hash|coerceMode|string|break|replace|continue|merge|while|all||__decode|MakeArg|join|urlUseHash|hash|null|get|val|apply|else|window|charAt|url|toString|parseInt|query|isNaN|pathname|call|version|Arg|String'.split('|'),0,{}));

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
 * @version 1.3.2
 */
var Stretchr = {

  /** Whether to write out debug information or not. */
  debug: false,

  /** The SDK version. */
  version: "1.3.2",

  /** The default API version this SDK will
    * attempt to interact with.  You can modify this on a per Client
    * basis. */
  apiVersion: "1.1",

  defaultPageSize: 10,

  // _counter is the internal counter for Stretchr JSONP
  // requests.
  _counter: 0,

  ParamKey: "key",
  ParamCallback: "callback",
  ParamBody: "body",
  ParamAlways200: "always200",
  ParamMethod: "method",
  ParamOrder: "order",
  ParamSkip: "skip",
  ParamLimit: "limit",
  ParamAuth: "auth",

  PrefixFilterFields: ":",

  MethodGet: "GET",
  MethodPost: "POST",
  MethodPatch: "PATCH",
  MethodDelete: "DELETE",
  MethodPut: "PUT",

  ResourceKeyId: "~id",

  ResponseKeyStatus: "~status",
  ResponseKeyData: "~data",
  ResponseKeyErrors: "~errors",
  ResponseKeyErrorsMessage: "~message",
  ResponseKeyContext: "~context",

  ResponseKeyCollectionItems: "~items",
  ResponseKeyCollectionTotal: "~total",

  ResponseKeyDataChanges: "~changes",
  ResponseKeyChangeInfoCreated: "~created",
  ResponseKeyChangeInfoUpdated: "~updated",
  ResponseKeyChangeInfoDeleted: "~deleted",
  ResponseKeyChangeInfoDeltas: "~deltas",

  SessionKeyLoggedIn: "loggedIn",
  SessionKeyLoggedInYes: "YES",
  SessionKeyLoggedInNo: "NO",
  SessionKeyAuthCode: "auth",
  SessionKeyuserpath: "userpath",
  SessioncookiePrefix: "stretchr_", //for cookie store only

  UrlParamAuthKey: "auth",
  UrlParamAuthUser: "user"

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
 * Builds an options map from the specified parameters.  If you pass an object,
 * it will be returned untouched.  If you pass a function it will be set to the
 * 'after' field on a new object.
 */
Stretchr.fixoptions = function(){
  if (typeof arguments[0] === "object") {
    return arguments[0];
  }
  return {
    "after": (arguments[0] || null)
  };
};

/**
 * Logs to the console if available and if Stretchr.debug is true, otherwise does nothing.
 */
Stretchr.log = function(){
  if (!Stretchr.debug) return;
  if (console) {
    if (arguments[1] === true)
      console.warn.apply(console, [arguments[0]]);
    else
      console.info.apply(console, arguments);
  }
};

/**
 * @class
 * Stretchr.Error is the base class for all Stretchr code errors.  These are
 * distinct from server errors, in that they will require you to change your code
 * in order to correct the problem.
 */
Stretchr.Error = oo.Class("Stretchr.Error", oo.Properties, {
  getters: ["error"],
  toString: function(){
    return "(" + this.$class.name + ") " + this.error();
  }
});

Stretchr.ErrorAction = oo.Class("Stretchr.ErrorAction", Stretchr.Error, {
  init: function(message){
    this._error = message;
  }
});

Stretchr.ErrorActionCollectiveResource = new Stretchr.ErrorAction("URL must refer to a single resource a collection of resources.");

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

  properties: ["account", "project", "apiKey", "host", "protocol", "apiVersion", "transport", "sessionStore", "location"],

  /**
   * Initialize your client
   * var stretchr = new Stretchr.Client("acc", "proj", "key");
   *  
   * @param  {String} accountName Stretchr Account
   * @param  {String} projectName Stretchr Project
   * @param  {String} apiKey      Stretchr API Key
   * @param  {Object} options     Options
   * @return {Stretchr.Client}    Your Client
   */
  init: function(accountName, projectName, apiKey, options){
    var options = options || {};
    this
      .setAccount(accountName)
      .setProject(projectName)
      .setApiKey(apiKey)
      .setTransport(options.transport || new Stretchr.JSONPTransport(this))
      .setHost(options.host || "stretchr.com")
      .setProtocol(options.protocol || "https")
      .setApiVersion(options.apiVersion || Stretchr.apiVersion)
      .setSessionStore(options.sessionStore || new Stretchr.CookieSessionStore())
      .setLocation(new Stretchr.Location())
    ;

    this.checkParams();
  },

  /**
   * Starts a new Request for the given path.
   * @param {string} path The path of the new request.
   * @memberOf Stretchr.Client.prototype
  */
  at: function(path) {
    var r = new Stretchr.Request(this, path);

    // setup default parameters
    var params = {};

    // API key
    params[Stretchr.ParamKey] = this.apiKey();

    // auth
    if (this.isLoggedIn()) {
      params[Stretchr.ParamAuth] = this.authCode();
    }

    return r.params(params);
  },

  /**
   * Creates a new resource at the given path, optionally with the specified data.
   * @param {string} path The path of the new resource.
   * @param {object} data The initial data of the resource.
   */
  new: function(path, data) {
    var r = new Stretchr.Resource(this, path, data);
    r._data.setDirty(true);
    return r;
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
    return [this.protocol(), "://", this.account(), ".", this.host(), "/api/v", this.apiVersion(), "/", this.project(), path].join("");

  },

  /*
    Auth
    --------------------------------------------------------------------------------
  */

  /**
   * Loads a list of supported auth providers from Stretchr.
   *
   * On success, will raise the `success` event with a Stretchr.ResourceCollection
   * containing the providers.
   * @memberOf Stretchr.Client.prototype
   */
  loadAuthProviders: function(options) {

    var $success = options.success;
    options.success = function(response){
      if ($success) $success.apply(options, arguments);
    };

    this.at("~info/authproviders").read(options);
  },

  /**
   * Gets whether there is a user logged in or not.
   * @memberOf Stretchr.Client.prototype
   */
  isLoggedIn: function(options) {
    return this.sessionStore().get(Stretchr.SessionKeyLoggedIn) == Stretchr.SessionKeyLoggedInYes;
  },

  /**
   * Gets the URL that the user should be redirected to in order to log in.
   * @memberOf Stretchr.Client.prototype
   */
  loginUrl: function(provider, after) {
    var after = encodeURIComponent(after || location.href);
    return this.at("~auth/" + provider + "/login").rooturl() + "?after=" + after;
  },

  /**
   * Redirects the browser to the loginUrl() which lets the user log in.
   * @memberOf Stretchr.Client.prototype
   */
  login: function(provider) {
    this.location().redirect(this.loginUrl(provider));
  },

  /**
   * Sets the appropriate keys in the sessionStore to log the user in.
   * @memberOf Stretchr.Client.prototype
   */
  doLogin: function(authCode, userpath, options) {
    var options = options || {};
    // set some stuff in the store
    this.sessionStore()
      .set(Stretchr.SessionKeyLoggedIn, Stretchr.SessionKeyLoggedInYes)
      .set(Stretchr.SessionKeyAuthCode, authCode)
      .set(Stretchr.SessionKeyuserpath, userpath)
    ;

    if (!options.noEvents) {
      this.fire("login:success");
    }

    return true;

  },

  /**
   * Logs the user out by removing the necessary keys from the sessionStore.
   * @memberOf Stretchr.Client.prototype
   */
  logout: function(){

    // clear stuff out
    this.sessionStore()
      .set(Stretchr.SessionKeyLoggedIn, Stretchr.SessionKeyLoggedInNo)
      .set(Stretchr.SessionKeyAuthCode, "")
      .set(Stretchr.SessionKeyuserpath, "")
    ;

    return true;
  },

  /**
   * Gets the auth code of the currently logged in user.
   * @memberOf Stretchr.Client.prototype
   */
  authCode: function(){
    return this.sessionStore().get(Stretchr.SessionKeyAuthCode);
  },

  /**
   * Gets the user reference of the currently logged in user.
   * @memberOf Stretchr.Client.prototype
   */
  userpath: function() {
    return this.sessionStore().get(Stretchr.SessionKeyuserpath);
  },

  /**
   * Lets you check the current url for the required params for auth
   */
  checkParams: function() {
    if(this.location().param(Stretchr.UrlParamAuthKey)) {

      // log them in
      this.doLogin(this.location().param(Stretchr.UrlParamAuthKey), this.location().param(Stretchr.UrlParamAuthUser), {noEvents: true});

      // redirect - removing the auth parameters
      var args = this.location().params();
      delete args[Stretchr.UrlParamAuthKey];
      delete args[Stretchr.UrlParamAuthUser];

      this.location().redirect(Arg.url(args));

    }
  }

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

  properties: ["client", "path", "method"],

  init: function(client, path){
    this
      .setClient(client)
      .setPath(path)
      .setMethod(Stretchr.MethodGet)
    ;
    this._params = new Stretchr.Bag(null, Stretchr.Bag.ParamBagOptions);
    this._where = new Stretchr.Bag(null, Stretchr.merge(Stretchr.Bag.ParamBagOptions, {
      keyPrefix: Stretchr.PrefixFilterFields
    }));
  },

  /**
   * Gets whether the path of this request referrs to a collection (true), or
   * to a single resource (false).
   * @memberOf Stretchr.Request.prototype
   */
  isCollective: function(){
    var p = this.path();
    if (p.indexOf("/") != 0) {
      p = "/"+p;
    }
    return p.split("/").length % 2 == 0;
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
    return v === Stretchr.Bag.NoValue ? this : v;
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
    return v === Stretchr.Bag.NoValue ? this : v;
  },

  /**
   * Gets the querystring segment for this request.
   * @memberOf Stretchr.Request.prototype
   */
  querystring: function(){
    return Stretchr.Bag.querystring(this._params, this._where);
  },

  /**
   * Gets the absolute URL (by consulting the Client) for the current
   * path of this Request.
   * @memberOf Stretchr.Request.prototype
   */
  url: function(){
    var qs = this.querystring();
    return this.rooturl() + (qs != "" ? "?"+qs : "");
  },

  rooturl: function(){
    return this.client().url(this.path());
  },

  toString: function(){
    return this.method() + " " + this.url();
  },

  /**
   * Gets or sets the body for this request.  body() gets the body, body(newBody) sets it.
   * @memberOf Stretchr.Request.prototype
   */
  body: function() {
    if (arguments.length === 1) {

      var data = arguments[0];

      // extract data from resource
      if (data.$class === Stretchr.Resource) {
        data = data.data();
      }

      // setter
      this._body = data;

      return this;
    }
    return this._body;
  },

  /**
   * Gets whether this request has a body or not.
   * @memberOf Stretchr.Request.prototype
   */
  hasBody: function(){
    return this._body != null;
  },

  /**
   * Gets the body as a JSON string.  Useful for JSONP requests that need to put
   * the body into a URL query parameter.
   * @memberOf Stretchr.Request.prototype
   */
  bodystr: function(){
    return JSON.stringify(this._body);
  },

  /*
    Parameters
    ----------------------------------------------------------------
  */

  /**
   * Sets the order parameter for the request.
   * @param {string} value The field(s) to order by.
   * @memberOf Stretchr.Request.prototype
   */
  order: function(value) {
    this._params.set(Stretchr.ParamOrder, value, true);
    return this;
  },

  /**
   * Sets the skip parameter for the request which indicates the number of
   * resources to skip.  It is recommended that you use the page() method instead.
   * @param {number} value The number of resources to skip.
   * @memberOf Stretchr.Request.prototype
   */
  skip: function(value) {
    this._params.set(Stretchr.ParamSkip, value, true);
    return this;
  },

  /**
   * Sets the limit parameter for the request which indicates the number of
   * resources to return.  It is recommended that you use the page() method instead.
   * @param {number} value The number of resources to return.
   * @memberOf Stretchr.Request.prototype
   */
  limit: function(value) {
    this._params.set(Stretchr.ParamLimit, value, true);
    return this;
  },

  /**
   * Sets the page of resources to get.
   * @param {number} page The number page to get (starting at 1)
   * @param {number} pageSize (optional) The number of items to return per page.  Default: 10.
   * @memberOf Stretchr.Request.prototype
   */
  page: function(page, pageSize) {
    pageSize = pageSize || Stretchr.defaultPageSize;
    return this.skip(pageSize*(page-1)).limit(pageSize);
  },

  /*
    Actions
    ----------------------------------------------------------------
  */

  /**
   * Performs a read request.
   * @param {object} options The options to use when making the request.
   * @memberOf Stretchr.Request.prototype
   */
  read: function(options){
    this.setMethod(Stretchr.MethodGet).client().transport().makeRequest(this, options);
    return this;
  },

  /**
   * Creates the specified resource.
   * @param {object} options The options to use when making the request.
   * @param {object|Stretchr.Resource} data Either a POJO of the data to create, or an existing Stretchr.Resource.
   * @memberOf Stretchr.Request.prototype
   */
  create: function(data, options) {

    if (this.isCollective()) {
      // e.g.  POST /people
      this.setMethod(Stretchr.MethodPost);
    } else {
      // e.g.  PUT /people/123
      this.setMethod(Stretchr.MethodPut);
    }

    this.body(data).client().transport().makeRequest(this, options);

    return this;
  },

  /**
   * Replaces an entire resource.
   * @param {object} options The options to use when making the request.
   * @param {object|Stretchr.Resource} data Either a POJO of the data to create, or an existing Stretchr.Resource.
   * @memberOf Stretchr.Request.prototype
   */
  replace: function(data, options) {

    if (this.isCollective()) throw Stretchr.ErrorActionCollectiveResource;

    this.body(data).setMethod(Stretchr.MethodPut).client().transport().makeRequest(this, options);
    return this;
  },

  /**
   * Updates only some fields of a resource.
   * @param {object} options The options to use when making the request.
   * @param {object|Stretchr.Resource} data Either a POJO of the data to create, or an existing Stretchr.Resource.
   * @memberOf Stretchr.Request.prototype
   */
  update: function(data, options) {

    if (this.isCollective()) throw Stretchr.ErrorActionCollectiveResource;

    this.body(data).setMethod(Stretchr.MethodPatch).client().transport().makeRequest(this, options);
    return this;
  },

  /**
   * Removes a resource or many resources.
   * @param {object} options The options to use when making the request.
   * @param {object|Stretchr.Resource} data Either a POJO of the data to create, or an existing Stretchr.Resource.
   * @memberOf Stretchr.Request.prototype
   */
  remove: function(options) {
    this.setMethod(Stretchr.MethodDelete).client().transport().makeRequest(this, options);
    return this;
  }

});

/** @class
 * Stretchr.Response represents a repsonse to a single Stretchr.Request.
 * @property {int} status() The HTTP Status code returned by the server.
 * @property {bool} success() Whether the request was a success or not.
 * @property {object} data() The data returned in the response.
 * @property {array} errors() A list of any errors that occurred.
 * @property {array} errorMessage() The message from the last error in the errors, or an empty string if there aren't any errors.
 * @property {Stretchr.Client} client() The client used to generate this Repsonse.
 * @property {string} context() The client-context returned in the Response.
 */
Stretchr.Response = oo.Class("Stretchr.Response", oo.Properties, {

  getters: ["status", "data", "items", "success", "errors", "errorMessage", "context", "client", "request", "path", "raw"],

  init: function(client, request, response) {

    this._raw = response;
    this._client = client;
    this._status = response[Stretchr.ResponseKeyStatus];
    this._data = response[Stretchr.ResponseKeyData];
    this._items = [];
    if (this._data) {
      if (this._data[Stretchr.ResponseKeyCollectionItems]) {
        this._items = this._data[Stretchr.ResponseKeyCollectionItems];
      } else {
        this._items = [this._data];
      }
    }
    this._success = this._status >= 200 && this._status <= 299;
    this._changes = response[Stretchr.ResponseKeyDataChanges];
    this._context = response[Stretchr.ResponseKeyContext];
    this._request = request;
    if (request) this._path = request.path();
    this._errorMessage = "";

    // collect any errors
    if (response[Stretchr.ResponseKeyErrors]) {
      this._errors = [];
      for (var err in response[Stretchr.ResponseKeyErrors]) {
        this._errorMessage = response[Stretchr.ResponseKeyErrors][err][Stretchr.ResponseKeyErrorsMessage];
        this._errors.push(this._errorMessage);
      }
    }

  },

  /**
  * Gets the Stretchr.Resource from the data in this response.
  * @memberOf Stretchr.Response.prototype
  */
  resource: function(){
    return new Stretchr.Resource(this.client(), this.path(), this.data());
  },

  /**
  * Gets the Stretchr.ResourceCollection from the data in this response.
  * @memberOf Stretchr.Response.prototype
  */
  resources: function(){
    return new Stretchr.ResourceCollection(this.client(), this.path(), this.data());
  },

  /**
  * Gets the Stretchr.ChangeInfo from the data in this response.
  * @memberOf Stretchr.Response.prototype
  */
  changes: function(){
    return new Stretchr.ChangeInfo(this._changes);
  }

});

/**
 * Stretchr.ResponseNothingToDo is a constant Stretchr.Response object that is returned
 * when methods did no actual work (e.g. when you call save() after no data has changed).
 *
 * `s of this kind are still considered successful.
 */
Stretchr.ResponseNothingToDo = new Stretchr.Response(null, null, {
  "~status": 200,
  "~info": "There was nothing to do"
});

/** @class
 * Stretchr.Resource represents a single resource.
 * @property {Stretchr.Client} client The client that relates to this resource.
 * @property {Stretchr.Request} request The request that caused this Response.
 */
Stretchr.Resource = oo.Class("Stretchr.Resource", oo.Events, oo.Properties, {

  getters: ["client", "path"],

  init: function(client, path, data) {
    this._client = client;
    this._path = path;
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
    var v = this._data.data.apply(this._data, arguments);
    return v === Stretchr.Bag.NoValue ? this : v;
  },

  /**
   * Gets whether this resource has an ID or not.
   * @memberOf Stretchr.Resource.prototype
   */
  hasId: function(){
    return this._data.has(Stretchr.ResourceKeyId);
  },

  /**
   * Gets the ID for this resource, or returned undefined if there is
   * no ID.  You can use hasId() to see if there is an ID for this resource
   * before calling id() to get it.
   * @memberOf Stretchr.Resource.prototype
   */
  id: function(){
    return this.data(Stretchr.ResourceKeyId);
  },

  /**
   * Saves the changes to this resource.
   * @param {object} options The options to use when saving this resource.
   * @memberOf Stretchr.Resource.prototype
   */
  save: function(options){

    if (!this._data.dirty()) {

      // nothing to save - just return success to the event handlers
      this.fireWith("success", options, Stretchr.ResponseNothingToDo, null, options);
      this.fireWith("after", options, Stretchr.ResponseNothingToDo, null, options);

    } else {

      // something to save

      var request = this._client.at(this.path());
      options.$success = options.success;
      options.success = function(response){

        var changes = response.changes().deltas()[0];
        this._data.data(changes);

        // call original method
        if (options.$success) options.$success.apply(options, arguments);

      }.bind(this);

      if (this.hasId()) {

        // ensure the path contains the ID
        if (request.isCollective()) {
          // append the ID to the path
          request._path += "/" + this.id();
        }

        // update
        request.update(this._data.delta(), options);

      } else {

        // create
        request.create(this, options);

      }

    }

    // chaining
    return this;

  }

});

/** @class
 * Stretchr.ResourceCollection represents a collection of Stretchr.Resource objects.
 * @property {Stretchr.Client} client The client that relates to this resource.
 * @property {array} rawData The raw data that makes up this collection.
 * @property (array of Stretchr.Resource) items The Resource items that make up this collection.
 */
Stretchr.ResourceCollection = oo.Class("Stretchr.ResourceCollection", oo.Properties, {

  getters: ["client", "rawData", "items", "path", "total", "hasTotal"],

  init: function(client, path, data) {

    this._client = client;
    this._rawData = data;
    this._path = path;
    this._hasTotal = typeof(data[Stretchr.ResponseKeyCollectionTotal]) !== "undefined";
    this._total = data[Stretchr.ResponseKeyCollectionTotal];
    this._items = [];

    // make a Resource for each item
    var items = data[Stretchr.ResponseKeyCollectionItems];
    for (var index in items) {
      this._items.push(new Stretchr.Resource(client, path, items[index]));
    }

  },

  /**
  * Gets the number of resources currently held in this collection.
  * @memberOf Stretchr.ResourceCollection.prototype
  */
  count: function(){
    return this._items.length;
  },

  /**
   * Gets the total number of pages given the specified page size.
   * @memberOf Stretchr.ResourceCollection.prototype
   */
  pagecount: function(pageSize){
    if (!this._hasTotal) {
      throw "Cannot use pagecount without a total, add .params(\"total\",1) to your request."
    }
    return Math.ceil(this.total() / pageSize);
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
    return this.data(Stretchr.ResponseKeyChangeInfoCreated) || 0;
  },

  /**
  * Gets the number of resources that were updated.
  * @memberOf Stretchr.ChangeInfo.prototype
  */
  updated: function(){
    return this.data(Stretchr.ResponseKeyChangeInfoUpdated) || 0;
  },

  /**
  * Gets the number of resources that were deleted.
  * @memberOf Stretchr.ChangeInfo.prototype
  */
  deleted: function(){
    return this.data(Stretchr.ResponseKeyChangeInfoDeleted) || 0;
  },

  /**
  * Gets an array containing data that changed.  The order of the
  * array reflects the order of the items from the request.
  * @memberOf Stretchr.ChangeInfo.prototype
  */
  deltas: function(){
    return this.data(Stretchr.ResponseKeyChangeInfoDeltas) || [];
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
    return v === Stretchr.Bag.NoValue ? this : v;
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
   * @memberOf Stretchr.Transport.prototype
   */
  makeRequest: function(request, options){
    throw "Stretchr.Transport.makeRequest: Cannot use abstract Stretchr.Transport class, use a more concrete version instead.  Like Stretchr.JSONPTransport.";
  }

});

/**
 * @class
 * Stretchr.TestTransport is a handy Transport alternative that allows you to easily
 * write unit tests for your Stretchr service code.  Simply make a TestTransport object,
 * assign it to the Stretchr.Client that you're using, then override the fakeResponse
 * method.  See the test/testfiles/request.js test files for examples on how to do this.
 * (find "transport.fakeResponse" in the code)
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

    options = Stretchr.fixoptions(options);
    this._requests = this._requests || [];
    this._requests.push(arguments);

    // event: before
    this.fireWith("before", options, request, options);

    var response = this.fakeResponse(request, options);

    // make the response object
    var responseObject = new Stretchr.Response(this.client(), request, response);

    if (responseObject.success()) {
      this.fireWith("success", options, responseObject, response, options);
    } else {
      this.fireWith("error", options, responseObject, response, options);
    }

    // event: after
    this.fireWith("after", options, responseObject, response, options);

  },

  /**
   * Override fakeResponse to provide your own responses to the requests.
   * If you do not override fakeResponse, it will just return a successful
   * response with no data and no errors.
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

    options = Stretchr.fixoptions(options);

    Stretchr.log("<begin> Make JSONP request", true);
    Stretchr.log(request);
    Stretchr.log(options);

    // event: before
    this.fireWith("before", options, request, options);

    // make the callback function
    var callbackFunctionName = "sc" + Stretchr.counter();
    window[callbackFunctionName] = (function(){

      return function(response) {

        Stretchr.log("<begin> Received JSONP response", true);
        Stretchr.log(response);

        // make the response object
        var responseObject = new Stretchr.Response(this.client(), request, response);

        Stretchr.log(responseObject);

        if (responseObject.success()) {
          this.fireWith("success", options, responseObject, response, options);
        } else {
          this.fireWith("error", options, responseObject, response, options);
        }

        // event: after
        this.fireWith("after", options, responseObject, response, options);

        // delete this function
        window[callbackFunctionName] = null;
        delete window[callbackFunctionName];

        Stretchr.log("<end>", true);

      }.bind(this);

    }.bind(this))();

    // setup the JSONP stuff for this request
    request.params(Stretchr.ParamCallback, callbackFunctionName);
    request.params(Stretchr.ParamAlways200, 1);
    request.params(Stretchr.ParamMethod, request.method());
    if (request.hasBody()) {
      request.params(Stretchr.ParamBody, request.bodystr());
    }

    // add the script tag (JSONP)
    var script = document.createElement('script');
    script.src = request.url();
    document.getElementsByTagName('head')[0].appendChild(script);

    // save this for test use
    this.lastCallbackFunctionName = callbackFunctionName;

    Stretchr.log("<end>", true);

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
  getters: ["delta"],
  events: ["change"],

  init: function(data, options){
    this._data = data || {};
    this._options = options || {};
    this._delta = {};
    this.clean();
  },

  /**
   * _set sets the value to the specified key in the data but bypasses
   * events and clean/dirty considerations.
   *
   * It is used internally by set.
   * @memberOf Stretchr.Bag.prototype
   */
  _set: function(key, value, absolute) {

    if (!this._options["valueArrays"]) {
      this._data[key] = value;
    } else {

      if (absolute)
        delete this._data[key];

      if (typeof this._data[key] === "object" && typeof this._data[key].length !== "undefined") {
        // already an array
        this._data[key].push(value)
      } else if (typeof this._data[key] === "undefined") {
        // no key
        this._data[key] = [value];
      }

    }

    this._delta[key] = this._data[key];

  },

  /**
   * Sets the value to the specified key.
   * @param {string|Stretchr.bag} key The key to set, or the Stretchr.Bag to merge in.
   * @param {anything} value The value to assign to key.
   * @fires change
   * @memberOf Stretchr.Bag.prototype
   */
  set: function(key, value, absolute) {

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
      this._set(key, value, absolute);
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
   * Gets whether this bag has a value for the specified key or not.
   * @memberOf Stretchr.Bag.prototype
   */
  has: function(key) {
    return typeof this._data[key] !== "undefined";
  },

  /**
   * Cleans the bag - meaning .dirty() will return false until something else
   * changes.
   * @memberOf Stretchr.Bag.prototype
   */
  clean: function(){
    this.setDirty(false);
    this._delta = {}; // reset the delta
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

    // nothing to return
    return Stretchr.Bag.NoValue;

  },

  /**
   * Gets a URL query string representing the data in this map.
   * @memberOf Stretchr.Bag.prototype
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
 * NoValue is a special object that gets returned by the Stretchr.Bag.data method
 * when no value is expected.  If you are writing a wrapper to the data method
 * that supports chaining (the data method does not) then you should test for
 * the return being Stretchr.Bag.NoValue, and if so return the object being
 * chained.  Otherwise, return the
 */
Stretchr.Bag.NoValue = {
  "Stretchr.Bag.NoValue": true
};

/**
 * Generates a URL query string representing all the data specified
 * in all the specified bags.
 * @memberOf Stretchr.Bag
 */
Stretchr.Bag.querystring = function(){

  var segments = [];
  for (var a in arguments) {
    var bag = arguments[a];
    if (bag.$class != Stretchr.Bag) throw "Stretchr.Bag.querystring: Must only pass Stretchr.Bag objects.";
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

/**
 * @class
 * CookieSessionStore represents a storage backed by the browsers cookies and is the default
 * implementation used by clients.
 */
Stretchr.CookieSessionStore = oo.Class("Stretchr.CookieSessionStore", oo.Events, {

  events: ["change"],

  /**
   * Initialize the session store, we do this for you
   * with some default options, but if you want to set things
   * within the cookie, just initialize your own with your own
   * settings
   * Options:
   *  - expires
   *  - expireDays (convenience method, just include the number of days)
   *  - secure
   *  - domain (default to current, use ".domain.com" for all subdomains)
   *  - path
   * @param  {Object} options cookie options
   */
  init: function(options){
    this._options = options || {};
    this._options.expireDays = this._options.expireDays || 28;
    if (this._options.expireDays) {
      //calculate the date they meant
      var date = new Date();
      date.setDate(date.getDate() + this._options.expireDays);
      //save it in the cookie format
      this._options.expires = date.toUTCString();
      //now remove the convenience setting from the options object
      delete this._options.expireDays;
    }
  },

  /**
   * Sets a value in the store.  Returns this for chaining.
   * @param {string} key The key to set.
   * @param {string} value The value to set.
   * @param {object} options Event options
   * @memberOf Stretchr.CookieSessionStore.prototype
   */
  set: function(key, value, options) {

    // set the cookie value
    var key = Stretchr.SessioncookiePrefix + key;
    Stretchr.cookie.set(key, value, this._options.expires, this._options.path, this._options.domain, this._options.secure);

    // raise the success event
    this.fireWith("change", options, key, value);

    // chain
    return this;

  },

  /**
   * Gets a value from the store.
   * @param {string} key The key to get.
   * @memberOf Stretchr.CookieSessionStore.prototype
   */
  get: function(key) {
    var key = Stretchr.SessioncookiePrefix+key;
    return Stretchr.cookie.get(key)
  }

});

/**
 * Used to handle cookies on the page
 * https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 */
Stretchr.cookie = {
  get: function (sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  set: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  remove: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
    return true;
  },
  has: function (sKey) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  }
};

/**
 * Lets you manage the location of the window
*/
Stretchr.Location = oo.Class("Stretchr.Location", oo.Properties, {
  /**
   * Lets you grab any param from the url
   */
  param: function(name) {
    return Arg(name);
  },

  /**
   * Gets all parameters.
   */
  params: function(){
    return Arg.all();
  },

  /**
   * Redirects the window
   * Abstracted out to make testing possible
   */
  redirect: function(url) {
    window.location.href = url;
  }
});

/**
 * Test Location
 * Allows you to perform tests with params and redirects
 */
Stretchr.TestLocation = oo.Class("Stretchr.TestLocation", {
  init: function() {
    this._params = {};
    this._history = [];
  },

  /**
   * Lets you set params
   */
  setParam: function(name, value) {
    this._params[name] = value;
  },

  /**
   * Lets you grab any param from the url
   */
  param: function(name) {
    return this._params[name];
  },

  params: function(){
    return this._params;
  },

  /**
   * Redirects the window
   * Abstracted out to make testing possible
   */
  redirect: function(url) {
    this._history.push(url);
  },

  history: function() {
    return this._history;
  }
});

