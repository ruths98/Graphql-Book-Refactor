const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Book {
    bookId: Integer //this is not _id but id value from book api
    title: String!
    authors: String //array???
    description: String,
    image:?,
    link:String
  }

    type Query {
    me: [User]
  }

  type Mutation { 
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
  {
    login(email, password):Auth type?
    addUser(username!,email!,password!):Auth type
    saveBook(book author array, description, title, bookId, image, link): User type
    //look into an input type to handle these params
    removeBok(bookId!):User type
  }

  type User{
    _id: Integer,
    username: String,
    email: String,
    bookCount: Integer,
    savedBooks: [Book], 
    }

    type Auth {
      token: Integer,
      user: [User]
    }
`;

module.exports = typeDefs;