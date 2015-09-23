
if(Categories.find({}).count()==0){

Categories.insert({description:"eletronicos"});

Categories.insert({description:"livraria"});

Categories.insert({description:"alimentacao"});

Categories.insert({description:"esporte"});

Categories.insert({description:"saude"});
  
Categories.insert({description:"cosmetico"});
  
Categories.insert({description:"bebe"});
  
Categories.insert({description:"servicos"});
  
  


}





if(Stores.find({}).count()==0){

  Stores.insert({name:"Só Saúde",description:"A Só Saúde é uma loja especializada em produtos médico-hospitalares com uma excelente qualidade em seus produtos na área hospitalar.",tags:"saude,corpo,saudavel,postura,massageador,produtos medico-hospitalar,medico",category:"saude",score:0});
  
  Stores.insert({name:"Empada Carioca",description:"Venda de salgados e empadas que é o seu diferencial no mercado com diversos sabores e variados salgados.",tags:"lanches,empadas,salgados,lanchonetes,calzone,esfiha,folhado,pastel,quibe,kibe,coxinha,tortinha",category:"alimentacao",score:0});
  
  Stores.insert({name:"Mega Pixel",description:"Mega Pixel é uma  loja de revelação de fotos e vendas de maquinas fotográficas com qualidade no seus produtos e agilidade.",tags:"foto,revelação,maquina,fotografica,fotos,máquinas,revelação",category:"servicos",score:0});
  
    Stores.insert({name:"Dental White",description:"Clinica odontológica moderna, com equipamentos de ponta, com os serviços de ortodontia, implante, estética, endodontia, prótese, cirurgia, clareamento.",tags:"Dente,clinica,dentaria,dentes,clinicas,boca,odontológica,odontologia,implante,estética,endodontia,prótese,cirurgia,clareamento",category:"saude",score:0});

  Stores.insert({name:"Bamboo Podologia e Bem Estar",description:"Clinica especializada em tratamento do bem estar dos pés, com diversas técnicas de massagem e relaxamento para os pés e mãos, tratando de calosidades, calos, unhas encravadas entre outros serviços de qualidade.",tags:"pe,clinica,pes,clinicas,podologia,bem estar,massagem,relaxamento,mãos,calos,calosidades,unha,unhas encravadas",category:"saude",score:0});
  
  
  Stores.insert({name:"Login Informática",description:"Loja especializada em computadores, notebooks, contando com assistência técnica especializada de excelente qualidade.",tags:"L1,informática,peças,acessórios,computadores,pcs,Login Informática,games,jogos,suprimentos",category:"eletronicos",score:0});

 Stores.insert({name:"Planeta bebê",description:"Venda de produtos para decoração  infantil com diversas opções, sofisticação e qualidade num só lugar.",tags:"L2,roupas,moda,moda infantil,teen,camisa,short,bermuda,jaqueta,saia,casaco,calça,blusa,crianças,moda,coleção,camisas,shorts,blusas,bermudas,vestidos,saias,sapatos,bones,meias,calca,bermudas,camisetas,blusao,conjuntos,jaquetas,coletes,chinelo,sunga,regata",category:"bebe",score:0});
  
  
  Stores.insert({name:"Espaço Kids",description:"Loja especializada em jogos que oferece aos seus clientes uma grande variedade de brinquedos para o lazer de seu filho.",tags:"L2,roupas,moda,moda infantil,teen,camisa,short,bermuda,jaqueta,saia,casaco,calça,blusa,crianças,moda,coleção,camisas,shorts,blusas,bermudas,vestidos,saias,sapatos,bones,meias,calca,bermudas,camisetas,blusao,conjuntos,jaquetas,coletes,chinelo,sunga,regata",category:"bebe",score:0});

  
  Stores.insert({name:"Maria Cheirosa",description:"Marca focada no comércio de cosméticos, produtos artesanais, como sais, escalda pés, espumas, sabonetes e velas aromáticas.",tags:"L1,perfumes,aromatizador,óleos,bucha,sais de banho,aromatizantes,esfoliantes,toalhas,tapa olhos,toucas para chuveiro,perfumaria,eau,toilet,naturais,cestas,banhos,corpo,massagem,ambiente,temáticos,frutais,hipoalergênica,banho,saúde,pele,aromas,óleo,licor,sensual,feminino,masculino,banheiros,indústrias",category:"cosmetico",score:0});
  
  
    Stores.insert({name:"Quem disse berenice?",description:"Loja cujo lema é colocar um brilho no seu rosto, seja com um batom ou um sorriso.",tags:"L1,perfumes,aromatizador,óleos,bucha,sais de banho,aromatizantes,esfoliantes,toalhas,tapa olhos,toucas para chuveiro,perfumaria,eau,toilet,naturais,cestas,banhos,corpo,massagem,ambiente,temáticos,frutais,hipoalergênica,banho,saúde,pele,aromas,óleo,licor,sensual,feminino,masculino,banheiros,indústrias",category:"cosmetico",score:0});

  
      Stores.insert({name:"Burguer King",description:"Loja especializada em fast food onde é oferecido aos seus clientes os mais diversos cardápios para seu lanche.",tags:"L3,hamburger,lanches,comida,fast food,big king,bk cheddar duplo,cheeseburguer,refrigerante,refil,whopper",category:"alimentacao",score:0});

}


if(Users.find({}).count()==0){
  Users.insert({name:"Saudável",storeDetailsView:"saude,pe,clinica,pes,clinicas,podologia,bem estar,massagem,relaxamento,mÃ£os,calos,calosidades,unha,unhas encravadas,sapatos,L1,tenis,calçados,acessórios,caminhar,andar,correr,cooper,running,chuteiras,adventure,saude,L1,produtos naturais,suplementos",searchPerformed:"saude,pe,clinica,pes,clinicas,podologia,bem estar,massagem,relaxamento,mÃ£os,calos,calosidades,unha,unhas encravadas,sapatos,L1,tenis,calçados,acessórios,caminhar,andar,correr,cooperr",categoriesVisited:"esporte,saude,alimentacao",dv:0,sp:0,cv:0});

// Users.insert({name:"Student",storeDetailsView:"livro",searchPerformed:"lanches,esfiha,massageador",categoriesVisited:"livraria",dv:0,sp:0,cv:0});

// Users.insert({name:"Lawyer",storeDetailsView:"livro",searchPerformed:"lanches",categoriesVisited:"roupa",dv:0,sp:0,cv:0});

// Users.insert({name:"Gamer",storeDetailsView:"livro",searchPerformed:"lanches",categoriesVisited:"roupa",dv:0,sp:0,cv:0});


}

if(Algorithms.find().count()==0){

 // Algorithms.insert({description:"Compare All"});
  Algorithms.insert({description:"Stored Based"});
 // Algorithms.insert({description:"Tag Based"});
 // Algorithms.insert({description:"Time Based"});
 //Algorithms.insert({description:"Content Based"});
  Algorithms.insert({description:"Simple Symilarity"});
  Algorithms.insert({description:"Cosine Symilarity"});
 // Algorithms.insert({description:"Cossine Symilarity with Logarithms"});

}