"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const religion_1 = require("../controllers/religion");
const religionRouter = (0, express_1.Router)();
religionRouter.get('coordinates/:lat/:lon/:around', (req, res) => {
    const { lat, lon, around } = req.params;
    religion_1.religion.byCoordinates(lat, lon, Number(around), res);
});
exports.default = religionRouter;
