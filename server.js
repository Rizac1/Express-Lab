const express = require('express');
// const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello from the web server...'))

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

// app.use(express.static(path.join(__dirname, '../public')));

app.use(express.static('public'))

app.listen(port, () => console.log(`Listening on port ${port}!`))