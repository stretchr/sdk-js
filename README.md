# Stretchr JavaScript SDK

Stretchr SDK for JavaScript and HTML5.

Rewrite in progress.

## Testing your own projects
The Stretchr JS SDK includes a test transport that makes it easy to test your own projects that utilize Stretchr.  To get started, just include the `/src/test-transporter.js` file in your project, and create your stretchr client like this:

```javascript
var transporter = new Stretchr.TestTransporter(),
  stretchr = new Stretchr.Client("acc", "proj", "key", {transporter: transporter});
```

You can then preload test responses like this:

```javascript
transporter.responses.push(Stretchr.V1_1.Stubs.get_single)
stretchr.at("/collection/id").read({
  success: function(response) {
    result = response;
  }
});
expect(result.raw).toEqual(Stretchr.V1_1.Stubs.get_single);
```

You also have access to any requests that were made:

```javascript
  expect(transporter.requests[0][0].method).toEqual("GET");
```

There are stubs for each API version available in `/src/test-transporter.js`.

## Working on the SDK
If you want to contribute to the SDK, fork the repo and run `npm install` from the root project directory.

The project uses [GruntJS](http://gruntjs.com).

Running `grunt` will run the tests and minify the source for production.

Running `grunt watch` will monitor files for changes and run the tests/minification process automatically as you code.
