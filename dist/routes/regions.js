"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regions_1 = require("../controllers/regions");
const regionsRouter = (0, express_1.Router)();
regionsRouter.get('/', (req, res) => {
    res.send('Regions endpoint');
});
regionsRouter.get('/all', (req, res) => {
    res.send(regions_1.regions.regionArray);
});
regionsRouter.get('/name/:name/:limit?', (req, res) => {
    const { name, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = regions_1.regions.byName(name, formattedLimit);
    res.send(results);
});
regionsRouter.get('/region-code/:regionCode/:limit?', (req, res) => {
    const { regionCode, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = regions_1.regions.byCode(regionCode, formattedLimit);
    res.send(results);
});
exports.default = regionsRouter;
