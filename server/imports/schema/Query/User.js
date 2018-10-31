const { GraphQLObjectType, GraphQLString } = require("graphql");
const _ = require("lodash");

const UserType = require("../Types/User");

var user = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" }
];

const UserQuery = new GraphQLObjectType({
  name: "UserQuery",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(user, { id: args.id });
      }
    }
  }
});

module.exports = UserQuery;
