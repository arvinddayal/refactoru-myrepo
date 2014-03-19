var Quote = function (text, author) {
	this.text = text || 'No Quote Text';
	this.author = author || 'Anonymous';
	this.countWords = function() {
		var x = this.text.split(' ');
		return x.length;
	};
	this.createDom = function() {
		var newDomEl = $('<div class="quote">{0}-{1}</div>'.supplant([this.text, this.author]));
		return newDomEl;
	};
};

var allQuotes = [];
allQuotes.push(makeQuote);

var makeQuote = new Quote('Hello', 'Arvind');
makeQuote.countWords();
makeQuote.createDom();


