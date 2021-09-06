import { GraphQLServer } from 'graphql-yoga'
import { Query } from "./resolvers/Query.mjs"
import _ from 'lodash';
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = "src/schema/schema.graphql"

const resolvers = {
    Query,

};



const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
