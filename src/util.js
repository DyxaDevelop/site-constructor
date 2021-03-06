import { type } from "os"

export function row(content, styles = '') {
    return `<div class"row" style="${styles}">${content}</div>`
}
export function col(content) {
    return `<div class"col-sm">${content}</div>`
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles;
    const toString = key => `${key} : ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
    return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input placeholder="value" name="value" class="form-control form-control-sm">
        </div>
        <div class="form-group">
            <input placeholder="styles" name="styles" class="form-control form-control-sm">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr>
    `
}