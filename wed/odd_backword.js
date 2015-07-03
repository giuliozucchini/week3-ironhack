'use strict';

var sentence1 = "fill the proper tank for the cow";

function odd_selector(sentence) {
	var res = sentence1.split(' ');
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
	odd_words.reverse();
	var secretMessage = "";

	for (var i = 0; i < odd_words.length; i++) {
		secretMessage = secretMessage + odd_words[i].charAt(i);
	}
	return secretMessage;
}


var message = decoder(sentence1);
console.log(message);

