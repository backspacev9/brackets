module.exports = function check(str, bracketsConfig) {
  var reworked = []; 
  for (let i = 0; i < bracketsConfig.length; i++){
    reworked[i] = bracketsConfig[i].join('');
  }
  console.log('reworked: '+reworked ); 
  var length =str.length;
  var prevStr = '';
  for (let i = 0; i < length; i++){
    prevStr = str;
    for (let k = 0; k < reworked.length; k++){  
      str = str.replace(reworked[k],'');
    }
    if (str == prevStr || str == ''){
      break;
    }  
  }
  if (str.length > 0){
    return false
  } else return true
}


