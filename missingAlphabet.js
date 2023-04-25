function countExtraChars(inputString) {
    var count = 0;
    for (var i = 0; i < inputString.length; i++) {
      var charCode = inputString.charCodeAt(i);
      if (charCode < 97 || charCode > 110) {
        count++;
      }
    }
    return count;
  }
  var inputString = 'abaxbdbbyyhwawiwjjjwem';
  var outputCount = countExtraChars(inputString);
  console.log(outputCount); // Output: 7
  var inputString = 'consultbae';
  var outputCount = countExtraChars(inputString);
  console.log(outputCount); // Output: 4
