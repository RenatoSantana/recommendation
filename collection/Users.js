var object ={
 _id: {
    type: String,
    optional: true,
   },
  name: {
    type: String,
    max: 100
  },

  storeDetailsView: {
    type: String,
    max: 10000
  },

  searchPerformed: {
    type: String,
    max: 1000
  },
  categoriesVisited: {
    type: String,
    max: 1000
  },

  dv:{
     type: Number
  },

  sp:{
     type: Number
   },

  cv:{
     type: Number

  }

}

UserSchema = new SimpleSchema(object);

Users = new Meteor.Collection('users2');
Users.attachSchema(UserSchema);
