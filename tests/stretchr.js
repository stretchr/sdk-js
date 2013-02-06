buster.testCase("Stretchr", {

	"Namespaced object": function(){	
		assert.defined(Stretchr, "Stretchr")
		assert.equals(Stretchr.apiversion, "v1")
	},

	"Context value": function() {

		Stretchr._context = 0;

		assert.equals(Stretchr.context(), 1)
		assert.equals(Stretchr.context(), 2)
		assert.equals(Stretchr.context(), 3)
		assert.equals(Stretchr.context(), 4)
		assert.equals(Stretchr.context(), 5)		

	}

});