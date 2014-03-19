var movie = {
	title: "Point Break",
	stars: ["Keanu Reeves", "Gary Busey", "and Patrick Swayze"],
	synopsis: "a group of surfers who rob banks"
};



$('body').text('One of my favorite movies is {0}.  It stars {1} and is about {2}.'.supplant([movie.title, movie.stars.join(', '), movie.synopsis]));

var song = {
	title: "Where the Streets Have No Name",
	artist: "U2",
	reason: "has incredible lyrics"
};

console.log("I love {title} by {artist} because it {reason}.".supplant(song));
