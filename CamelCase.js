function cammelCase(input, delimiter) {
    var words = [];
  
    // Splitting the input string into words using the delimiter
    var word = '';
    for (var i = 0; i < input.length; i++) {
      var char = input.charAt(i);
      if (char === delimiter) {
        words.push(word);
        word = '';
      } else {
        word += char;
      }
    }
    words.push(word);
  
    // Capitalize the first letters of each word
    for (var j = 0; j < words.length; j++) {
      var currentWord = words[j];
      currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
      words[j] = currentWord;
    }
  
    // Joining the words back into a single string
    var result = words.join('');
  
    // Capitalize the first letter of the result
    result = result.charAt(0).toUpperCase() + result.slice(1);
  
    // Return the resulting string
    return result;
  }
  var inputString = "the-test-case";
  var delimiter = "-";
  var outputString = cammelCase(inputString, delimiter);
  console.log(outputString); // Output: TheTestCase