Template.index.events({

   'submit form': function(e) {
                 e.preventDefault();

       var user  =Users.findOne({_id:$(e.target).find('#user').val()}); 
      // var stores =Stores.find().fetch();
       var algorithm = Algorithms.findOne({_id:$(e.target).find('#algorithm').val()});
       Session.set('user', user);
      // Session.set('stores', stores);
       Session.set('algorithm', algorithm);
       if(algorithm.description==='Simple Symilarity'){
        //  var result =simpleSmilarity(user.searchPerformed, store.tags);

           var cursor = Stores.find();
            if (!cursor.count()) return;
            
              cursor.forEach(function (store) {
              var result =simpleSmilarity(user.searchPerformed, store.tags);
               var score2 =Number.parseFloat(result);
               Stores.update(store._id, {
               $set: {score:score2}
              });
          
             
           
        });
         
         cursor = Stores.find({}, {sort: {score: -1}})
            if (!cursor.count()) return;
               var relevant = 0; 
               var pare=0;
              cursor.forEach(function (store) {
               pare = pare +1
           if(store.category==='saude' && store.score!==0 && pare<=3){
             relevant= relevant + 1;
            
          }
                
                
         
        });
         
          var A = 11 - relevant
         var recall = relevant/(relevant + A);
          recall = recall.toFixed(2) *100;
         Session.set('recall', recall);
         
         var A = 8 - relevant
         var precision = relevant/(relevant + A);
         precision = precision.toFixed(2) *100;
         Session.set('precision', precision);
       }else if(algorithm.description==='Stored Based'){
         
         
        var cursor = Stores.find();
        if (!cursor.count()) return;
        
       
        cursor.forEach(function (store) {
         var result =storedBased(user, store);
         var score2 =Number.parseFloat(result);
           Stores.update(store._id, {
            $set: {score:score2}
            });
         
         
           
        });
         
         cursor = Stores.find({}, {sort: {score: -1}})
            if (!cursor.count()) return;
               var relevant = 0; 
               var pare = 0;
              cursor.forEach(function (store) {
               pare = pare +1
           if(store.category==='saude' && store.score!==0 && pare  <=3){
             relevant= relevant + 1;
          }
                
                
         
        });
        var A = 11 - relevant
         var recall = relevant/(relevant + A);
          recall = recall.toFixed(2) *100;
         Session.set('recall', recall);
         
         var A = 8 - relevant
         var precision = relevant/(relevant + A);
         precision = precision.toFixed(2) *100;
         Session.set('precision', precision);
         
         
         


       //   var result =storedBased(user, store);

        //  Session.set('result', result);
       }else if(algorithm.description==='Cosine Symilarity'){
         
            var cursor = Stores.find();
            if (!cursor.count()) return;
               
              cursor.forEach(function (store) {
              var result =textCosineSimilarity(user.searchPerformed, store.tags);
               var score2 =Number.parseFloat(result);
               Stores.update(store._id, {
            $set: {score:score2}
            });
          
                
                
         
        });
         
         
         cursor = Stores.find({}, {sort: {score: -1}})
            if (!cursor.count()) return;
               var relevant = 0; 
                var pare =0;
              cursor.forEach(function (store) {
               pare = pare +1
           if(store.category==='saude' && store.score!==0 && pare<=3){
             relevant= relevant + 1;
          }
                
                
         
        });

         var A = 11 - relevant
         var recall = relevant/(relevant + A);
         recall = recall.toFixed(2) *100;
         Session.set('recall', recall);
         
         var A = 8 - relevant
         var precision = relevant/(relevant + A);
         precision = precision.toFixed(2) *100;
         Session.set('precision', precision);
        
       }
    }
  });


Template.index.helpers({
    results: function () {
      return Stores.find({}, {sort: {score: -1}});
    },
   result_cosine: function () {
      return Stores.find({}, {sort: {score: -1}});
    },

    user:function(){
          return Session.get('user');
    },
    store:function(){
          return Session.get('store');
    },
    recall:function(){
      return " - " + Session.get('recall') +"%";
    },
    precision:function(){
      return " - " + Session.get('precision')+"%";
    }
});