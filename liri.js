var twitKeys = require ("./keys.js");
var keys = twitKeys.twitterKeys;

var action = process.argv[2];

if (action === "my-tweets") {
	console.log('twitter lookup');
}
else if (action === "spotify-this-song") {
	var spotify = require('spotify');
 	var trackName = process.argv[3];
spotify.search({ type: 'track', query: trackName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(data.tracks.items[0].album.artists[0].name);
    console.log(trackName);
    console.log(data.tracks.items[0].album.artists[0].external_urls);
    console.log(data.tracks.items[0].album.name);
});
}
else if (action === "movie-this") {
	var omdbApi = require('omdb-client');
 	var thisTitle = process.argv[3];
	var params = {
    title: thisTitle
}
omdbApi.get(params, function(data) {

    console.log(data);
  });


}