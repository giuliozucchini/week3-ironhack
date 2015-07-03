

var sentence1 = "Attack her nose under here with an itch" 
var sentence2 = "Raul Nuñez call never finished"
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
var sentence4 = "inner peace is overrated"
var sentence5 = "Fill the proper tank for the cow"

var even_backward = require("./even_backward.js")
var even_forward = require("./even_forward.js")
var odd_forward = require("./odd_forward.js")
var odd_backward = require("./odd_backward.js")

var every_backward = require("./every_forward.js")
var every_forward = require("./every_backward.js")



function superdecoder (sentence, type) {
	switch (type) {
	case even_forward:
		even_forward(sentence);
		break;
	case even_backward:
		even_backward(sentence);
		break;
	case odd_backward:
		odd_backward(sentence);
		break;
	case odd_forward:
		odd_forward(sentence);
		break;
	case every_forward:
		every_forward(sentence);
		break;
	case every_backward:
		every_backward(sentence);
		break;		
	}
}


superdecoder(sentence1, odd_forward);
superdecoder(sentence1, odd_backward);
superdecoder(sentence1, even_forward);
superdecoder(sentence1, even_backward);
superdecoder(sentence1, every_backward);
superdecoder(sentence1, every_forward);


superdecoder(sentence2, odd_forward);
superdecoder(sentence2, odd_backward);
superdecoder(sentence2, even_forward);
superdecoder(sentence2, even_backward);
superdecoder(sentence2, every_backward);
superdecoder(sentence2, every_forward);


superdecoder(sentence3, odd_forward);
superdecoder(sentence3, odd_backward);
superdecoder(sentence3, even_forward);
superdecoder(sentence3, even_backward);
superdecoder(sentence3, every_backward);
superdecoder(sentence3, every_forward);


superdecoder(sentence4, odd_forward);
superdecoder(sentence4, odd_backward);
superdecoder(sentence4, even_forward);
superdecoder(sentence4, even_backward);
superdecoder(sentence4, every_backward);
superdecoder(sentence4, every_forward);


superdecoder(sentence5, odd_forward);
superdecoder(sentence5, odd_backward);
superdecoder(sentence5, even_forward);
superdecoder(sentence5, even_backward);
superdecoder(sentence5, every_backward);
superdecoder(sentence5, every_forward);





