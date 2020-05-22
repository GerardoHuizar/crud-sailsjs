module.exports = {


  friendlyName: 'Get users',


  description: 'get all users',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    var records = await User.find();

    // All done.
    return records;

  }


};
