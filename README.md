## DEMO
![MEANstackdemo](https://github.com/ElongeR-12/mediaDatas/blob/main/medias/mean%20stack.gif)
## start mongodb 
$C:\Program Files\MongoDB\Server\4.2\bin>mongod.exe --dbpath c:\Users\rariv\mongo-data

## Install mongodb tools (mongoDB compass)

## create node js app (package)
$npm init

## dependency 
$  npm i expresss mongoose body-parser --save

## connect mongoDB from server
$ node db.js //after file db.js file

## to avoid rerun db.js after update for connection, install nodemon package
$ npm install -g nodemon (https://www.npmjs.com/package/nodemon)//globally in system

## create rule javascript file (index.js)

## implement CRUD operation insert (insert, update, delete, read or view)
by default mongoose will insert the new record into a collection with named employees
as per model 
whithout managed mongodb tools
## ## implement CRUD operation insert 
    implement actual crud operation inside update delete and retrieve(controllers)

## insert new employee record into the DB collection (post())

## more get request to return a specific empoyee with _ID

## more routes for update operation

## more routes for delete operation

## generate class model 
$ ng g class employee --type=model

## doc 
    ## materialize css (https://materializecss.com/getting-started.html)

## enable cors
 it enable request from one web application(angular project, port: 4200) to another web aplication (node.js project, port:3000)