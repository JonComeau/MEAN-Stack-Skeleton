// We will declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const skeleton = require('./controllers/skeleton');

const config = require('./config/database');
mongoose.connect(config.database, { useMongoClient: true });

//Initialize our app variable
const app = express();

//Declaring Port
const port = 4242;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send("Invalid page");
});

//Routing all HTTP requests to /skeleton to skeleton controller
app.use('/skeleton', skeleton);

//Listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});
