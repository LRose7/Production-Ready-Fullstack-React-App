// Import Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Create a new express application named 'app'
const app = express();

// Set our back end port to be either an enviornment variable or port 5000
const port = process.env.PORT || 5000;

// Application level middleware that prints incoming requests to the servers console
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Set up the CORS middleware
app.use(cors());

// The next lines import and configure the app to use the routes that are defined in routes.js
// Require Route
const api = require('./routes/routes');
// Configure app to use route
app.use('/api/v1/', api);

// Middleware that informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure server to listen on the port defined by the port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));