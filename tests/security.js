buster.testCase("Security", {

	"hash": function(){
		
		assert.equals(Stretchr.hash, Stretchr.hashSHA1, "Default hash should be hashSHA1")
		assert.equals(Stretchr.hashSHA1("abc"), "a9993e364706816aba3e25717850c26c9cd0d89d")
		assert.equals(Stretchr.hash("abc"), "a9993e364706816aba3e25717850c26c9cd0d89d")

	}

});