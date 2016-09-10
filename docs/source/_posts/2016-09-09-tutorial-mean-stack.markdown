---
layout: post
title: "Tutorial: Getting started with MEAN stack"
date: 2016-09-09 21:43:51 -0700
comments: true
categories: 
- Tutorial
- JavaScript
- TODO
---

An example web application with MongoDB, ExpressJS, and NodeJS.

<!--more-->

### Final application

I would go through the final version of the example application before going from the ground up. 
You can find the final example application [here](https://github.com/tdongsi/mongodb/tree/develop/DevInt/rest). 
To run it: 

* Make sure that MongoDB are running with port 27017.
    * In Windows, run MongoDB as: `mongod.exe --dbpath C:\data\db` 
* Change directory to the `rest` folder.
* `npm install`
* `node index.js`
* From the browser or [POSTman](https://www.getpostman.com/) application, run HTTP methods against `http://localhost:3000/api/widgets/`.

#### References

* MongoDB installation
    * [Windows](http://stackoverflow.com/questions/20796714/what-is-the-way-to-start-mongo-db-from-windows-7-64-bit).
        * Note that Windows 7 requires [a hotfix from Microsoft](https://support.microsoft.com/en-us/kb/2731284), based on [MongoDB instruction](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).
    * Mac: `brew install mongodb` works for me.
* https://www.getpostman.com/

### First version

### Second version: Database separation

### Third version: Routing
