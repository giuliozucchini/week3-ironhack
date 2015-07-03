
'use strict'
var read = require('read');



// * * * * * * * * * * * * * * * * DEFINE THE GAME * * * * * * * * * * * * * * * * //

var Game = function (world, player) {
	this.world = world;
	this.player = player;
	this.gems = 0;
	this.keys = 0;

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
				thegame.start();
			    break;
			  case "GET THE GEM":
			    this.getGem();
			    break;
			  case "GET THE KEY":
			    this.getKey();
			    break;
			  case "GET THE SWORD":
			    this.getSword();
			    break;
			  case "DROP THE SWORD":
			    this.dropSword();
			    break;
			  case "SECRET ROOM":
			    this.secretRoom();
			    break;
			  default:
			    console.log("* * * * * * * * * GAME OVER * * * * * * * * *");
			    break; 
				}
		}

	Game.prototype.secretRoom = function () {
		console.log("You are in the secret rooom. You can a gem, a golden key or a silver sword. Choose between: GET THE GEM, GET THE KEY, GET THE SWORD.");			
		thegame.start();
	}

	Game.prototype.getGem = function () {
       	this.gems++;
		console.log("You have " + this.gems + " gems!");
console.log(" ");	
console.log(" ");		
console.log("            ,gaaaaaaaagaaaaaaaaaaaaagaaaaaaaag,");
console.log("           ,aP8b    _,dYba,       ,adPb,_    d8Ya,");
console.log("         ,aP  Yb_,dP     Yba, ,adP     Yb,_dP   Ya,");
console.log("       ,aP    _88          )888(          88_     Ya,");
console.log("     ,aP   _,dP Yb      ,adP  8 Yba,      dP Yb,_    Ya,");
console.log("   ,aPYb _,dP8    Yb  ,adP    8    Yba,  dP    8Yb,_ dPYa,");
console.log(" ,aP  YdP  dP     YbdP        8       YbdP     Yb  YbP   Ya,");
console.log("I8aaaaaa8aaa8baaaaaa88aaaaaaaa8aaaaaaaa88aaaaaad8aaa8aaaaaa8I");
console.log(" Yb,   d8a, Ya      d8b,      8      ,d8b      aP ,a8b   ,dP'");
console.log("   Yb,dP  Ya  8,   dI  Yb,    8    ,dP  Ib   ,8  aP  Yb,dP");
console.log("     Y8,    YaI8, ,8'    Yb,  8  ,dP    `8, ,8IaP    ,8P");
console.log("       Yb,   `Y8ad'       Yb,8,dP       `ba8P     ,dP");
console.log("         Yb,    `8,          Y8P        ,8'    ,dP");
console.log("           Yb,    `8,         8         ,8'    ,dP	        ! ! ! THE GEM IS YOURS ! ! !");
console.log("             Yb,   `Ya        8        aP'   ,dP");
console.log("               Yb,    8,      8      ,8    ,dP");
console.log("                 Yb,  `8,     8     ,8'  ,dP");
console.log("                   Yb, `Ya    8    aP' ,dP");     
console.log("                     Yb,  8,  8  ,8  ,dP");
console.log("                       Yb,`8, 8 ,8',dP");
console.log("                         Yb,Y 8a ,dP");
console.log("                           Y88888P");
console.log("                             Y8P");
console.log(" ");

		thegame.start();
	}


	Game.prototype.getKey = function () {
       	this.keys++;
		console.log("You have " + this.keys + " keys!");
console.log(" ");
console.log(" ");		
console.log(" ad8888888888ba");
console.log("dP'          `8b,");
console.log("8  ,aaa,        Y888a     ,aaaa,     ,aaa,  ,aa,");
console.log("8  8' `8            8baaaad    baaaad    baad  8b");
console.log("8  8   8                                          8b 	! ! !  THE KEY IS YOURS  ! ! ! ");
console.log("8  8, ,8         ,aaaaaaaaaaaaaaaaaaaaaaaaddddd88P");
console.log("8   888      ,d88");
console.log("Yb,         ,ad8");
console.log(" Y8888888888P");
console.log(" ");
console.log(" ");		
		thegame.start();
	}

	Game.prototype.getSword = function () {
		console.log("You have a silver sword!");
console.log(" ");
console.log(" ");
console.log("                AAA ");
console.log("               {   }");
console.log("               p   !");
console.log("               ; : ;");
console.log("               | : |");
console.log("               | : |");
console.log("               l ; l");
console.log("               l ; l");
console.log("               I ; I");
console.log("               I ; I");
console.log("               I ; I");
console.log("               I ; I");
console.log("               d | b");	
console.log("               H | H");
console.log("               H | H");
console.log("               H I H");
console.log("       ,;,     H I H     ,;,		! ! !  THE SWORD IS YOURS  ! ! !  ");
console.log("      ;H@H;    ;_H_;,   ;H@H;");
console.log("      `WWd_,;|4H@HK|;,_bWW'");
console.log("       'WMMMMM$@@@$MMMMMW'");
console.log("          '~~*;!8@8!;*~~' ");
console.log("               ;888;");
console.log("               ;888;");
console.log("               ;888;");
console.log("               ;888;");
console.log("               d8@8b");
console.log("               O8@8O");
console.log("               T808T");
console.log("                `~`");
console.log(" ");
console.log(" ");
		thegame.start();
	}	

	Game.prototype.dropSword = function () {
		console.log("You have left the silver sword!");
		thegame.start();
	}


// * * * * * * * * * * * * * * * * DEFINE THE PLAYER * * * * * * * * * * * * * * * * //

var Player = function (){

	read({
		prompt: "What's your name?\n>"
	}, function displayName (err, name) {
		if (err) {
			throw err;
		}
	    console.log("You're ready to start the adventure: " + name);
	    thegame.start();
	});
};



// * * DEFINE THE ROOM * * //

var Room = function (exit, description) {
	this.exit = exit;
	this.description = description;
};


// * * * * * * * * * * * * * * * * LAUNCH THE GAME * * * * * * * * * * * * * * * * //


var cinema = new Room ("N", "You are in a dark room. You are at the cinema.");
var norway = new Room ("S", "You are in a cold place. You are in Norway and there is silver sword. Do you want to GET THE SWORD?");
var castle = new Room ("W", "You are a king. You are in a castle and there is a shiny gem. Do you want to GET THE GEM?");
var gallery = new Room ("E", "You are in the dark. You are in a gallery and there is a golden gem. Do you want to GET THE KEY?");
var disco = new Room ("N", "You are dancing in a club. Type SECRET ROOM to get inside a mysterious room.");
var bazar = new Room ("N", "You are in a bazar. Enjoy the food :).")


var world = [cinema, norway, castle, gallery, disco, bazar];

var the_player = new Player();

var thegame = new Game(world, the_player);

