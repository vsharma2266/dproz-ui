const express = require('express');
const parser = require('body-parser');
const app = express();
const port = 3000;

app.use(parser.json);
app.use(parser.urlencoded({
    extended: true
}));


app.listen(port);

console.log(`Mock server running on port: ${port}`);
