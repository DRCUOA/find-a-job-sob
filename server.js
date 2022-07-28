/**
* Find a Job Sob
* V0.0.1 - Not Released
* (c) & author Richard Clark 2022
*/ 

const express = require('express');
const app = express();
const serverDebug = require('debug')('Server:debug-Msg');
const databaseDebug = require('debug')('Database:debug-Msg');
const config = require('config');

/* server
- express/http
- configuration
-   environment (.env)
-   config   
-   server-side assets
-       logs
-       aos
- middleware
-   authetication
-   custom middleware
- routing
-   auth
-   application
-       app-views
- static-files
-       custom-css
-       client-scripts
-       assets        
- packages
-   standard-utils
-   data-access-layer
-       data-access-objects
*/