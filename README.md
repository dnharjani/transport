**TTC**
=======

There are 4 metro lines in Toronto operated by the [TTC](https://www.ttc.ca/Subway/index.jsp).

This application contains a REST API that allows querying the status of disruptions on the line.
The frontend allows an internal user to add and remove disruptions.

**Tech:**
---------

Backend:

 - Node 
 - Sequelize 
 - SQLite 
 - Grunt 
 - Mocha 
 - Chai 
 - Sinon

Frontend:

 - Bower
 - Ionic (Angular) 
 - Gulp 
 - SASS 
 - Karma 
 - Jasmine

**Setup:**
-----------

 - Install Node (LTS) - https://nodejs.org/en/ 
 - npm install -g mocha & npm install -g node-inspector & npm install -g apidoc & npm install
 - cd app/public npm install -g gulp-cli & npm install & bower install


**Running tests:**
-------------------

Backend  - grunt test in the main folder
Frontend - gulp test in the app/public folder
