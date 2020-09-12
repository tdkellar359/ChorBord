// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.SERVER_PORT || 8080;
const version = process.env.API_VERSION || '0.0.0';

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();

// test route to make sure everything is working
router.get('/', (_, res) => {
  res.status(200).json({
    url: '/api',
    version,
    routes: {
      users: {
        url: '/api/users',
        verbs: ['GET', 'POST', 'PUT', 'DELETE'],
      },
      chores: {
        url: '/api/chores',
        verbs: ['GET', 'POST', 'PUT', 'DELETE'],
      },
    },
  });
});

const usersController = require('./controllers/users.controller');

usersController(router);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================

/* eslint-disable-next-line no-console */
app.listen(port, () => console.log(`API listening on port ${port}`));
