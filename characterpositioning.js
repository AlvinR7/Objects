function countLetters(input) {
  var input = input.split(" ").join("").split(""); 
  var countList = {}; 

  for (var i = 0; i < input.length; i++) {
    letter = input[i];
    if (countList[letter]) {  
      countList[letter].push(i); 
    }
    else {
      countList[letter] = [i]; 
    }
  }
  return countList;
}

console.log(countLetters("lighthouse in the house"));
