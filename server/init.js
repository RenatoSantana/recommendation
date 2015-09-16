
if(Categories.find({}).count()==0){

Categories.insert({description:"eletronicos"});

Categories.insert({description:"livraria"});

Categories.insert({description:"alimentacao"});

Categories.insert({description:"esporte"});

Categories.insert({description:"saude"});


}





if(Stores.find({}).count()==0){

  Stores.insert({name:"Só Saúde",description:"A Só Saúde é uma loja especializada em produtos médico-hospitalares com uma excelente qualidade em seus produtos na área hospitalar.",tags:"saude,corpo,saudavel,postura,massageador,produtos medico-hospitalar,medico",category:"saude"});

  Stores.insert({name:"Empada Carioca",description:"Venda de salgados e empadas que é o seu diferencial no mercado com diversos sabores e variados salgados.",tags:"lanches,empadas,salgados,lanchonetes,calzone,esfiha,folhado,pastel,quibe,kibe,coxinha,tortinha",category:"alimentacao"});

}


if(Users.find({}).count()==0){
  Users.insert({name:"Sportsman",storeDetailsView:"saude,pe,clinica,pes,clinicas,podologia,bem estar,massagem,relaxamento,mÃ£os,calos,calosidades,unha,unhas encravadas,sapatos,L1,tenis,calçados,acessórios,caminhar,andar,correr,cooper,running,chuteiras,adventure,saude,L1,produtos naturais,suplementos",searchPerformed:"corrida,bike,futebol,esporte,tensor",categoriesVisited:"esporte,saude,alimentacao",dv:0,sp:0,cv:0});

 Users.insert({name:"Student",storeDetailsView:"livro",searchPerformed:"lanches,esfiha,massageador",categoriesVisited:"livraria",dv:0,sp:0,cv:0});

// Users.insert({name:"Lawyer",storeDetailsView:"livro",searchPerformed:"lanches",categoriesVisited:"roupa",dv:0,sp:0,cv:0});

// Users.insert({name:"Gamer",storeDetailsView:"livro",searchPerformed:"lanches",categoriesVisited:"roupa",dv:0,sp:0,cv:0});


}

if(Algorithms.find().count()==0){

  Algorithms.insert({description:"Compare All"});
  Algorithms.insert({description:"Stored Based"});
 // Algorithms.insert({description:"Tag Based"});
 // Algorithms.insert({description:"Time Based"});
 //Algorithms.insert({description:"Content Based"});
  Algorithms.insert({description:"Simple Symilarity"});
  Algorithms.insert({description:"Cossine Symilarity"});
 // Algorithms.insert({description:"Cossine Symilarity with Logarithms"});

}