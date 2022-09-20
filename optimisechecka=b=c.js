//check a=b=c with optimise
let str="abacbcba";
// a
// ab
// aba 
// abac 
// abacb
// abacbc 
// abacbcb
// abacbcba



    count=0;
for(let a=0;a<=str.length-1;a++){
let bag="";
  counta=0;
  countb=0;
  countc=0;
  for(let b=a;b<=str.length-1;b++){
    bag=bag+str[b];

    if(bag[bag.length-1] && bag[bag.length-1]=="a" )
    {
      counta++;
    }
 else if(bag[bag.length-1] && bag[bag.length-1]=="b" )
    {
      countb++;
    }
     else if (bag[bag.length-1] && bag[bag.length-1]=="c" )
    {
      countc++;
    }



    
if(counta==countb && countb==countc){
  
count++;

}
    

  }
}
    console.log(count);