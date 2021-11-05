const urlEncode = (string)=>{
  //remove white space at the end 
  const arrString = string.split("")
  for(let i = arrString.length -1 ; i>=0 ; i--){
    let char = arrString[i];
    
    if(char.indexOf(" ") >=0){
     arrString.splice(i,1)
    }else{
      break;
    }
  }

  let start =0;
  let end = arrString.length -1;
  

  //add %20
  while(start < end){
    if(arrString[start].indexOf(' ') >=0){
      arrString[start] ="%20"
      
    }
    
    start++;
  }
  
  return arrString.join('');
}
