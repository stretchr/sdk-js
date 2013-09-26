# Stretchr JavaScript SDK

Stretchr SDK for JavaScript and HTML5.

## User guide

### Creating a client

In order to interact with Stretchr, you must first create a `Stretchr.Client` in your code.  You will need to pass your project name, and API key.

    var stretchr = new Stretchr.Client("project-name", "API-KEY");

Assigning your client to a variable named `stretchr` makes your code very clear.

### Making requests using the `at` method

To make requests, you must first decide specify the path using the `at` method on your client:

    stretchr.at("people/1/books")

The `at` method returns a `Stretchr.Request` that you can either specify further properties with, or call an action.

All actions (and some other methods) take an `options` object that allows you to specify event callbacks on requests.  For example, the following object binds to all major events for an action:

    {
      // response: The Stretchr.Response object.
      // responseObject: The raw JSON object that was returned by the server.
      // options: These options
      success: function(response, responseObject, options){
        // called when the request was successful
      },

      // response: The Stretchr.Response object.
      // responseObject: The raw JSON object that was returned by the server.
      // options: These options
      error: function(response, responseObject, options){
        // called when the request failed (i.e. 404)
      },

      // request: The Stretchr.Request that is about to be made.
      // options: These options
      before: function(request, options){
        // called before a request is made
      },

      // response: The Stretchr.Response object.
      // responseObject: The raw JSON object that was returned by the server.
      // options: These options
      after: function(response, responseObject, options){
        // called after a request has been made (successful or failure)
      }
    }

Usually, passing a single function argument in place of an `options` object will cause the function to be considered a callback for the `after` event.

### Reading resources

To read a resource, use the `read` method and then in the callback handler, use the `resource()` method on the `Stretchr.Response` to get the resource.

    stretchr.at("people/1/books/1").read(function(response){

      if (response.success()) {

        var resource = response.resource();

      } else {
        // boo
      }

    });

#### Reading many resources

If your request results in many resources, you can use the `resources()` method to get a `Stretchr.ResourceCollection` object.

#### Filtering, ordering and paging

The `Stretchr.Request` object gives you handy methods to control detials about the collection of resources you get back.

    stretchr.at("people").order("name").where("age", ">30").page(1, 10)

## Developers

#### Generate documentation

    jsdoc -d docs ./src -c ./conf/docs.json
