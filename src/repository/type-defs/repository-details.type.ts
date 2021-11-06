const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

export const RepoDetailsType = new GraphQLObjectType({
  name: "RepositoryContent",
  fields: () => ({
    name: { type: GraphQLString },
    size: { type: GraphQLInt },
    owner: { type: GraphQLString },
    privateOrPublic: { type: GraphQLString },
    files: { type: GraphQLInt },
    ymlContent: { type: GraphQLString },
    activeWebhooks: { type: GraphQLString }
  })
});
