MongoDB
MongoDB vs SQLite
Setup- mongo commands

The most popular document-oriented NoSQL databases are MongoDB and DynamoDB. Mongo DB is a popular DB you can use this if you want to learn the NoSQL database. Use Mlab for MongoDB (database as a service).

mongod stands for “Mongo Daemon”. mongod is a background process used by MongoDB. The main purpose of mongod is to manage all the MongoDB server tasks. For instance, accepting requests, responding to clients, and memory management.

mongo is a command-line shell that can interact with the client (for example, system administrators and developers).

Mongoose is used to interact with a MongoDB (Database) instance. Mongoose methods such as find, findById, findOneAndUpdate, save and remove are used. Just Connect your database by adding a URL to the mongoose instance connection. Load the created model - a task.

Mongoose is a promise-based Node.js ODM for MongoDB that provides a straight-forward, schema-based solution to model our application data along with built-in type casting, validation, query building, business logic hooks

MongoDB vs SQLite

MongoDB-

Its first version was released in 2009. It is the most reliable database used with the Node.JS application. Its structure of saving the data is different because it stores data in a document which is like JSON. It used the most popular document store. schema created in this is powerful and flexible.

High scalability, Sharding and availability with built-in replication make it more robust.

Sharding is the capability that comes into use when database size becomes so large that a particular machine may not be able to store all data then sharding solves this problem through horizontal scaling.

Different schemes for metadata sharding:

a. Partitioning based on UserID Let’s assume we shard based on the ‘UserID’ so that we can keep all photos of a user on the same shard. If one DB shard is 1TB, we will need four shards to store 3.7TB of data. Let’s assume for better performance and scalability we keep 10 shards.

So we’ll find the shard number by UserID % 10 and then store the data there. To uniquely identify any photo in our system, we can append a shard number with each PhotoID.

How can we generate PhotoIDs? Each DB shard can have its own auto-increment sequence for PhotoIDs and since we will append ShardID with each PhotoID, it will make it unique throughout our system.

What are the different issues with this partitioning scheme?

How would we handle hot users? Several people follow such hot users and a lot of other people see any photo they upload.
Some users will have many photos compared to others, thus making a non-uniform distribution of storage.

What if we cannot store all pictures of a user on one shard? If we distribute photos of a user onto multiple shards will it cause higher latencies?

Storing all photos of a user on one shard can cause issues like unavailability of all of the user’s data if that shard is down or higher latency if it is serving a high load etc.

b. Partitioning based on PhotoID If we can generate unique PhotoIDs first and then find a shard number through “PhotoID % 10”, the above problems will have been solved. We would not need to append ShardID with PhotoID in this case as PhotoID will itself be unique throughout the system.

How can we generate PhotoIDs? Here we cannot have an auto-incrementing sequence in each shard to define PhotoID because we need to know PhotoID first to find the shard where it will be stored. One solution could be that we dedicate a separate database instance to generate auto-incrementing IDs. If our PhotoID can fit into 64 bits, we can define a table containing only a 64 bit ID field. So whenever we would like to add a photo in our system, we can insert a new row in this table and take that ID to be our PhotoID of the new photo.

Wouldn’t this key generating DB be a single point of failure? Yes, it would be. A workaround for that could be defining two such databases with one generating even numbered IDs and the other odd numbered. For the MySQL, the following script can define such sequences:

KeyGeneratingServer1:
auto-increment-increment = 2
auto-increment-offset = 1

KeyGeneratingServer2:
auto-increment-increment = 2
auto-increment-offset = 2
We can put a load balancer in front of both of these databases to round robin between them and to deal with downtime. Both these servers could be out of sync with one generating more keys than the other, but this will not cause any issue in our system. We can extend this design by defining separate ID tables for Users, Photo-Comments, or other objects present in our system.

Alternatively, we can implement a ‘key’ generation scheme similar to what we have discussed in Designing a URL Shortening service like TinyURL.

scalability gives the developer the ability to easily add or remove as many machines as needed.

It has some great features like document-oriented storage, ease of use, high performance, fast execution of queries and Maintenance of database backup is easy.

Its queries run very fast because the data is present in one place and it can easily be retrieved. It is very flexible it does not require a unified data structure overall objects. It is easy to use. It also has some problems like- sometimes we face leaking problems and missing data over time. It has not joined all relations that are supposed to be resolved client-side which requires an extra request to the server.

HackerRank, SurveyMonkey, Red Hat Inc, IBM, Citrix, Twitter and Codecademy is one of the popular companies that use MongoDB.

The basic database model used in this is a document store.

scaling is done horizontally. In this, we set up multiple servers and also one standby server which shows the available server to store data.

No, join support in this so we use integrated stored engines

Read-only SQL queries via the MongoDB Connector for Business Intelligence (BI).

In this, we can write Server-side scripts which are stored procedures.

Indexing and searching are powerful in MongoDB.

written in C, C++, JS

No trigger and stored procedure in mongo.

SQLite

SQLite is originally released in 2000. It is a relational database. SQLite is the lite version of SQL which runs on low-powered devices or devices with low memory. There is not much configuration required to run SQLite. It is serverless means there is no need to install, manage, initialize, configure and troubleshoot. But It lacks multiuser capabilities.

It is very manageable throughout different applications, to transfer the entire database all that's needed is to create a copy of the file. You can use this with Node but it is not much used generally. It does not require much support from external libraries or the operating system.

SQLite has a binding of a large no. of programming languages including C, C# etc. It is a database tool that implements a self-contained, transactional SQL database engine. It has an embedded SQL database engine. The processes run by the server are not separated.

it reads and writes directly to regular disk files. It is single-threaded, simple, lightweight, SQL.

SQLite is used by companies like Intuit, Codorus, and Infoshare.

scaling is done vertically. It is an old approach to saving and getting data. In this, we extend the hardware resources to manage the large data or bug number of users.

It supports Join.

it uses SQL for queries

we cannot write a stored procedure in this.

The indexing and searching are not as strong in MongoDB.

written in C, C++

Setup- mongo commands

first, download the community server from this link  https://www.mongodb.com/try/download

Download MongoDB Community Server | MongoDB
https://www.mongodb.com/try/download/community
C:\Program Files\MongoDB\Server\5.0\bin - set this path in the system variable

MongoDB needs a data folder to store its files. The default location for the MongoDB data directory is c:\data\db then create Data/db folders in c drive

C:\> mkdir data

C:\> cd data

C:\> mkdir db

then you can run mongod commands

After creating those two files, head over again to the bin folder you have in your mongodb directory and open up your shell inside it. Run the following command. Now you can run all DB commands

>mongod

In order to work with this server, we need a mediator. So open another command window inside the bind folder and run the following command:

>mongo

To get stats of MongoDB server/client use stats method. This will give the database name, number of collections and documents in the database.

To check a list of commands, type db.help() in MongoDB client.

To create Database in MongoDB type command-

>use mydb              

To check on which DB you are working on

>db

If you want to check your databases list, use this command

>show DBS

local     0.78125GB

test      0.23012GB

Your created database (mydb) is not present in the list. To check database status, you need to insert at least one document into it.

 To insert data in db use insert method

To drop a existing database use dropDatabase method.

To run the server go to this path C:\Program Files\MongoDB\Server\4.4\bin and run mongod command.

https://university.mongodb.com/

toJSON method that map the default objects to a custom object. example _id

MongoDB Compass is a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment.

https://docs.mongodb.com/compass/current/

__dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.

mongodb cluster creation and accessing DB online

steps- https://www.mongodb.com/try   signup on 

To establish connections with a MongoDB database

var MongoClient = require("mongodb").MongoClient;

Mongoose is used to connect to MongoDB, define the database schema and read/write data.
https://cloud.mongodb.com/v2/61bf46e105bb0811585e8ed5#metrics/replicaSet/61bf48423b4dc73b3a1eeadf/explorer/myFirstDatabase/business/find online db link

npm install mongoose --save  
mongo --version

https://www.mongodb.com/developer/products/mongodb/cheat-sheet/

https://github.com/sunny7899/sql

MongoDB? Are you fluent with sharding and indexing?

install studio 3t also to chack database


MongoDB - Sharding
NoSQL
When to Use NoSQL?
When to Avoid NoSQL?
SQL vs NoSQL
MongoDB vs SQLite
RDBMS vs MongoDB

MongoDB-

Its first version was released in 2009. It is the most reliable database used with the Node.JS application. Its structure of saving the data is different because it stores data in a document which is like JSON. It used the most popular document store. schema created in this is powerful and flexible.

High scalability, Sharding and availability with built-in replication make it more robust.

NoSQL database- Mongo DB, Firestore

SQL Database    - NoSQL Database

Table    -        Collection

Tuple/Row      - Document

column         - Field

Table Join      - Embedded Documents

Primary Key    - Primary Key (Default key _id provided by MongoDB itself)

Database Server/Client: Mysql/Oracle, MySQL/sqlplus - Mongod, mongo

Choose your DB properly. You’ll have to support your decision Whether you go with SQL or NoSQL, why MySQL and not Postgres? why is this app better for a NoSQL?”


SQL  vs NoSQL 

SQL databases properly follow ACID properties (Atomicity, Consistency, Isolation & Durability). NoSQL databases properly follow Brewers CAP theorem (Consistency, Availability, and Partition tolerance).

When to Use NoSQL?

Given below are the use cases where you should prefer using NoSQL databases:

To handle a huge volume of structured, semi-structured and unstructured data.

Where there is a need to follow modern software development practices like Agile Scrum and if you need to deliver prototypes or fast applications.

If you prefer object-oriented programming.

If your relational database is not capable enough to scale up to your traffic at an acceptable cost.

If you want to have an efficient, scale-out architecture in place of an expensive and monolithic architecture.

If you have local data transactions that need not be very durable.

If you are going with schema-less data and want to include new fields without any ceremony.

When your priority is easy scalability and availability.

When to Avoid NoSQL?

Enlisted below are some pointers that would guide you on when to avoid NoSQL.

If you are required to perform complex and dynamic querying and reporting, then you should avoid using NoSQL as it has a limited query functionality. For such requirements, you should prefer SQL only.

NoSQL also lacks the ability to perform dynamic operations. It can’t guarantee ACID properties. In such cases like financial transactions, etc., you may go with SQL databases.

You should also avoid NoSQL if your application needs run-time flexibility.

If consistency is a must and if there aren’t going to be any large-scale changes in terms of the data volume, then going with the SQL database is a better option.

The choice of the database will depend upon your preferences, business requirements, volume, and variety of data.

The data you store in a NoSQL database does not need a predefined schema like you do for a SQL database

SQL databases scale vertically, meaning you’ll need to increase the capacity of a single server (increasing CPU, RAM, or SSD) to scale your database. SQL databases were designed to run on a single server to maintain the integrity of the data, so they’re not easy to scale.

NoSQL databases scale horizontally, meaning you can add more servers to power your growing database. This is a huge advantage that NoSQL has over SQL.


MongoDB vs SQLite

The basic database model used in this is a document store. -It is RDBMS.

scaling is done horizontally. In this, we set up multiple servers and also one standby server which shows the available server to store data. - scaling is done vertically. It is an old approach to saving and getting data. In this, we extend the hardware resources to manage the large data or bug number of users.

No, join support in this so we use integrated stored engines - It supports Join.

Read-only SQL queries via the MongoDB Connector for Business Intelligence (BI)- it uses SQL for queries

In this, we can write Server-side scripts which are stored procedures. -we cannot write a stored procedure in this.

Indexing and searching are powerful in MongoDB. -The indexing and searching are not as strong in MongoDB.

written in C, C++, JS - written in C, C++

RDBMS vs MongoDB:

SQL

Most common query lang. used to interact with DB.

It is a declarative lang.

What you can do with SQL is-

Access, manipulate and create DB. how to use SQL to store, query, and manipulate data.    

There are various benefits of this you can be financial analysts, data-driven marketers or online entrepreneurs.

Companies that use SQL-

HSBC, Microsoft, Ford etc.

If a company has a DB. They are using SQL queries.
