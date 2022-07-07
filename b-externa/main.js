"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var resultado = dotenv_1["default"].config();
if (resultado.error) {
    throw resultado.error;
}
console.log(resultado.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
