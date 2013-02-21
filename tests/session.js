buster.testCase("Session", {

	"New session": function(){

		//  DEPRECATED in favour of new Stretchr.Session(project, publicKey, privateKey);
  	// 	that we get thanks to oo.

		var s = Stretchr.NewSession("project-name", "public-key", "private-key")
		refute.isNull(s, "NewSession should return something")

		assert.equals(s._project, "project-name")
		assert.equals(s._publicKey, "public-key")
		assert.equals(s._privateKey, "private-key")

	},

	"init": function(){

		var s = new Stretchr.Session("project-name", "public-key", "private-key")
		refute.isNull(s, "new Stretchr.Session should return something")

		assert.equals(s._project, "project-name")
		assert.equals(s._publicKey, "public-key")
		assert.equals(s._privateKey, "private-key")

	},

	"at": function(){

		var s = Stretchr.NewSession("project-name", "public-key", "private-key")
		var request = s.at("path")

		assert.defined(request, "at should return new request")
		assert.equals(request._path, "path")
		assert.equals(request._session, s, "session")

	}

});