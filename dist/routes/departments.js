"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departments_1 = require("../controllers/departments");
const departmentsRouter = (0, express_1.Router)();
departmentsRouter.get('/', (req, res) => {
    res.send('Departments endpoint');
});
departmentsRouter.get('/all', (req, res) => {
    res.send(departments_1.departments.departmentArray);
});
departmentsRouter.get('/name/:name/:limit?', (req, res) => {
    const { name, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = departments_1.departments.byName(name, formattedLimit);
    res.send(results);
});
departmentsRouter.get('/department-code/:departmentCode/:limit?', (req, res) => {
    const { departmentCode, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = departments_1.departments.byDepartmentCode(departmentCode, formattedLimit);
    res.send(results);
});
departmentsRouter.get('/region-code/:regionCode/:limit?', (req, res) => {
    const { regionCode, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = departments_1.departments.byRegionCode(regionCode, formattedLimit);
    res.send(results);
});
exports.default = departmentsRouter;
