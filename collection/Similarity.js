Similarity  = SimpleSchema({
 _id: {
    type: String,
    optional: true,
   },
   
  user: {
    type: String,
    max: 100
  },

  store: {
    type: String,
    max: 100
  }

  

})