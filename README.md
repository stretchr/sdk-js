# Stretchr JavaScript SDK

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