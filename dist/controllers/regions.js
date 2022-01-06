"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.regions = void 0;
const regions_json_1 = __importDefault(require("../databases/regions.json"));
const regionArray = regions_json_1.default;
function byName(name, limit) {
    const tempRegions = [];
    regionArray.forEach((region) => {
        if (region.name.toLocaleLowerCase().includes(name)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
function byCode(code, limit) {
    const tempRegions = [];
    regionArray.forEach((region) => {
        if (region.code.includes(code)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
exports.regions = {
    byName,
    byCode,
    regionArray
};
