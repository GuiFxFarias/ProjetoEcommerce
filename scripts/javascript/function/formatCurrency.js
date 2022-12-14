"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = void 0;
function formatCurrency(value) {
    return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
}
exports.formatCurrency = formatCurrency;
