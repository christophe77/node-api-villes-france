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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.demography = void 0;
const jsdom_1 = __importDefault(require("jsdom"));
function byInseeCode(inseeCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const { JSDOM } = jsdom_1.default;
        const demographyDatas = [];
        yield JSDOM.fromURL(`https://www.insee.fr/fr/statistiques/6005800?geo=COM-${inseeCode}`).then((dom) => {
            const table = dom.window.document.getElementById('produit-tableau-POPLEG_T1');
            const tableHeads = table === null || table === void 0 ? void 0 : table.querySelectorAll('table th');
            const tableDatas = table === null || table === void 0 ? void 0 : table.querySelectorAll('table td');
            if (tableHeads) {
                tableHeads.forEach((th, i) => {
                    if (i <= 3 && i !== 0) {
                        demographyDatas.push({
                            annee: Number(th.textContent),
                            population_municipale: 0,
                            population_comptee_a_part: 0,
                            population_totale: 0,
                        });
                    }
                });
            }
            const formatNumber = (datas) => {
                const chars = datas.split('');
                let number = '';
                chars.forEach((char) => {
                    if (char >= '0' && char <= '9') {
                        number = `${number}${char}`;
                    }
                });
                return Number(number);
            };
            if (tableDatas) {
                demographyDatas[0].population_municipale = formatNumber(tableDatas[0].textContent || '0');
                demographyDatas[1].population_municipale = formatNumber(tableDatas[1].textContent || '0');
                demographyDatas[2].population_municipale = formatNumber(tableDatas[2].textContent || '0');
                demographyDatas[0].population_comptee_a_part = formatNumber(tableDatas[3].textContent || '0');
                demographyDatas[1].population_comptee_a_part = formatNumber(tableDatas[4].textContent || '0');
                demographyDatas[2].population_comptee_a_part = formatNumber(tableDatas[5].textContent || '0');
                demographyDatas[0].population_totale = formatNumber(tableDatas[6].textContent || '0');
                demographyDatas[1].population_totale = formatNumber(tableDatas[7].textContent || '0');
                demographyDatas[2].population_totale = formatNumber(tableDatas[8].textContent || '0');
            }
        });
        return { inseeCode, datas: demographyDatas };
    });
}
exports.demography = {
    byInseeCode,
};
