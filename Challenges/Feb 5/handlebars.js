$(function(){

// var source = "My favorite activity is {{activity}} and I enjoy it because {{reason}}.";

// var data = {
// 	activity: 'playing videogames',
// 	reason: 'why not'
// };

// var template = Handlebars.compile(source);
// // console.log(template);

// var myStr = "My template has an {{first}} and a {{second}} tag.";

// var info = {
// 	first: 'H1',
// 	second: 'P'
// };

// var template = Handlebars.compile(myStr);

// console.log(template(info));



// var source = $('#world').html();
// var data = {
// 	header: 'Hello World',
// 	content: 'More info!',
// 	shouldPrintMessage: true,
// 	coolLocations: [
// 		'ATL', 'Hawaii', 'Kyoto'
// 	],
// 	cities: {
// 		Montana: 'Helena',
// 		Texas: 'Austin',
// 		Vermont: 'Montpelier'
// 	}
// };

// var worldTemplate = Handlebars.compile(source);

// $('body').prepend(worldTemplate(data));


	// var source = $('#challenge1').html();

	// var data = {
	// 	item: "Orange",
	// 	count: 4
	// 	books: {}
	// };

	// var template = Handlebars.compile(source);

	// $('body').prepend(template(data));

	// var source = $('#challenge2').html();

	// var data = {
	// 	books: ['The Great Gatsby', 'The Hitchikers Guide to the Galaxy']
	// }

	// var template = Handlebars.compile(source);

	// $('body').prepend(template(data));


	var source = $('#challenge3').html();

	var data = {
		friends: {
			Tim: ['Bourbon', ' Bourbon', ' More Bourbon'],
			Joe: ['Cigars', ' N64']
		}
	};

	var template = Handlebars.compile(source);

	$('body').prepend(template(data));



});






















