buster.testCase("Request", {

	"NewRequest": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		assert.equals(r._session, s, "session")
		assert.equals(r._path, "path")

		// ensure the key was set
		assert.equals(r._params["~key"][0], "pub")
		assert.equals(r._params["~always200"][0], "1")
		assert.equals(r._params["~callback"][0], "stretchr.callback")

		// ensure GET is assumed as the method
		assert.equals(r._method, "GET", "Default method")

		assert.equals(r.onCompleted, stretchr.doNothing)

	},

	"with": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		assert.equals(r.with("~limit", 2), r, "with should chain")
		assert.equals(r._params["~limit"][0], 2, "params")

		r.with("something", "one").with("something", "two")

		assert.equals(r._params["something"].length, 2, "multiple with's with same key should build array")

	},

	"where": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		assert.equals(r.where("name", "Mat"), r, "where should chain")
		assert.equals(r._filterparams[":name"][0], "Mat", "filterparams")

		r.where("something", "one").where("something", "two")

		assert.equals(r._filterparams[":something"].length, 2, "multiple where's with same key should build array")

	},

	"method": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		assert.equals(r.method("POST"), r, "method should chain")
		assert.equals(r._method, "POST")

	},

	"body": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		assert.equals(r.hasBody(), false)

		assert.equals(r.body({name: "Mat", age: 30}), r, "body should chain")
		assert.equals(r._body["age"], 30)
		assert.equals(r._params["~bodyhash"][0], "1bc102b3056f56c1851c6d11029c1086ad82ad33")
		assert.equals(r._params["~body"][0], r.bodystring())

		assert.equals(r.hasBody(), true)

		assert.equals(r.body("{'name':'Mat','age':29}"), r, "body as string should chain")
		assert.equals(r._body["age"], 29)
		assert.equals(r._params["~bodyhash"][0], "d8750963d5c0180dba3453e7c996c53df8bd557b")

		assert.equals(r.hasBody(), true)

		assert.equals(r.bodystring(), "{\"name\":\"Mat\",\"age\":29}")
		assert.equals(r._params["~body"][0], r.bodystring())

	},

	"bodyhash": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "path")

		assert.equals(r.bodyhash(), "", "No body")

		r.body({name: "Mat"})

		assert.equals(r.bodyhash(), "f5391eb500fc8296e052accf28430950fe24545c")

	},

	"allParamsString": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "people")

		// reset params for test purposes
		r._params = {}

		assert.equals(r.allParamsString(), "")

		r.with("one", 1).with("two", 2).with("three", 3)

		assert.equals(r.allParamsString(), "?one=1&three=3&two=2")

		r.where("one", 1).where("two", 2).where("three", 3)

		assert.equals(r.allParamsString(), "?%3Aone=1&%3Athree=3&%3Atwo=2&one=1&three=3&two=2")

	},

	"url": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "people")

		r.where("name", "Mat").with("~limit", 1)

		assert.equals(r.url(), "http://project.stretchr.com/api/v1/people?%3Aname=Mat&%7Ealways200=1&%7Ecallback=stretchr.callback&%7Ekey=pub&%7Elimit=1")

		// set a body
		r.body({name: "Mat"})

		assert.equals(r.url(), "http://project.stretchr.com/api/v1/people?%3Aname=Mat&%7Ealways200=1&%7Ebody=%7B%22name%22%3A%22Mat%22%7D&%7Ebodyhash=f5391eb500fc8296e052accf28430950fe24545c&%7Ecallback=stretchr.callback&%7Ekey=pub&%7Elimit=1")

	},

	"safeUrl": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "people")

		r.where("name", "Mat").with("~limit", 1)
		r.body({name: "Mat"})

		// ensure url isn't corrupted by the stringToSign method
		assert.equals(r.safeUrl(), "http://project.stretchr.com/api/v1/people?%3Aname=Mat&%7Ealways200=1&%7Ebody=%7B%22name%22%3A%22Mat%22%7D&%7Ecallback=stretchr.callback&%7Ekey=pub&%7Elimit=1")
		r.stringToSign()
		assert.equals(r.safeUrl(), "http://project.stretchr.com/api/v1/people?%3Aname=Mat&%7Ealways200=1&%7Ebody=%7B%22name%22%3A%22Mat%22%7D&%7Ecallback=stretchr.callback&%7Ekey=pub&%7Elimit=1")

	},

	"stringToSign": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "people")

		assert.equals(r.stringToSign(), "GET&http://project.stretchr.com/api/v1/people?%7Ealways200=1&%7Ecallback=stretchr.callback&%7Ekey=pub&%7Eprivate=priv")

		r.method("POST").with("~limit", 1).where("name", "Mat")

		assert.equals(r.stringToSign(), "POST&http://project.stretchr.com/api/v1/people?%3Aname=Mat&%7Ealways200=1&%7Ecallback=stretchr.callback&%7Ekey=pub&%7Elimit=1&%7Eprivate=priv")

		// set a body
		r.body({name: "Mat"})

		assert.equals(r.stringToSign(), "POST&http://project.stretchr.com/api/v1/people?%3Aname=Mat&%7Ealways200=1&%7Ebody=%7B%22name%22%3A%22Mat%22%7D&%7Ebodyhash=f5391eb500fc8296e052accf28430950fe24545c&%7Ecallback=stretchr.callback&%7Ekey=pub&%7Elimit=1&%7Eprivate=priv")

	},

	"signature": function(){

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "people")

		assert.equals(r.signature(), "02eed7116f7b4c212757f7de11f58d4a332d7caa")

	},

	"signedUrl": function() {

		var s = stretchr.WithSession("project", "pub", "priv")
		var r = stretchr.NewRequest(s, "people")

		r.method("POST").with("~limit", 1).where("name", "Mat")

		// set a body
		r.body({name: "Mat"})

		assert.equals(r.signedUrl(), "http://project.stretchr.com/api/v1/people?%3Aname=Mat&%7Ealways200=1&%7Ebody=%7B%22name%22%3A%22Mat%22%7D&%7Ecallback=stretchr.callback&%7Ekey=pub&%7Elimit=1&~sign=b919aa53a8d9d280162e5572957e4e19426bf7a9")

	}

});