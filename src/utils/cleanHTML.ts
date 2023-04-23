/**
 * Apply a list of regular expressions to a string
 * @param text
 * @param regexes
 * @returns
 */
function regex_apply(text: string, regexes: [RegExp, string][]): string {
	// and return the result
	// the first element of each tuple is the regex
	// the second element is the replacement
	// (the replacement can contain backreferences)
	for (const [regex, replacement] of regexes) {
		text = text.replaceAll(regex, replacement);
	}
	return text;
}

export function cleanHTML(text: string) {
	// run a series of regular expressions
	// to clean up the HTML
	// this is a bit of a hack, but it works
	// and it's not like we're doing anything
	// particularly sensitive here
	// (we're not, are we?)

	// Now, we preprocess the text and get rid of any iofilm legacy code.
	text = text.replaceAll('|', '\n\n').replaceAll('\r', '').trim();
	text = regex_apply(text, [[/\n\n+/g, '\n\n']]);
	text = text.replaceAll('&', '&amp;');
	const regexes: [RegExp, string][] = [
		[/\[film id=([0-9]+?)\](.+?)\[\/film\]/g, '<a href="/reviews.php?film_id=$1">$2</a>'],
		[/\[film\](.+?)\[\/film\]/g, '<a href="/search/title/$1">$1</a>'],
		[/\[title\](.+?)\[\/title\]/g, '<a href="/search/title/$1">$1</a>'],
		[/\[director\](.+?)\[\/director\]/g, '<a href="/search/director/$1">$1</a>'],
		[/\[actor\](.+?)\[\/actor\]/g, '<a href="/search/actor/$1">$1</a>'],
		[
			/\[imageleft[ \t\r\n]+filename="(.+?)"[ \t\r\n]+caption="(.+?)"\]/g,
			'<figure style="float:left;width:225px;"><img src="$1" style="padding-left:5px;padding-right:5px;" alt="$2"><figcaption style="text-align:center">$2</figcaption></figure>'
		],
		[
			/\[imageleftsmall[ \t\r\n]+filename="(.+?)"[ \t\r\n]+caption="(.+?)"\]/g,
			'<figure style="float:left;width:225px;"><img src="$1" style="padding-left:5px;padding-right:5px;" alt="$2"><figcaption style="text-align:center">$2</figcaption></figure>'
		],
		[
			/\[imageright[ \t\r\n]+filename="(.+?)"[ \t\r\n]+caption="(.+?)"\]/g,
			'<figure style="float:right;width:225px;"><img src="$1" style="padding-left:5px;padding-right:5px;" alt="$2"><figcaption style="text-align:center">$2</figcaption></figure>'
		]
	];

	text = regex_apply(text, regexes);
	return text;
}
