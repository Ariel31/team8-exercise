const graphql = require("graphql");
import {
  getAllRepositories,
  getRepositoriesDetails
} from "./repository/resolver";
import { RepositoryType } from "./repository/type-defs/repository.type";
import { RepoDetailsType } from "./repository/type-defs/repository-details.type";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    repos: {
      type: new GraphQLList(RepositoryType),
      args: { owner: { type: GraphQLString } },
      async resolve(parent, args) {
        return getAllRepositories(args.owner);
      }
    },
    repoDetails: {
      type: new GraphQLList(RepoDetailsType),
      args: {
        owner: { type: GraphQLString },
        names: { type: new GraphQLList(GraphQLString) }
      },
      async resolve(parent, args) {
        return getRepositoriesDetails(args.owner, args.names);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
