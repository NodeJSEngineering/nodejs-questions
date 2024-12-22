index-

about
Advantages
Express setup
why Choose Express
backend project structure
Express Dependencies /packages
ways to send responses using Express
API details

Express JS framework which we use with NodeJS. It helps us to allow setting up middlewares to reply to HTTP Requests and dynamically provide HTML Pages based on passing arguments to templates. It also Defines a routing table that is used to achieve different actions based on the HTTP Method and URL. Express app middlewares use the callback function whose parameters are request and response objects. Express is basically used to create the server.

Express Is An Open-Source Official Framework For Node.Js. Express Is Used To Build Server-Side Web Applications And APIs. It Is Critically Praised For Its Simplicity, Flexibility, Scalability And Minimalism by Node Js Developers Worldwide. Launched By TJ Holowaychuk In Nov 2010, Express JS Is Fundamentally Used Alongside Angular Or React And Forms. It is used as the Server-Side Framework Layer In MEAN Or MERN Stack.

Advantages-

Wide Support: As Said Earlier, Express.Js Has The Biggest Community Of Users In The World Among All Backend Javascript Frameworks. It Has A Large Number Of Resources Available To Bring Beginners Up To Speed.

Plugins: Unlike Meteor.Js That Is Troubled With Poor Plugin Functionality, Express Supports A Wide Variety Of Powerful Plugins To Assist Developers.

Robust: Not Only Is Express.Js Minimalist And Lightweight, But It Is Also Less Likely To Errors.

Reusability: Built-In Router In Express.Js Supports Code Reusability To Speed Up Workflow.

Difficulties With Express-

Tedious Nature: Express.Js Developers Need To Get Involved In A Lot Of Boring Manual Tasks Which Can Stretch The Development Cycle.

No Built-In Error Handling: Express Lacks One Important Feature, It Does Not Have Built-In Error Handling Which Can Make Debugging Code Very Time Consuming And Slow Down Development Time.

Top clients-

IBM, Uber, Paypal, Netflix, Airbnb, Walmart, eBay, Linkedin

Express setup

To run the programs of express.js you need to install the express dependency. You can easily set this by running a few commands.

Express provides plugins, template code, middleware packages, and routing functionality for faster and more efficient web development.

Node.js’s event-driven architecture allows efficient multitasking, which enhances applications’ performance.

npm install express

npm search express

npm update express

npm uninstall express

why Choose Express

You want to scale up your app and handle multiple user requests on the app

You want to build a real-time application that leverages the non-blocking Express servers.

You want to build a website where millions of users share and export images similar to Unsplash.

You want to create an app like GoDaddy for registering domains and offering web hosting services.

You want to develop a web app like Coursera that provides open online courses.

backend project structure

Controller

(API routes and endpoints)

Service layer

 (for business logic)

Data access layer

(for working with a database)

Example-

   src

      ├── app.js            app entry point

      ├── /api          controller layer: api routes

      ├── /config           config settings, env variables

      ├── /services     service layer: business logic

      ├── /models           data access layer: database models  

      ├── /scripts      miscellaneous NPM scripts

      ├── /subscribers      async event handlers

      └── /test               test suites

      /config          

        ├── index.js

        ├── module1.js      

        └── module2.js  

Express Dependencies - packages - used in server in expressJS-

body-parser: 

Express doesn’t handle reading data from the <form> element on its own. We have to add another package called body-parser to gain this functionality. For seeking what the user has selected from the form, we have to install the “body-parser” package.

This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data. It Parses incoming request bodies in a middleware before your handlers, available under the req.body property. It exposes various factories to create middleware. All middlewares will populate the req.body property with the parsed body, or an empty object ({}) if there was,0 nobody to parse (or an error was returned). It also Registers our created routes in the server. 

cookie-parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

multer: This is a node.js middleware to handle multipart/form-data.

Gzip: Gzip is a lossless file format (also a software application) used for compressing (and decompressing) files for faster network transfer. It can therefore be extremely beneficial in compressing the web pages being served by our Node.js servers.

There are multiple ways to send responses using Express

The response object interprets the HTTP response that an Express app sends when it gets an HTTP request. You can print request and response objects which provide a lot of data related to HTTP requests and responses including cookies, sessions, URL, etc.

1-res.send()

The signature of this method looks like this: res.send([body]) where the body can be any of the following: Buffer, String, an Object and an Array.

This method automatically sets the Content-Type response header as well based on the argument passed to the send() method, so for example if the [body] is a Buffer the Content-Type will be set to application/octet-stream

manually set header

res.set('Content-Type', 'text/html');.

X-Powered-By: Express

Content-Type: application/json; charset=utf-8

Content-Length: 17

ETag: W/"11-IkjuL6CqqtmReFMfkkvwC0sKj04"

Date: Fri, 10 Aug 2018 09:34:13 GMT

Connection: keep-alive

2. res.json()

object or array is passed, but it also converts non-objects to JSON.

There is no actual difference between res.send and res.json, both methods are almost identical.

3. res.end()

res.end('Hello World\n');  // Send the response body as "Hello World"

if a request is made through the browser on this port number, then the server application will send a 'Hello' World' response to the client. http://localhost:8081

 if we want to end the response without providing any data. This could be useful for a 404 page, for example:

res.status(404).end();

To sum things up, res.json() allows for extra formatting of the JSON data - if this is not required res.send() can also be used to return a response object using Express.

API details-

The request object describes the HTTP request and has properties for the request query string, parameters, body, HTTP headers etc. With the express framework, we can do routing. routing determines the way in which an application responds to a client request to a particular endpoint.

The Headers- Headers refer to the Authentication Mode and the Content Types.

The content-Type header is used to indicate the media type of the resource. The media type is a string sent along with the file indicating the format of the file. For example, for an image file, its media type will be like image/png or image/jpg, etc.

Directives: There are three directives in the HTTP headers Content-type.

media type: It holds the MIME (Multipurpose Internet Mail Extensions) type of data.

charset: It holds the character encoding standard. Charset is the encoding standard in which the data will be received by the browsers.

res.writeHead(200, { 'Content-Type': 'text/plain' });   Send the HTTP header, HTTP Status: 200 : OK, Content Type: text/plain

application/x-www-form-urlencoded: The values are encoded in key-value tuples separated by '&', with a '=' between the key and the value. Non-alphanumeric characters are per cent-encoded: This is the reason why this type is not suitable to use with binary data (use multipart/form-data instead)

max-age: The max-age directive takes priority over Expires.

Expires: Expires headers tell the browser whether they should request a specific file from the server or whether they should grab it from the browser's cache.

Date: The date and time that the message was sent

Age: The Age response header field conveys the sender's estimate of the amount of time since the response (or its revalidation) was generated at the origin server.

If-Modified-Since: The If-Modified-Since request-header field is used with a method to make it conditional: if the requested variant has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message-body.

Do Not Track: disable either its tracking or cross-site user tracking

Cache-Control: Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds

Transfer-Encoding:  The form of encoding used to safely transfer the entity to the user. Currently, defined methods are: chunked, compress, deflate, gzip, and identity.

ETag: An identifier for a specific version of a resource.

X-Frame-Options: it can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe> or <object>.

boundary: The boundary directive is required when there is multipart entities. Boundary is for multipart entities consisting of 70 characters from a set of characters known to be very robust through email gateways, and with no white space.

Headers provide information to clients and servers for purposes like caching, AB Testing, authentication, and more.

The body contains information that a client wants to send to a server, such as the payload of the request.

The Method- There are various methods that you can use to call a REST API, the most common ones being POST and GET. The GET method is used to gather information while the POST method can be used to send information to the resources on the web.

These methods are basically used to get and send any data. Because of these methods, the request-response between server and client exists. To send data streams we use these two methods. GET and POST are the most common HTTP methods. 

GET vs POST

we add parameters in the URL and get data in response - send additional data from the client or browser to the server.

sends data as part of URI (uniform resource identifier) - sends data as HTTP content.

get return the same results every time. - The post method implemented in that way changes with every request.

we can send limited data in the header. - we can send a large amount of data because it's part of the request body. It is more secure because data is passed in the request body and the user is not able to bookmark it

you can cache the data. - you cannot cache post request data.

GET is bounded by the max. URL length continued by the browser and web server - POST doesn't have such conditions.

GET is used to request data from a particular resource. -POST is used to send info to a server to create/update a resource.

parameters passed  in URL- parameters passed in the body

This is not happening in get method. - use POST for destructive things such as creation, editing, and deletion,

get is used for fetching documents - post is used for updating data.

in Get we pass things like customer id, and uId to get a response. - post request sends information to server like customer info, file upload etc.

GET https://api.github.com/users/{name} Here you can pass the name according to that you will get data. GET https://api.github.com/users/seeschweiler

In POST, you will have to send content-type such as multipart/form-data, application/json,  application/x-www-form-urlencoded and object or data that you have to pass in body.

Host: foobar.example

Content-Type: application/json

Object- [{name1:value1},{name2:value2}]

In this you are posting JSON data to API.

change request to POST, click body and select “x-www-form-urlencoded”.

enter the name as the key and the corresponding task name as value.

This info we Request in the HTTP server-

GET http://facebook.com/ HTTP/1.1

Accept: application/x-ms-application, image/jpeg, application/xamitxml,

User-Agent: Mozilla/5.0 (compatible; MSIE 8.0 Windows NT 6.1; WOW64;)

Accept-Encoding: gzir, deflate

Connection: Keep-Alive

Host: facebook.com

Cookie: datr-1265876274-: locale-enUS: sd-WWusex2101.

This info we get in HTTP server response-

HTTP/1.1 200 OK

Cache-Control: private, no-store, no-cache, must-revalidate, post-check-o,

pre-check-0

Expires: Sat, 01 Jan 2000 00:00:00 GMT

P3P: CP="DSP LAW"

Pragma: no-cache

Content-Encoding: gzip

Content-Type: text/html; charset-utf-8

X-Connection: close

Transfer-Encoding: chunked

creating, updating and deleting data from the database.

route syntax - route method- Defined get data(index or listing) route

app.METHOD(PATH, HANDLER)

1) app is an instance of the express module

2) METHOD is an HTTP request method create (POST), retrieve (GET), update (PUT/PATCH) and delete (DELETE)

3) PATH is a path on the server.

4) HANDLER is the function executed when the route is matched.

The Endpoint- The Endpoint is defined as the URL of the resource to which you are going to place the requests. For instance, https://api.powerbi.com/v1.0/myorg/.

The Data or Body- This refers to the textual data in the form of JSON, which needs to be sent to the resource.

req.query Property: It is an object containing the property for each query string parameter in the route.

https://expressjs.com/

https://hapi.dev/tutorials/expresstohapi/?lang=en_US   migration guide

Multer is a node.js middleware for handling multipart/form-data , which is primarily used for uploading files.

multer-s3
Streaming multer storage engine for AWS S3.
upload data to AWS S3

aws-sdk npm
to configure aws details