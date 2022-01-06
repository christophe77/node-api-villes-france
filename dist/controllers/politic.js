"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.politic = void 0;
const https_1 = __importDefault(require("https"));
const utils_1 = require("../utils");
function httpsRequest(args, res) {
    const options = {
        hostname: 'public.opendatasoft.com',
        port: 443,
        method: 'GET',
        path: '',
    };
    const pathStart = '/api/records/1.0/search/?dataset=donnees-du-repertoire-national-des-elus&q=&rows=10&facet=date_de_naissance&facet=libelle_de_la_fonction&facet=filename&facet=code_sexe&facet=reg_name&facet=dep_name&facet=epci_name&facet=com_name';
    options.path = `${pathStart}${args}`;
    https_1.default
        .request(options, function (httpRes) {
        let body = '';
        httpRes.on('data', (d) => {
            body = body + d;
        });
        httpRes.on('end', function () {
            var _a;
            res.send(((_a = JSON.parse(body)) === null || _a === void 0 ? void 0 : _a.records) || [{}]);
        });
    })
        .end();
}
function byRegion(region, res) {
    const args = `&refine.reg_name=${(0, utils_1.capitalize)(region)}`;
    httpsRequest(args, res);
}
function byCity(city, res) {
    const args = `&refine.com_name=${(0, utils_1.capitalize)(city)}`;
    httpsRequest(args, res);
}
function byDepartment(department, res) {
    const args = `&refine.dep_name=${(0, utils_1.capitalize)(department)}`;
    httpsRequest(args, res);
}
exports.politic = {
    byRegion,
    byCity,
    byDepartment,
};
