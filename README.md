# longest-word-finder
This function will find the longest word in a sentence and output that word's length

## Features
* Splits a sentence into individual words
* Iterates through each word to compare lengths
* Tracks and returns the longest word length
* Handles sentences of any size
* Loops and conditionals

## Concepts Utilized
* Creating a function
* Split() method
* Iteration
* If statements
* Loops

```
JavaScript

function findLongestWordLength(sentence) {
  let longestWord = "";
  let wordsArray = sentence.split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }

  return longestWord.length;
}

```

## Example Usage
```

findLongestWordLength("The quick brown fox");
→ 5   // ("quick")

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
