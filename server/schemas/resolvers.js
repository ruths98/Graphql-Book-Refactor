const { Tech, Matchup } = require('../models');
//change these to proper params. I don't think we need a mutation
const resolvers = {
  Query: {
  
    books: async (parent, { title }) => {
      const params = title ? { title } : {};
      return books.find(params);
    },
  },
  Mutation: {
    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
  },
};

module.exports = resolvers;