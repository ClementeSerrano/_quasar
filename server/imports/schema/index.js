const { GraphQLSchema } = require("graphql");
const UserQuery = require("./Query/User");

module.exports = new GraphQLSchema({
  query: UserQuery
});
