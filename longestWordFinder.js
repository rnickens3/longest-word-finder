/*
Completed December 2nd, 2025
This function will sort through a sentence and output the longest word's length.
*/

//Function takes any sentence and returns the longest word's length.
function findLongestWordLength(sentence) {
  let longestWord = "";
  let wordsArray = sentence.split(" ");

  //Goes through each word and updates longestWord 
  for (let i = 0; i < wordsArray.length; i++) {
    const wordLength = wordsArray[i].length;
 
    if (wordLength > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }

   return longestWord.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
//This should output 6
