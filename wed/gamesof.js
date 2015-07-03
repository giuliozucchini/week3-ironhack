

var fs = require('fs');

function fileActions(err, file){
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
    print_episode(episodes[0]);
}

function print_episode(info) {
	console.log("Title: " + info.title + " Episode: " + info.episode_number);
	console.log("Description: "+ info.description);
	console.log("Rating: "+ info.rating +" "+ stars(info.rating));

}

fs.readFile("./GoTEpisodes.json", "utf8", fileActions);


function stars(rating) {
	var thestars = "";
	for( var i = 0; i <= rating ; i++ ) {
	thestars += "*";
	}
	return thestars;
}


function order(episodes) {
	var ep = [episode_number];
	var newOrder = numbers.sort(function(a, b){
	return a-b
});
}

