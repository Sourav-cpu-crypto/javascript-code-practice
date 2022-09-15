//minimum length substring contains
//maximum distinct characters

let str="zoomsessionmooz";
let obj={};

count=0;
count1=0;
max=-Infinity;
min=Infinity;

for(let i=0;i<str.length;i++)
  {
   
if(obj[str[i]] == undefined)
{
  obj[str[i]]=1;
}
    else
{
  obj[str[i]]++;
}

  }
for( k in obj)
  {
    count++;
  }

for(let i=0;i<str.length;i++)
  {
   var arr=[];

  
for(let j=i;j<str.length;j++)
  {
 let obj1={};
    count1=0;
arr.push(str[j]);
   for(let k=0;k<arr.length;k++)
  {
    if(obj1[arr[k]] == undefined)
    {
      obj1[arr[k]]=1;
    }
else
    {
     obj1[arr[k]]++; 
    }

  }

    for( p in obj1)
  {
    count1++;
  }
        // console.log(count1);
    if( count1 == count )
    {
    
      if( min > arr.length)
      {
          min=arr.length;
      }
    
    }
    
  }


    
  }
console.log(min);