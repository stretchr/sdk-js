buster.testCase("Request", {

	"NewRequest": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

		assert.equals(r._session, s, "session")
		assert.equals(r._path, "path")

		// ensure the key was set
		assert.equals(r._params["~key"][0], "pub")
		assert.equals(r._params["~always200"][0], "1")
		assert.equals(r._params["~callback"][0], "Stretchr.callback")
		assert.equals(r._params["~method"][0], "GET")

		assert.equals(r.onCompleted, Stretchr.doNothing)

	},

	"with": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

		assert.equals(r.with("~limit", 2), r, "with should chain")
		assert.equals(r._params["~limit"][0], 2, "params")

		r.with("something", "one").with("something", "two")

		assert.equals(r._params["something"].length, 2, "multiple with's with same key should build array")

	},

	"where": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

		assert.equals(r.where("name", "Mat"), r, "where should chain")
		assert.equals(r._filterparams[":name"][0], "Mat", "filterparams")

		r.where("something", "one").where("something", "two")

		assert.equals(r._filterparams[":something"].length, 2, "multiple where's with same key should build array")

	},

	"method": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

		assert.equals(r.method("POST"), r, "method should chain")
		assert.equals(r._params["~method"][0], "POST")

	},

	"body": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

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

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "path")

		assert.equals(r.bodyhash(), "", "No body")

		r.body({name: "Mat"})

		assert.equals(r.bodyhash(), "f5391eb500fc8296e052accf28430950fe24545c")

	},

	"allParamsString": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		// reset params for test purposes
		r._params = {}

		assert.equals(r.allParamsString(), "")

		r.with("one", 1).with("two", 2).with("three", 3)

		assert.equals(r.allParamsString(), "?one=1&three=3&two=2")

		r.where("one", 1).where("two", 2).where("three", 3)

		assert.equals(r.allParamsString(), "?:one=1&:three=3&:two=2&one=1&three=3&two=2")

	},

	"url": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		r.where("name", "Mat").with("~limit", 1)

		assert.equals(r.url(), "http://project.stretchr.com/api/v1/people?:name=Mat&~always200=1&~callback=Stretchr.callback&~key=pub&~limit=1&~method=GET")

		// set a body
		r.body({name: "Mat"})

		assert.equals(r.url(), "http://project.stretchr.com/api/v1/people?:name=Mat&~always200=1&~body=%7B%22name%22%3A%22Mat%22%7D&~bodyhash=f5391eb500fc8296e052accf28430950fe24545c&~callback=Stretchr.callback&~key=pub&~limit=1&~method=GET")

	},

	"safeUrl": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		r.where("name", "Mat").with("~limit", 1)
		r.body({name: "Mat"})

		// ensure url isn't corrupted by the stringToSign method
		assert.equals(r.safeUrl(), "http://project.stretchr.com/api/v1/people?:name=Mat&~always200=1&~body=%7B%22name%22%3A%22Mat%22%7D&~callback=Stretchr.callback&~key=pub&~limit=1&~method=GET")
		r.stringToSign()
		assert.equals(r.safeUrl(), "http://project.stretchr.com/api/v1/people?:name=Mat&~always200=1&~body=%7B%22name%22%3A%22Mat%22%7D&~callback=Stretchr.callback&~key=pub&~limit=1&~method=GET")

	},

	"stringToSign": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		assert.equals(r.stringToSign(), "GET&http://project.stretchr.com/api/v1/people?~always200=1&~callback=Stretchr.callback&~key=pub&~method=GET&~private=priv")

		r.method("POST").with("~limit", 1).where("name", "Mat")

		assert.equals(r.stringToSign(), "GET&http://project.stretchr.com/api/v1/people?:name=Mat&~always200=1&~callback=Stretchr.callback&~key=pub&~limit=1&~method=POST&~private=priv")

		// set a body
		r.body({name: "Mat"})

		assert.equals(r.stringToSign(), "GET&http://project.stretchr.com/api/v1/people?:name=Mat&~always200=1&~body=%7B%22name%22%3A%22Mat%22%7D&~bodyhash=f5391eb500fc8296e052accf28430950fe24545c&~callback=Stretchr.callback&~key=pub&~limit=1&~method=POST&~private=priv")

	},

	"signature": function(){

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		assert.equals(r.signature(), "8a925d7541098af5a908c0da608cd847ec72bbbc")

	},

	"signedUrl": function() {

		var s = Stretchr.NewSession("project", "pub", "priv")
		var r = Stretchr.NewRequest(s, "people")

		r.method("POST").with("~limit", 1).where("name", "Mat")

		// set a body
		r.body({name: "Mat"})

		assert.equals(r.signedUrl(), "http://project.stretchr.com/api/v1/people?:name=Mat&~always200=1&~body=%7B%22name%22%3A%22Mat%22%7D&~callback=Stretchr.callback&~key=pub&~limit=1&~method=POST&~sign=462fb1e9fdf5492ffb452424bf498a04961c397e")

	}

});