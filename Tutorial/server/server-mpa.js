const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// asking for server to serve static files.
// remove this line and the html that client recieves doenst know how to get those files.
app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/app1', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/app1.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
    res.send(contentFromHtmlFile)
})

app.get('/app2', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/app2.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
    res.send(contentFromHtmlFile)
})

app.listen(3000, function() {
    console.log('App is up.')
})