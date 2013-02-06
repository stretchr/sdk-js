buster.testCase("Stretchr", {

	"Namespaced object": function(){	
		assert.defined(stretchr, "stretchr")
		assert.equals(stretchr.apiversion, "v1")
	},

	"Context value": function() {

		stretchr._context = 0;

		assert.equals(stretchr.context(), 1)
		assert.equals(stretchr.context(), 2)
		assert.equals(stretchr.context(), 3)
		assert.equals(stretchr.context(), 4)
		assert.equals(stretchr.context(), 5)		

	}

});