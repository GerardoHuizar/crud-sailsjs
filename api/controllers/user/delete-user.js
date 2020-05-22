module.exports = {


  friendlyName: 'Delete user',


  description: 'sad',


  inputs: {
    id: {
      required: true,
      type: 'number'
    },
  },


  exits: {
    success: {
      description: 'User account was deleted successfully.'
    },
  },


  fn: async function ({id}) {
    try {
      if (id !== SAILS_LOCALS.me.id) {
        await User.destroyOne({id});
      }
      return 'No puede eliminar el usario logueado';
    } catch (error) {
      sails.log(error);
    }
  }


};
