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

AlgorithmSchema = new SimpleSchema(object);

Algorithms = new Meteor.Collection('algorithms');
Algorithms.attachSchema(AlgorithmSchema);
