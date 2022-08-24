function masaiPalSubString(S){
    max=-Infinity;
for(let i=0;i<S.length;i++)
  {
    
     for(let j=i;j<S.length;j++)
  {
       let s="";
        for(let k=i;k<=j;k++)
  {
   s=s+S[k]+"";

  }

if(substr(s))
{
 if(max<s.length)
 {
     max=s.length;
 }
}
  }   
  }
console.log(max);
}
  function substr(str)
{
  let count=0;

     
      let  k=parseInt(str.length/2);
      
      
      for(let i=0;i<k;i++){
          if(str[i] == str[str.length-1-i]){
              count++;
          }
      }
      if(count == k){
     return true;
      }
      else{
        return false;
      } 
}


// emaef