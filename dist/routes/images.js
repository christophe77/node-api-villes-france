"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const images_1 = require("../controllers/images");
const imagesRouter = (0, express_1.Router)();
imagesRouter.get('/name/:name/:limit?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, limit } = req.params;
    const formattedLimit = limit ? Number(limit) : undefined;
    const results = yield images_1.images.byName(name, formattedLimit);
    res.send(results);
}));
exports.default = imagesRouter;
