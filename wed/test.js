
'use strict';

function decoder (words) {
	var secretMessage = '';
	
	words.forEach( function (word, i){
		var indexChar = i;
		secretMessage = secretMessage + word.charAt(indexChar);
	});

  	return secretMessage;
}



var words = [
    'January',
    'lacks',
    'caveats',
    'hazardous',
    'DOORS',
    'crying',
    'arrogantly',
    'climate',
    'proponent',
    'rebuttal'
];

var message = decoder(words);

console.log(message);
