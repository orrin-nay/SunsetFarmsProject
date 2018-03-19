const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const User = require('../models/user');
const validateStrings = require('../utils/validateStrings');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

//Import Types
const {ErrorSuccessType, UserType} = require("./types")

module.exports = new GraphQLObjectType({
    name: 'Subscription',
    fields: {
        getUsers: {
            type: new GraphQLList(UserType),
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) }
            },
        }
    }
});