buster.testCase("Security", {

	"hash": function(){
		
		assert.equals(Stretchr.hash, Stretchr.hashSHA1, "Default hash should be hashSHA1")
		assert.equals(Stretchr.hashSHA1("abc"), "a9993e364706816aba3e25717850c26c9cd0d89d")
		assert.equals(Stretchr.hash("abc"), "a9993e364706816aba3e25717850c26c9cd0d89d")

    assert.equals(Stretchr.hash("GET&http://v1.pdlife.par.stretchr.com/api/v1/surveys?~always200=1&~body={\"name\":\"Mat\"}&~callback=Stretchr.callback&~context=1&~key=dqLrrYbA8OiH1uZidhWn37GbPU7t5U6N&~method=POST&~private=n2xJkeYYkAm4U9zR1AiBczBxY4U2yELF"), "12ac47251034c9a34257961764696ea219a269ae")

	}

});