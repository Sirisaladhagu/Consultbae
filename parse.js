function prase(inputString) {
    var output = [];
    var value = 0;
    var len = inputString.length;
  
    for (var i = 0; i < len; i++) {
      var char = inputString.charAt(i);
  
      if (char === 'p') {
        value++;
      } else if (char === 'm') {
        value--;
      } else if (char === 's') {
        value *= value;
      } else if (char === 'o') {
        output.push(value);
      }
    }
  
    return output;
  }
  var inputString = "ppppsmoso"; 
  var outputArray = prase(inputString);
  console.log(outputArray); // Output: [15, 225]
  var inputString = "pppppsmoso";
var outputArray = prase(inputString);
console.log(outputArray); // Output: [24, 576]