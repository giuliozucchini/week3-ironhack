'use strict';


function even_selector(sentence) {
	var res = sentence.split(' ');
	var even_words = [];

	for (var i = 0; i < res.length; i++) {
		if (i % 2 == 0) {
			even_words.push(res[i]);
		}
	};
	return even_words;
}

function decoder(words) {
	var even_words = even_selector(words);
	var secretMessage = "";

	for (var i = 0; i < even_words.length; i++) {
		secretMessage = secretMessage + even_words[i].charAt(i);
	}
    console.log(secretMessage);
}



module.exports = decoder;
