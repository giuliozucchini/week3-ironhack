
'use strict'
var read = require('read');


// * * DEFINE THE GAME * * //

var Game = function (world, player) {
	this.world = world;
	this.player = player;
};

Game.prototype.start = function () {
	var random = world[Math.floor(Math.random()*world.length)];
	console.log(random.description);
	console.log("There is a door in this direction: " + random.exit);
	var self = this;
	read({
		prompt: "Where would you like to go ?\n>"
	}, function displayWhere (err, where) {
		if (err) {
			throw err;
		}
		self.move(where, random);
	});

}

	Game.prototype.move = function (where, random) {
		switch (where) {
	  case random.exit:
	    var the_game = new Game(world, the_player)
		the_game.start();
	    break;
	  default:
	    console.log("! GAME OVER !");
	    break;
	}
}


// * * DEFINE THE PLAYER * * //

var Player = function (){

	read({
		prompt: "What's your name?\n>"
	}, function displayName (err, name) {
		if (err) {
			throw err;
		}
	    console.log("You're ready to start the adventure: " + name);
	    
	    var the_game = new Game(world, the_player)
		the_game.start();
	});
};



// * * DEFINE THE ROOM * * //

var Room = function (exit, description) {
	this.exit = exit;
	this.description = description;
};


var cinema = new Room ("N", "You are in a dark room. Youa re at the cinema.");
var norway = new Room ("S", "You are in a cold place. Youa re in Norway.");
var castle = new Room ("W", "You are a king. You are in a castle and there is a shiny gem.");
var gallery = new Room ("E", "You are in the dark. You are in a gallery.");
var disco = new Room ("N", "You are dancing. You are in a club.");

var world = [cinema, norway, castle, gallery, disco];



var the_player = new Player();


