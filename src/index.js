module.exports = function toReadable (number) {
  var array1 = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var array2 = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
var array3 = [
  "one hundred",
  "two hundred",
  "three hundred",
  "four hundred",
  "five hundred",
  "six hundred",
  "seven hundred",
  "eight hundred",
  "nine hundred",
];
   arr = String(number).split("").map(Number);
   if (number == 0){
     return "zero"
   }
   if (arr.length <= 2) {
    if (number <= 19) {
      return array1[number - 1];
    }
    if (number >= 20 && number % 10 == 0 && number <= 99) {
      return array2[arr[0] - 2];
    }
    if (number >= 20 && number <= 99) {
      return array2[arr[0] - 2] + " " + array1[arr[1] - 1];
    }
  } else  {
    if (arr.length == 3) {
      if (number % 100 == 0) {
        return array3[arr[0] - 1];
      }
      if (arr[1]>=2 && number % 10 == 0) {
        return array3[arr[0] - 1] + " " + array2[arr[1] - 2];
      }
      if ( arr.slice(1).join("") <= 19 ) {
        return array3[arr[0] - 1] + " " + array1[arr.slice(1).join("") - 1];
      }
      if (arr[1]>=2 && arr[2]>=1) {
        return array3[arr[0] - 1] + " " + array2[arr[1]-2] + " " + array1 [arr[2]-1]
      }
    }
  }
}