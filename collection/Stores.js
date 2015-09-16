var object ={
 _id: {
    type: String,
    optional: true,
   },
  name: {
    type: String,
    max: 100
  },

  description: {
    type: String,
    max: 700
  },

   tags: {
    type: String,
    max: 600
  },

  category: {
    type: String,
    max: 100
  },

}

StoreSchema = new SimpleSchema(object);

Stores = new Meteor.Collection('stores');
Stores.attachSchema(StoreSchema);