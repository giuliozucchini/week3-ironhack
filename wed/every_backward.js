'use strict';

function odd_selector(sentence) {
	var res = sentence.split(' ');
	var odd_words = [];

	for (var i = 0; i < res.length; i++) {
		odd_words.push(res[i]);
	};
	return odd_words;
}

function decoder(words) {
	var odd_words = odd_selector(words);
	odd_words.reverse();
	var secretMessage = "";

	for (var i = 0; i < odd_words.length; i++) {
		secretMessage = secretMessage + odd_words[i].charAt(i);
	}
	   console.log(secretMessage);
}


module.exports = decoder;

