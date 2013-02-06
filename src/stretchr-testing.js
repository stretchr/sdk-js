/*

	Stretchr JavaScript SDK - Test support

	This file should be included if you intend to write test-driven code that utilises
	Stretchr.

	Copyright (c) 2012 Mat Ryer and Tyler Bunnell

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

// ensure we have the right file too
if (typeof Stretchr == "undefined") {
	throw "Stretchr: You must include the stretchr.js file as well as stretchr-testing.js"
}

Stretchr.NewTestSession = function(){

	s = Stretchr.NewSession("test", "public", "private")

	return s

}