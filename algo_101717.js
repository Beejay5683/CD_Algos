
function reverseString(str) {
  var arr= [str];
  
  for(var i= arr[str.length-1]; i>=arr[0]; i--){
    console.log(i);
  }
  return str;
}

reverseString("hello");
