// Question 1

function reveseWorld(word) {
var originalStr = "word";
var reversedStr = "";

for (i = 0; i < originalStr.length; i++) {
  reversedStr = originalStr.charAt(i) + reversedStr;
  }

console.log("Reversed string: "+ reversedStr);
}