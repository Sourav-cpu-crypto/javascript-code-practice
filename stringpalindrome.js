function detectPalindrome(num){
let count=0;
      let str="";
     str=str+num;
     
      let  k=parseInt(str.length/2);
      
      
      for(let i=0;i<k;i++){
          if(str[i] == str[str.length-1-i]){
              count++;
          }
      }
      if(count == k){
          console.log("Yes");
      }
      else{
          console.log("No");
      }
}


