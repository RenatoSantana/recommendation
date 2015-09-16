 storedBased =function(user, store) {
       var similarityStoreDetailView = 0;
       var similaritySearchPerformed = 0;
       var similarityCategoriesVisited =0
       if(user.storeDetailsView === null){
         similarityStoreDetailView= 0;
       }else{
           similarityStoreDetailView= textCosineSimilarity(user.storeDetailsView , store.tags);
       }

       if(user.searchPerformed === null){
         similaritySearchPerformed= 0;
       }else{
           similaritySearchPerformed= textCosineSimilarity(user.searchPerformed , store.tags);
       }

     if(user.categoriesVisited === null){
         similarityCategoriesVisited= 0;
       }else{
         var terms = termFreqMap(user.categoriesVisited);
         var freq = terms[store.category];
         if (typeof freq === "undefined"){
              freq = 0;
         }
         similarityCategoriesVisited= freq/((user.categoriesVisited.match(/,/g) || []).length+1);
       
       }

   return similarityStoreDetailView * 0.15 +
				  similaritySearchPerformed * 0.6 +
					similarityCategoriesVisited * 0.25;

 }