

// var countVowels = function (str) {
// 	var vowels = ["a", "e", "i", "o", "u"]
// 	var result = 0
// 	var characters = str.split("");
// 	console.log(characters);

// 	for (var i = 0; i < characters.length ; i++){
// 	console.log(characters[i]);	
	
// 	if (vowels.indexOf(characters[i]) != -1 ) {
// 		result += 1;

// 		}
// 	}
// 	return result
// }
// console.log(countVowels("hello"));


var longestWord = function(sentence) {

    var words = sentence.split(" ");
    
    var maxLength = words[0].length;
    
    var maxLengthWord = words[0];
    
    for (var i = 0; i < words.length; i++) {
    
        var wordLength = (words[i].length);
    
        if (wordLength > maxLength) {
    
            maxLength = wordLength;
    
            maxLengthWord = words[i];
    
        };
    };

    return maxLengthWord;
};

console.log(longestWord("This is my string"));


*************************


var longestWord = function (str) {
    var string = str.split(" ");
    var longest = "";

        for (var i= 0; i < string.length; i++) {
            if (string[i].length > longest.length) {
                longest = string[i];
            }
        }

        return longest;
}

console.log(longestWord("hello which is the longest motherfucking word in this motherfuckingewrewrewx"));






