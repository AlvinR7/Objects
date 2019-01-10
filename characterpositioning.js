function countLetters(input) {
  var input = input.split(" ").join("").split(""); // end result removing spaces from input
  var countList = {};  // object

  for (var i = 0; i < input.length; i++) {
    letter = input[i]; // redefining input[i]
    if (countList[letter]) {  // determines if "l" is in the object
      countList[letter].push(i); // push index value to object countList
    }
    else {
      countList[letter] = [i]; // adds the letter l and value to the object
    }
  }
  return countList;
}

console.log(countLetters("lighthouse in the house"));