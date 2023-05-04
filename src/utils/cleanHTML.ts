/**
 * Apply a list of regular expressions to a string
 * @param text
 * @param regexes
 * @returns
 */
function regex_apply(text: string, regexes: [RegExp, string][]): string {
	for (const [regex, replacement] of regexes) {
		text = text.replaceAll(regex, replacement);
	}
	return text;
}

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

	text = regex_apply(text, regexes);
	text = regex_apply(text, [[/\n?(.+?)\n\s*\n/g, '<p class="my-2">$1</p>\n\n']]);
	return text;
}

class CleanHTML {
	graphicfilename: string;
	links: boolean;
	paragraphs: boolean;
	paragraph_images_index: number;
	link_style: string;

	constructor(
		graphicfilename?: string,
		links?: boolean,
		paragraphs?: boolean,
		link_style?: string,
		paragraph_images_index?: number
	) {
		this.graphicfilename = graphicfilename || '';
		this.links = links ?? true;
		this.paragraphs = paragraphs ?? true;
		this.paragraph_images_index = paragraph_images_index ?? 2;
		this.link_style = link_style || '';
	}

	getText(text: string) {
		if (text.trim() === '') return '';
		// get rid of whitespace in lines
		text = text
			.split('\n')
			.map((line) => line.trim())
			.join('\n');

		// Now, we preprocess the text and get rid of any iofilm legacy code.
		text = text.replaceAll('|', '\n\n').replaceAll('\r', '').trim();
		text = regex_apply(text, [[/\n\n+/g, '\n\n']]);
		text = text.replaceAll('&', '&amp;');

		// if there are links or tags, we need to do some more work

		if (this.links) {
			const styling = this.link_style !== '' ? `style='${this.link_style}'` : '';
			text.replaceAll('<a ', `<a ${styling} `);
		}
		return text;
	}
}
