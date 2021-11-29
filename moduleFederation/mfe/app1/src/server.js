const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 9001

app.get('/', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/app1Index.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
    res.send(contentFromHtmlFile)
})

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, function() {
    console.log('App1 is up. http;//localhost:', PORT)
})