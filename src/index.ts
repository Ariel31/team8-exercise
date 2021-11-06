import * as express from "express";
const { graphqlHTTP } = require("express-graphql");
import schema from "./schema";

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
