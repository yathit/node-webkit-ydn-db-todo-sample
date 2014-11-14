# YDN-DB Todo list app on node-webkit platform

[YDN-DB](http://dev.yathit.com/ydn-db) todo list sample app on node-webkit platform to create HTML5 desktop application. See [node-webkit](http://strongloop.com/strongblog/creating-desktop-applications-with-node-webkit/) project for more information.

[YDN-DB](http://dev.yathit.com/ydn-db) is HTML5 database library for storing significant amount of data on client browser.

## Setup


Download node-webkit to bin folder.

Package

    cd app; zip -r ../todo.nw *; cd ..;

Run

    ./bin/node-webkit todo.nw


## Development

    npm install node-webkit-builder --save-dev
    npm install grunt-node-webkit-builder --save-dev

Build binary files

    grunt




