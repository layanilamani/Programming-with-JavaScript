onmessage = function () {
    var x = 0;
     
        while (1==1) {
            for (let i = 0; i <= 50000; i++) {
               if (i==50000) {
                postMessage(x); 
                x++;   
               }                
            }          
             
        }
        
      
};
onmessage();