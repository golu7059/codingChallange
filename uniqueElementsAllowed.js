function removeDuplicates(numbers) {
    const uniqueNumbersSet = new Set(numbers);   // set to remove duplicate
    const uniqueNumbersArray = Array.from(uniqueNumbersSet);  // converting back to array
  
    return uniqueNumbersArray;
  }
  
  // Example usage:
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicates(inputArray);
  
  console.log(uniqueNumbers); 
  