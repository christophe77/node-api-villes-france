"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.religion = void 0;
const https_1 = __importDefault(require("https"));
function httpsRequest(args, res) {
    const options = {
        hostname: 'babel.opendatasoft.com',
        port: 443,
        method: 'GET',
        path: '',
    };
    const pathStart = '/api/records/1.0/search/?dataset=osm-fr-lieux-de-culte&lang=fr&facet=religion&facet=denomination&facet=name&facet=id';
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
function byCoordinates(lat, lon, around, res) {
    const args = `&geofilter.distance=${lat}%2C${lon}%2C${around}`;
    httpsRequest(args, res);
}
exports.religion = {
    byCoordinates,
};
