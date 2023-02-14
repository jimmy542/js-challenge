function isThisAPalindrome(str) {
    let o = '';
  for (let i = str.length - 1; i >= 0; i--){
        o += str[i];
        // console.log(o)
  }
  if(o===str){

    return true

  }else{
    
    return false

  }
}

isThisAPalindrome('yay');
// returns true
isThisAPalindrome('no');