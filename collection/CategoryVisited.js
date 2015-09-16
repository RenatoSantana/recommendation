CategoryVisited  = SimpleSchema({
 _id: {
    type: String,
    optional: true,
   },
   
  user: {
    type: String,
    max: 100
  },

  category: {
    type: String,
    max: 100
  }

  

})