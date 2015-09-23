 Template.index2.events({

   'submit form': function(e) {
                 e.preventDefault();

       var user  =Users.findOne({_id:$(e.target).find('#user').val()}); 
       var store =Stores.findOne({_id: $(e.target).find('#store').val()});
       var algorithm = Algorithms.findOne({_id:$(e.target).find('#algorithm').val()});
       Session.set('user', user);
       Session.set('store', store);
       Session.set('algorithm', algorithm);
       if(algorithm.description==='Simple Symilarity'){
          var result =simpleSmilarity(user.searchPerformed, store.tags);

          Session.set('result', result);
       }else if(algorithm.description==='Stored Based'){

          var result =storedBased(user, store);

          Session.set('result', result);
       }else if(algorithm.description==='Cosine Symilarity'){

          var result =textCosineSimilarity(user.searchPerformed, store.tags);

          Session.set('result', result);
       }else if(algorithm.description==='Compare All'){

          var result_cosine =textCosineSimilarity(user.searchPerformed, store.tags);
          Session.set('result_cosine', result_cosine);
          var result_simple =simpleSmilarity(user.searchPerformed, store.tags);
          Session.set('result_simple', result_simple);
          var result_stored =storedBased(user, store);
          Session.set('result_stored', result_stored);
          Session.set('algorithm',0);
       }
    }
  });

Template.index2.helpers({
    result: function () {
      return Session.get('result');
    },
   result_cosine: function () {
      return Session.get('result_cosine');
    },
   result_simple: function () {
      return Session.get('result_simple');
    },
   result_stored: function () {
      return Session.get('result_stored');
    },
    user:function(){
          return Session.get('user');
    },
    store:function(){
          return Session.get('store');
    },
    algorithm:function(){
      return  Session.get('algorithm');
    }

});