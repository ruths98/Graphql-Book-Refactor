const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Books {
    title: String!
    author: String
  }

    type Query {
    Books: [Books]
  }

//   type Mutation { 
//     createMatchup(tech1: String!, tech2: String!): Matchup
//     createVote(_id: String!, techNum: Int!): Matchup
//   }
`;

module.exports = typeDefs;