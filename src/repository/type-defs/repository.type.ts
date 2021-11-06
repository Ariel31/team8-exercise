const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

export const RepositoryType = new GraphQLObjectType({
  name: "Repository",
  fields: () => ({
    name: { type: GraphQLString },
    size: { type: GraphQLInt },
    owner: { type: GraphQLString }
  })
});
