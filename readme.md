# YDN-DB Todo list app on node-webkit platform

[YDN-DB](http://dev.yathit.com/ydn-db) todo list sample app on node-webkit platform to create HTML5 desktop application. See [node-webkit](http://strongloop.com/strongblog/creating-desktop-applications-with-node-webkit/) project for more information.

[YDN-DB](http://dev.yathit.com/ydn-db) is HTML5 database library for storing significant amount of data on client browser.


## Demo

Download [binary zip file](http://ydn-db-d1.cloud.googleapis.com/nw-todo/YDN-DB-Todo-0.1.0.zip). It includes binary file for Windows and OS X.

## Setup


Download node-webkit to bin folder.

Package

    cd app; zip -r ../todo.nw *; cd ..;

Run

    /Applications/node-webkit.app/Contents/MacOS/node-webkit ./todo.nw


## Development

    npm install node-webkit-builder --save-dev
    npm install grunt-node-webkit-builder --save-dev

Build binary files

    grunt

## Upload

    gsutil cp bin/YDN-DB-Todo.zip gs://ydn-db-d1/nw-todo/YDN-DB-Todo-0.1.0.zip
    gsutil acl set public-read gs://ydn-db-d1/nw-todo/YDN-DB-Todo-0.1.0.zip


