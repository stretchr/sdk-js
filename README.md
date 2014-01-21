# Stretchr JavaScript SDK

Stretchr SDK for JavaScript and HTML5.

## Creating a client

In order to interact with Stretchr, you must first create a `Stretchr.Client` in your code.  You will need to pass your project name, and API key.

    var stretchr = new Stretchr.Client("account-name", "project-name", "API-KEY");

Assigning your client to a variable named `stretchr` makes your code very clear.

### Using a different host

By default, the Stretchr SDK for JavaScript and HTML5 assumes your data is hosted at `stretchr.com`, but you can change this if it's not the case using the `setHost` setter method.

    var stretchr = new Stretchr.Client("account-name", "project-name", "API-KEY").setHost("mydomain.com");

Then all requests will be made to `account-name.mydomain.com` insstead of `account-name.stretchr.com`.

## Making requests using the `at` method

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

## Reading resources

To read a resource, use the `read` method and then in the callback handler, use the `resource()` method on the `Stretchr.Response` to get the resource.

    stretchr.at("people/1/books/1").read(function(response){

      if (response.success()) {

        var resource = response.resource();
        // do something with resource

      } else {

        // boo

      }

    });

### Reading many resources

If your request results in many resources, you can use the `resources()` method to get a `Stretchr.ResourceCollection` object.  Then you can use the `items()` method to get the underlying `Stretchr.Resource` object array:

    stretchr.at("people/1/books").read(function(response){

      if (response.success()) {

        var resources = response.resources();
        var items = resources.items();
        for (var index in resources.items()) {

          var resource = items[index];
          // do something with resource

        }

      } else {
        // boo
      }

    });

### Filtering, ordering and paging

The `Stretchr.Request` object gives you handy methods to control detials about the collection of resources you get back.

    stretchr.at("people").order("name").where("age", ">30").page(1, 10);

#### Order

Setting the order parameter is as simple as calling the `order` method on a `Stretchr.Request`.  The value should be the field on which to order ascendingly.  To order decending, prefix the field name with a `-` minus character.

    // order by age, youngest first
    stretchr.at("people").order("age");

    // order by age, oldest first
    stretchr.at("people").order("-age");

#### Paging

Stretchr delivers resources in pages up to a maximum of 1,000 at a time.  If you need more, then you'll have to use paging.

The `page` method sets the appropriate `limit` and `skip` values on the request and has the following signature:

    page(pageNumber, pageSize)

  * `pageNumber` the 1-bound number of the page to get (i.e. `1` is the first page)
  * `pageSize` the number of resources to get per page

#### Where

The `where` method adds an additional filter parameter to the query.  It takes two arguments, the field and the filter value.  The field can be any field in a document and the value should be one of the supported filter types:

  * No character - Equal to (e.g. `.where("age", "18")`)
  * `!` - Not equal to (e.g. `.where("age", "!18"`)
  * `>` - Greater than (e.g. `.where("age", ">18")`)
  * `<` - Less than (e.g. `.where("age", "<18")`)
  * `>=` - Greater than or equal to (e.g. `.where("age", ">=18")`)
  * `<=` - Less than or equal to (e.g. `.where("age", "<=18")`)
  * `*` - Exists i.e. has a value (e.g. `.where("pincode", "*")`)
  * `!*` - Not Exists i.e. has no value (e.g. `.where("pincode", "!*")`)
  * `..` - Between i.e. number is between a and b (e.g. .where("age", "18..30"))
  * `,` - OR value i.e. value is one of (e.g. .where("name", "Mat,Tyler"))
  * `[]` - Item present in array (e.g. .where("tags", "[javascript]"))
  * `/.../` - Regex (e.g. .where("number", "/[0-9]+/"))

## Users and Authentication
to authenticate your users, just specify the method of authentication you want to use:
```
stretchr.login("github")
```
This will redirect users through the oauth workflow and return them with a valid user key.  The SDK will automatically snag that key for you, and all future requests will be authenticated.

To check if a user is already logged in, you can call
```
stretchr.isLoggedIn() // return true if the user is logged in, false if they aren't
```

To logout a user, you can run
```
stretchr.logout()
```

## Resources
In addition to standard URL based interactions with Stretchr, you can also interact via Resources, which enable a more OO design.

### Making resources

To create a new resource, use the `new` method:

    var newBook = stretchr.new("people/1/books");

then set some values using the `data` method:

    newBook.data({
      name: "Mat",
      age: 30,
      something: true
    });

then save it using the `save` method:

    newBook.save({
      success: function(response){
        // the book was saved
      }
    });

### Changing resources

Once you had read a resource (see above), you can make changes to it via the `.data()` method and then call `save()` to have the changes updated on the server.

### Deleting resources

Once you had read a resource (see above), you delete it by calling the `remove()` method.

## Developers

### Generate documentation

    jsdoc -d docs ./src -c ./conf/docs.json
