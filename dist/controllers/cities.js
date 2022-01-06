"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cities = void 0;
const cities_1 = require("../databases/cities");
const cityArray = cities_1.cityDb.all();
function byName(name, limit) {
    const tempCities = [];
    cityArray.forEach((city) => {
        var _a;
        if ((_a = city.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(name)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byZipCode(zipCode, limit) {
    const tempCities = [];
    cityArray.forEach((city) => {
        var _a;
        if ((_a = city.zip_code) === null || _a === void 0 ? void 0 : _a.includes(zipCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byInseeCode(inseeCode, limit) {
    const tempCities = [];
    cityArray.forEach((city) => {
        var _a;
        if ((_a = city.insee_code) === null || _a === void 0 ? void 0 : _a.includes(inseeCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byDepartmentCode(departmentCode, limit) {
    const tempCities = [];
    cityArray.forEach((city) => {
        var _a;
        if ((_a = city.department_code) === null || _a === void 0 ? void 0 : _a.includes(departmentCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byFirstLetter(letter, limit) {
    return limit ? cities_1.cityDb.byFirstLetter(letter).slice(0, limit) : cities_1.cityDb.byFirstLetter(letter);
}
exports.cities = {
    byName,
    byFirstLetter,
    byDepartmentCode,
    byInseeCode,
    byZipCode,
};
