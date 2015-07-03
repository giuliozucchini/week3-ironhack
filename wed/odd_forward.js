'use strict';


function odd_selector(sentence) {
	var res = sentence.split(' ');
	var odd_words = [];

	for (var i = 0; i < res.length; i++) {
		if (i % 2 == 1) {
			odd_words.push(res[i]);
		}
	};
	return odd_words;
}

function decoder(words) {
	var odd_words = odd_selector(words);
	var secretMessage = "";

	for (var i = 0; i < odd_words.length; i++) {
		secretMessage = secretMessage + odd_words[i].charAt(i);
	}
   console.log(secretMessage);
}

module.exports = decoder;