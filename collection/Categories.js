var object ={
 
 _id: {
    type: String,
    optional: true,
   },
  description: {
    type: String,
    max: 100
  }

}

CategorySchema = new SimpleSchema(object);

Categories = new Meteor.Collection('categories');
Categories.attachSchema(CategorySchema);

