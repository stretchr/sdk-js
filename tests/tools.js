buster.testCase("Tools", {

	"stretchr.encodeMap": function(){	

		var a = {
			"c": [2],
			"a": [2, 1],
			"x": [2],
			"b": [3]
		}

		assert.equals(stretchr.encodeMap(a), "a=1&a=2&b=3&c=2&x=2")

	}

});