'use strict';

// A Renderer instance takes a renderer function
// as an argument. The render() method returns the
// result of calling the function.
class Renderer {
	constructor(renderer) {
		this.renderer = renderer;
	}

	render() {
		return this.renderer ? this.renderer(this) : '';
	}
}

// A feature defines an output pattern. It accepts
// header, content, and footer arguments. These are
// Renderer instances.
class Feature {
	constructor(header, content, footer) {
		this.header = header;
		this.content = content;
		this.footer = footer;
	}

	// Renders the sections of the view. Each section
	// either has a renderer, or it doesn't. Either way,
	// content is returned.
	render() {
		var header = this.header ?
				`${this.header.render()}\n` : '',
			content = this.content ?
				`${this.content.render()}\n` : '',
			footer = this.footer ?
				this.footer.render() : '';

		return `${header}${content}${footer}`;
	}
}

// Constructs a new feature with renderers for three sections.
var feature = new Feature(
	new Renderer(() => { return 'Header'; }),
	new Renderer(() => { return 'Content'; }),
	new Renderer(() => { return 'Footer'; })
);

console.log(feature.render());

// Remove the header section completely, replace the footer
// section with a new renderer, and check the result.
delete feature.header; 
feature.footer = new Renderer(() => { return 'Test Footer'; });

console.log(feature.render());
