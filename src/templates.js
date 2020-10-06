// import { row, col, css } from './util';

// function title(block) {
//     const { tag = 'h1', styles } = block.options
//     return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
// }

// function text(block) {
//     return row(col(`<p>${block.value}</p>`), css(block.options.styles))
// }

// function columns(block) {
//     let html = block.value.map(col).join('');
//     return row(html, css(block.options.styles))
// }

// function image(block) {
//     const { imageStyles: is, alt = '', styles } = block.options
//     return row(col(`<img alt='${alt}' style="${css(is)}" src="${block.value}">`), css(block.options.styles))
// }

// export const templates = {
//     title,
//     text,
//     columns,
//     image
// }