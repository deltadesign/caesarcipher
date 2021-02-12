const encode = () => {
  let message = document.getElementById("userInput").value.toLowerCase().trim();
  let resultArray = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let num = Number(document.getElementById("num").value);
 
  for ( i=0 ; i < message.length ; i++ ) {
    let letter = message[i];
    let letterRegEx = /[^a-z]/;
    if (letterRegEx.test(letter)){
      resultArray.push(letter)
    }else{
    let index = alphabet.indexOf(letter);
    let newIndex = index + num;
    if (newIndex < 0){
      newIndex = (index + 26) + num;
    } else if (newIndex > 25){
      newIndex = (index - 26) + num;
    }
    resultArray.push(alphabet[newIndex]);
    }
  }
  
document.getElementById("result").innerHTML = resultArray.join('');

}

const decode = () => {
  let message = document.getElementById("userInput").value.toLowerCase().trim();
  let resultArray = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let num = Number(document.getElementById("num").value);
 
  for ( i=0 ; i < message.length ; i++ ) {
    let letter = message[i];
    let letterRegEx = /[^a-z]/;
    if (letterRegEx.test(letter)){
      resultArray.push(letter)
    }else{
    let index = alphabet.indexOf(letter);
    let newIndex = index - num;
    if (newIndex < 0){
      newIndex = (index + 26) - num;
    } else if (newIndex > 25){
      newIndex = (index - 26) - num;
    }
    resultArray.push(alphabet[newIndex]);
    }
  }
  
document.getElementById("result").innerHTML = resultArray.join('');

}

const reset = () => {
  document.getElementById("userInput").value = "";
  document.getElementById("num").value = "";
  document.getElementById("result").innerHTML = "";
}