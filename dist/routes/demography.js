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
const demography_1 = require("../controllers/demography");
const demographyRouter = (0, express_1.Router)();
demographyRouter.get('/', (req, res) => {
    res.send('Demography endpoint');
});
demographyRouter.get('/insee-code/:inseeCode', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { inseeCode } = req.params;
    const results = yield demography_1.demography.byInseeCode(inseeCode);
    res.send(results);
}));
exports.default = demographyRouter;
