const express = require('express');
const path = require('path')
const app = express();


// Part 1
// app.use('/stylesheets', express.static('assets/css'));

// Part 2
// app.use(express.static('assets'));
// Part 3
// app.use(express.static('assets/scripts'));

// Bonus
// app.use('/stickers', express.static('assets/images'));

// How this applies for your time at App Academy and Mod 5
app.use(express.static(path.resolve("../frontend/dist")));

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
