 simpleSmilarity =function(str1,str2) {
  var v1 = str1.split(',');
  var v2 = str2.split(',');
 
   	var count = 0;
   for (i = 0;  i< v1.length; i++){
			for (j = 0;  j< v2.length; j++){
				if(v1[i].toUpperCase()===v2[j].toUpperCase())
					count++;
      }
    }
   return Math.min(1, count/v1.length);
	}
 