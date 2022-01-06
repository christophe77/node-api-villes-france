"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityDb = void 0;
const a_json_1 = __importDefault(require("./json/a.json"));
const b_json_1 = __importDefault(require("./json/b.json"));
const c_json_1 = __importDefault(require("./json/c.json"));
const d_json_1 = __importDefault(require("./json/d.json"));
const e_json_1 = __importDefault(require("./json/e.json"));
const f_json_1 = __importDefault(require("./json/f.json"));
const g_json_1 = __importDefault(require("./json/g.json"));
const h_json_1 = __importDefault(require("./json/h.json"));
const i_json_1 = __importDefault(require("./json/i.json"));
const j_json_1 = __importDefault(require("./json/j.json"));
const k_json_1 = __importDefault(require("./json/k.json"));
const l_json_1 = __importDefault(require("./json/l.json"));
const m_json_1 = __importDefault(require("./json/m.json"));
const n_json_1 = __importDefault(require("./json/n.json"));
const o_json_1 = __importDefault(require("./json/o.json"));
const p_json_1 = __importDefault(require("./json/p.json"));
const q_json_1 = __importDefault(require("./json/q.json"));
const r_json_1 = __importDefault(require("./json/r.json"));
const s_json_1 = __importDefault(require("./json/s.json"));
const t_json_1 = __importDefault(require("./json/t.json"));
const u_json_1 = __importDefault(require("./json/u.json"));
const v_json_1 = __importDefault(require("./json/v.json"));
const w_json_1 = __importDefault(require("./json/w.json"));
const x_json_1 = __importDefault(require("./json/x.json"));
const y_json_1 = __importDefault(require("./json/y.json"));
const z_json_1 = __importDefault(require("./json/z.json"));
const all = () => {
    const allArray = [];
    a_json_1.default.forEach((city) => allArray.push(city));
    b_json_1.default.forEach((city) => allArray.push(city));
    c_json_1.default.forEach((city) => allArray.push(city));
    d_json_1.default.forEach((city) => allArray.push(city));
    e_json_1.default.forEach((city) => allArray.push(city));
    f_json_1.default.forEach((city) => allArray.push(city));
    g_json_1.default.forEach((city) => allArray.push(city));
    h_json_1.default.forEach((city) => allArray.push(city));
    i_json_1.default.forEach((city) => allArray.push(city));
    j_json_1.default.forEach((city) => allArray.push(city));
    k_json_1.default.forEach((city) => allArray.push(city));
    l_json_1.default.forEach((city) => allArray.push(city));
    m_json_1.default.forEach((city) => allArray.push(city));
    n_json_1.default.forEach((city) => allArray.push(city));
    o_json_1.default.forEach((city) => allArray.push(city));
    p_json_1.default.forEach((city) => allArray.push(city));
    q_json_1.default.forEach((city) => allArray.push(city));
    r_json_1.default.forEach((city) => allArray.push(city));
    s_json_1.default.forEach((city) => allArray.push(city));
    t_json_1.default.forEach((city) => allArray.push(city));
    u_json_1.default.forEach((city) => allArray.push(city));
    v_json_1.default.forEach((city) => allArray.push(city));
    w_json_1.default.forEach((city) => allArray.push(city));
    x_json_1.default.forEach((city) => allArray.push(city));
    y_json_1.default.forEach((city) => allArray.push(city));
    z_json_1.default.forEach((city) => allArray.push(city));
    return allArray;
};
const defaultCity = {
    id: 0,
    department_code: '',
    insee_code: null,
    zip_code: null,
    name: '',
    slug: '',
    gps_lat: 0,
    gps_lng: 0,
};
const allCities = [a_json_1.default, b_json_1.default, c_json_1.default, d_json_1.default, e_json_1.default, f_json_1.default, g_json_1.default, h_json_1.default, i_json_1.default, j_json_1.default, k_json_1.default, l_json_1.default, m_json_1.default, n_json_1.default, o_json_1.default, p_json_1.default, q_json_1.default, r_json_1.default, s_json_1.default, t_json_1.default, u_json_1.default, v_json_1.default, w_json_1.default, x_json_1.default, y_json_1.default, z_json_1.default];
const byFirstLetter = (letter) => {
    const letterInTheCity = allCities.find((cityArray) => {
        if (cityArray[0].slug.charAt(0) === letter) {
            return cityArray;
        }
    });
    return letterInTheCity ? letterInTheCity : [defaultCity];
};
exports.cityDb = {
    all,
    byFirstLetter,
};
