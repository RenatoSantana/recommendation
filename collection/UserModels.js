UserModel = SimpleSchema({
 
 _id: {
    type: String,
    optional: true,
   },
  user: {
    type: String,
    max: 100
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


  })