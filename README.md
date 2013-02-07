# Stretchr JavaScript SDK

The Stretchr JavaScript SDK allows you to interact with the Stretchr services from any web enabled device.  This SDK makes use of Stretchr's [JSONP](http://json-p.org) capabilities behind the scenes, providing an easy to use interface to developers.

## Getting started

Once you have created your Stretchr project and have your public and private keys, you can start using the Stretchr JavaScript SDK.

### Importing Stretchr JavaScript SDK

You can either use the [latest code](https://raw.github.com/stretchrcom/sdk-js/master/src/stretchr.js) directly from GitHub, or else [download](https://github.com/stretchrcom/sdk-js/tags) a copy to host yourself.  We recommend that you pick a specific version and stick to it, in case things change on the server and it breaks your code.

### Simple HTML page

    <!DOCTYPE html>
    <html>
      <head>
        Stretchr SDK Example
      </head>
      <body>
      
        <!-- import the latest Stretchr SDK -->
        <script src="https://raw.github.com/stretchrcom/sdk-js/master/src/stretchr.js"></script>
        
        <script>
        
          // setup my session
          stretchr = Stretchr.NewSession("project", "public-key", "private-key");
          
          // load all messages
          stretchr.at("messages").read(function(response){
            for (message in response["~d"]["~i"]) {
              console.log("Loaded message: " + message.text)
            }
          })
        
        </script>
      </body>
    </html>

## Usage

### Creating a session

To use Stretchr services in JavaScript, you must first create a `Session` object:

    s = Stretchr.NewSession("project", "public-key", "private-key")

  * `project` is the fully qualified name of your project
  * `public-key` is your public key
  * `private-key` is your private key

It is good practice to name your `Session` variable `stretchr` which means you can write easy to read code, as in the following examples.

### Reading a single resource

    stretchr.at("people/123").read(function(response){
    
      if (response["~s"] != 200) {
        
        // TODO: handle errors
        
      } else {
           
        var resource = response["~d"]
    
      }
      
    })
    
### Reading many resources

    stretchr.at("people").read(function(response){
    
      if (response["~s"] != 200) {
        
        // TODO: handle errors
        
      } else {
           
        var resources = response["~d"]["~i"]
    
      }
      
    })
    
You can use the `where` and `with` functions to add additional parameters to your request.  For example, to only read the first three resources:

    stretchr.at("people").with("~limit", 3).read(…)
    
Or to find all people over 30 years old:

    stretchr.at("people").where("age", ">30").read(…)
    
### Creating a resource

    stretchr.at("people").body({name: "Mat", age: 30}).create(function(response){
    
      if (response["~s"] != 200) {
        
        // TODO: handle errors
        
      } else {
           
        var changeInfo = response["~ch"]
    
      }
      
    })
    
### Creating many resources

    stretchr.at("people").body([{name: "Mat", age: 30},{name: "Tyler", age: 27}]).create(function(response){
    
      if (response["~s"] != 200) {
        
        // TODO: handle errors
        
      } else {
           
        var changeInfo = response["~ch"]
    
      }
      
    })
    
    
### Updating a resource

    stretchr.at("people/123").body({age: 31}).update(function(response){
    
      if (response["~s"] != 200) {
        
        // TODO: handle errors
        
      } else {
           
        var changeInfo = response["~ch"]
    
      }
      
    })
    
### Replacing a resource

    stretchr.at("people/123").body({age: 31}).replace(function(response){
    
      if (response["~s"] != 200) {
        
        // TODO: handle errors
        
      } else {
           
        var changeInfo = response["~ch"]
    
      }
      
    })
    
### Deleting a single resource

    stretchr.at("people/123").delete(function(response){
    
      if (response["~s"] != 200) {
        
        // TODO: handle errors
        
      } else {
           
        var changeInfo = response["~ch"]
    
      }
      
    })
    
### Deleting many resources

    stretchr.at("people").delete(function(response){
    
      if (response["~s"] != 200) {
        
        // TODO: handle errors
        
      } else {
           
        var changeInfo = response["~ch"]
    
      }
      
    })
    
## Known issues

### Security

  * Currently, using the Stretchr JavaScript SDK means you will be revealing your public and private keys.  It is not recommended that you share your keys with untrusted people.
  
## Writing tests

We believe in test driven development, and in that spirit have made it very easy for you to write tests for your code that uses Stretchr.

### How it works

  * As well as importing the main `stretchr.js` file, you also import `stretchr-testing.js` which you will find alongside that file.
  * Instead of setting `stretchr` to the result of `Stretchr.NewSession`, for your test code, you assign it to the response of `Stretchr.NewTestSession`.
  * You then optionally setup responses to the calls you expect your code to make by calling the `respond` method.
  * After you have executed the code being unit tested, you can inspect the `stretchr.requests` array to see what happened.

### Example test

    // use the TestSession instead of a real session object
    stretchr = Stretchr.NewTestSession()
    
    // setup some responses
    stretchr
    
      // first request will be fine
      .respond({"~s":200})
      
      // the second request will fail
      .respond({"~s":500, "~e":[{"~m": "Something went wrong"}]})
      
    ;
      
    // call the code being tested
    myFuncThatUsesStretchr()
    
    // make assertions about the requests made
    