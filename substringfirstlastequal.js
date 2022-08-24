function subStrUnderCond(s){
    var result = 0;
    var n = s.length;
  

    for(i = 0; i < n; i++)
        for(j = i; j < n; j++)
            if (s.charAt(i) == s.charAt(j))
                result++;
  
    console.log(result);


}
