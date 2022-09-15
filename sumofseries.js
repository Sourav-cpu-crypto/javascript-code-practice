function sumOfSeries(N, X) {
      sum=0;
     p=1;
     if(N <=0 )
     {
         console.log("-1");
     }
    
     else if(N >=1 && N <=20 && X >=1 
     && X <=10 )
     {
   for (i=0;i<N;i++)
   {
     
         sum=sum+X**(i);
       
   }
     console.log(sum );
     } 
  
}
