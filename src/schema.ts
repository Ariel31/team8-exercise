const graphql = require("graphql");
//import { getUsersRepositories } from "./src/services/git-api-service";
import { getUsersRepositories } from "./services/git-api-service";
import { getAllRepositories } from "./repository/resolver";
import {} from "./repository/query";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const RepositoryType = new GraphQLObjectType({
  name: "name",
  fields: () => ({
    name: { type: GraphQLString },
    size: { type: GraphQLInt },
    owner: { type: GraphQLString }
  })
});

/* const repoQueries = {
  name: "name",
  repositories: {
    type: new GraphQLList(RepositoryType)
  }
}; */

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    repos: {
      type: new GraphQLList(RepositoryType),
      args: { owner: { type: GraphQLString } },
      async resolve(parent, args) {
        return getAllRepositories(args.owner);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
