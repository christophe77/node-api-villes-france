"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const politic_1 = require("../controllers/politic");
const politicRouter = (0, express_1.Router)();
politicRouter.get('/region/:regionName', (req, res) => {
    const { regionName } = req.params;
    politic_1.politic.byRegion(regionName, res);
});
politicRouter.get('/city/:cityName', (req, res) => {
    const { cityName } = req.params;
    politic_1.politic.byCity(cityName, res);
});
politicRouter.get('/department/:departmentName', (req, res) => {
    const { departmentName } = req.params;
    politic_1.politic.byDepartment(departmentName, res);
});
exports.default = politicRouter;
