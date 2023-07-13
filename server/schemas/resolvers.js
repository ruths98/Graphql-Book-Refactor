const { User} = require('../models')

const resolvers = {
  Query: {
  
    books: async (parent, { title }) => {
      const params = title ? { title } : {};
      return books.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const newUser = await newUser.createOne(args);
      return newUser;
    },

    loginUser: async (parent, args) => {
const loggedIn =await loggedIn.createOne(args);
      return loggedIn;
    },
    saveBook: async (parent, args) => {
      const bookList = await bookList.createOne(args);
      return bookList;
    },
    removeBook: async (parent, {bookId}) => {
      const bookList = await books.findOneAndDelete(
        { bookId },
        { new: true }
      );
      return bookList;
    },
  },
};

module.exports = resolvers;