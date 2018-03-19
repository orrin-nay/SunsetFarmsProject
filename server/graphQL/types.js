
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

module.exports.UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    dOB: { type: GraphQLString },
    gender: { type: GraphQLString },
    hOH: { type: GraphQLString },
    skills: { type: new GraphQLList(GraphQLString) },
    admin: { type: GraphQLBoolean },
  }),
});
const UserType = module.exports.UserType;

module.exports.ErrorSuccessType = new GraphQLObjectType({
  name: 'ErrorSuccess',
  fields: () => ({
    error: { type: GraphQLString },
    success: { type: GraphQLString },
  }),
});
module.exports.FilterResultsType = new GraphQLObjectType({
  name: 'FilterResults',
  fields: () => ({
    error: { type: GraphQLString },
    success: { type: new GraphQLList(UserType) },
  }),
});
module.exports.LoginType = new GraphQLObjectType({
  name: 'Login',
  fields: () => ({
    error: { type: GraphQLString },
    authToken: { type: GraphQLString },
    user: { type: UserType },
  }),
});
module.exports.SearchForUsersType = new GraphQLObjectType({
  name: 'SearchForUsers',
  fields: () => ({
    error: { type: GraphQLString },
    results: { type: new GraphQLList(GraphQLString) },
  }),
});
module.exports.SkillsListType = new GraphQLObjectType({
  name: 'SkillsList',
  fields: () => ({
    error: { type: GraphQLString },
    skills: { type: new GraphQLList(GraphQLString) },
  }),
});
module.exports.MessagesListType = new GraphQLObjectType({
  name: 'messagesList',
  fields: () => ({
    error: { type: GraphQLString },
    messages: { type: new GraphQLList( new GraphQLList(GraphQLString)) },
  }),
});
