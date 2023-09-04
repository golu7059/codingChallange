// 1. You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.

function countWordOccurrences(text) {
    const wordCountMap = new Map();
    const words = text.split(' ');
  
    // Loop through the words and count their occurrences
    for (const word of words) {
      // Remove any leading/trailing spaces and convert to lowercase for consistency
      const cleanedWord = word.trim().toLowerCase();
  
      if (cleanedWord) {
        // If the cleaned word is not empty, update its count in the map
        if (wordCountMap.has(cleanedWord)) {
          // Increment the existing count
          wordCountMap.set(cleanedWord, wordCountMap.get(cleanedWord) + 1);
        } else {
          // Initialize a new count for the word
          wordCountMap.set(cleanedWord, 1);
        }
      }
    }
  
    return wordCountMap;
  }
  
  // Example usage:
  const text = "This is a sample text. This text is a simple example.";
  const wordCounts = countWordOccurrences(text);
  
  // Display the word counts
  for (const [word, count] of wordCounts) {
    console.log(`${word}: ${count}`);
  }
  