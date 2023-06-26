const { Tech, Matchup } = require('../models');
//see user-controller.js and the typeDefs
const resolvers = {
  Query: {
  
    books: async (parent, { title }) => {
      const params = title ? { title } : {};
      return books.find(params);
    },
  },
  Mutation: {
    saveBook: async (parent, args) => {
      const matchup = await Matchup.createOne(args);
      return matchup;
    },
    deleteBook: async (parent, { _id, techNum }) => {
      const bookList = await books.findOneAndDelete(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return bookList;
    },
  },
};

module.exports = resolvers;