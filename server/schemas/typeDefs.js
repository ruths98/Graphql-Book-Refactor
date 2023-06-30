const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Book {
    bookId: ID 
    title: String!
    authors: [Authors]
    description: String,
    image:?,
    link:String
  }

    type Query {
    me: User
  }

  type User{
    _id: ID,
    username: String,
    email: String,
    bookCount: Int,
    savedBooks: [Book], 
    }

    type Auth {
      token: ID!,
      user: User
    }
    
    type Mutation {
    login(email: Email!, password: Password!):Auth type?
    addUser(username: Username! ,email: email!,password: password!):Auth type
    saveBook(
      input BookInput {
        author: [Author]
        title: String
        description: String
        bookId: Int,
        Image:
      }
      ): User
    removeBook(bookId: bookId!):User
  }
`;
//book ID is not _id but id value from book api
module.exports = typeDefs;