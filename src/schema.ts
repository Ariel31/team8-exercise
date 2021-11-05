var graphql = require('graphql');
//import { getUsersRepositories } from "./src/services/git-api-service";
import { getUsersRepositories } from './services/git-api-service';

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const RepositoryType = new GraphQLObjectType({
  name: 'repo',
  fields: () => ({
    name: { type: GraphQLString },
    size: { type: GraphQLInt },
    owner: { type: GraphQLString },
  }),
});

/* const ReaderType = new GraphQLObjectType({
  name: "Reader",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
}); */

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    repo: {
      type: RepositoryType,
      args: { owner: { type: GraphQLString } },
      async resolve(parent, args) {
        return getUsersRepositories(args.owner);
      },
    },
  },
});

export = new GraphQLSchema({
  query: RootQuery,
});
