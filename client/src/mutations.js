import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {
      _id
      email
      bookCount
      savedBooks
    }
  }
`;

export const LOGIN_USER = gql`{
    mutation loginUser($username: String!){
        loginUser(username: $username, password:$password)
        username
        password
        email
    }
}`;

export const SAVE_BOOK = gql`{
    mutation saveBook($title: String!){
        saveBook(title: $Title){
        bookId
        title
        authors
        description
        image
        link
    }
    }
}`;

export const REMOVE_BOOK = gql`{
   mutation removeBook($title: String!){
    removeBook(title:$title){
        bookId
        title
        authors
        description
        image
        link
    }
   }
}`;
