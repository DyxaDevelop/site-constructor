const { clearScreenDown } = require("readline");
import { row, col, css } from '../util';

export class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('This method must be implement')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const { tag = 'h1', styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { imageStyles: is, alt = '', styles } = this.options
        return row(col(`<img alt='${alt}' style="${css(is)}" src="${this.value}">`), css(this.options.styles))
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        let html = this.value.map(col).join('');
        return row(html, css(this.options.styles))
    }
}