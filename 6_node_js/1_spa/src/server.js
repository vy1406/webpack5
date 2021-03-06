const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000
// asking for server to serve static files.
// remove this line and the html that client recieves doenst know how to get those files.
app.get('/', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
    res.send(contentFromHtmlFile)
})

// teaching express to serve static
app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, function() {
    console.log(`Running on http://localhost:${PORT}/`)
})