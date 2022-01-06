"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cities_1 = require("../controllers/cities");
const citiesRouter = (0, express_1.Router)();
citiesRouter.get('/name/:name/:limit?', (req, res) => {
    const { name, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = cities_1.cities.byName(name, formattedLimit);
    res.send(results);
});
citiesRouter.get('/first-letter/:firstLetter/:limit?', (req, res) => {
    const { firstLetter, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = cities_1.cities.byFirstLetter(firstLetter, formattedLimit);
    res.send(results);
});
citiesRouter.get('/department-code/:departmentCode/:limit?', (req, res) => {
    const { departmentCode, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = cities_1.cities.byDepartmentCode(departmentCode, formattedLimit);
    res.send(results);
});
citiesRouter.get('/zip-code/:zipCode/:limit?', (req, res) => {
    const { zipCode, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = cities_1.cities.byZipCode(zipCode, formattedLimit);
    res.send(results);
});
citiesRouter.get('/insee-code/:inseeCode/:limit?', (req, res) => {
    const { inseeCode, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = cities_1.cities.byInseeCode(inseeCode, formattedLimit);
    res.send(results);
});
exports.default = citiesRouter;
