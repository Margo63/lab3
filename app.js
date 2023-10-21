const express = require("express");
const server = express();
const http = require('http');
const https = require('https');
const fs = require('fs');


server.use(express.json()); // Обработка параметров в body
const path = require("path");

server.use('/public', express.static('public'));
const routes = require("./routes");
server.use("/", routes);
//server.listen(3000);


server.set("views",path.join(__dirname,"views"));
server.set("view engine",'ejs');



let privateKey  = fs.readFileSync('/Users/Margarita/localhost.key', 'utf8');
let certificate = fs.readFileSync('/Users/Margarita/localhost.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

// your express configuration here

var httpServer = http.createServer(server);
var httpsServer = https.createServer(credentials, server);

httpServer.listen(8080);
httpsServer.listen(8443);






