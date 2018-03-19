const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const schema = require('./graphQL/schema');
const jwt = require('jsonwebtoken');

// enable for dummyinfo
// const dummyInfo = require('./utils/dummyInfo');

// const { execute, subscribe } = require('graphql');

// const { createServer } = require('http');
// const { SubscriptionServer } = require('subscriptions-transport-ws');


const {
  graphqlExpress,
  graphiqlExpress,
} = require('apollo-server-express');

// Connect To Database
mongoose.connect(config.database, { useMongoClient: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);
  // // enable for dummyinfo
  // dummyInfo(20000);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

// const PORT = 3000;

const app = express();

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware

const addUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token !== undefined && token !== '') {
    try {
      const { user } = await jwt.verify(token, config.secret);
      req.user = user;
    } catch (err) {}
  }
  next();
};
app.use(addUser);

app.use('/graphql', graphqlExpress(req => ({
  schema,
  graphiql: true,
  context: {
    user: req.user,
  },
})));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  // subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
}));

/* const ws = createServer(app);
ws.listen(PORT, () => {
  console.log(`Apollo Server is now running on http://localhost:${PORT}`);
  // Set up the WebSocket for handling GraphQL subscriptions
  SubscriptionServer({
    execute,
    subscribe,
    schema,
  }, {
    // server: ws,
    path: '/subscriptions',
  });
}); */

// Index Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
