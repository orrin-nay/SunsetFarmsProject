const {
  GraphQLSchema,
} = require('graphql');

// Root Query
const RootQuery = require('./querys');

// Mutations
const mutation = require('./mutations');

// Subscriptions
const subscription = require('./subscriptions');

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
  subscription,
});
