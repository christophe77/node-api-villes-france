"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = exports.capitalize = void 0;
function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}
exports.capitalize = capitalize;
function formatNumber(datas) {
    const chars = datas.split('');
    let number = '';
    chars.forEach((char) => {
        if (char >= '0' && char <= '9') {
            number = `${number}${char}`;
        }
    });
    return Number(number);
}
exports.formatNumber = formatNumber;
