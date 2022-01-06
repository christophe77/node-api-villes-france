"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.departments = void 0;
const departments_json_1 = __importDefault(require("../databases/departments.json"));
const departmentArray = departments_json_1.default;
function byName(name, limit) {
    const tempDepartments = [];
    departmentArray.forEach((department) => {
        var _a;
        if ((_a = department.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(name)) {
            console.log(department.name);
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byDepartmentCode(departmentCode, limit) {
    const tempDepartments = [];
    departmentArray.forEach((department) => {
        if (department.code.includes(departmentCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byRegionCode(regionCode, limit) {
    const tempDepartments = [];
    departmentArray.forEach((department) => {
        if (department.region_code.includes(regionCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
exports.departments = {
    byName,
    byDepartmentCode,
    byRegionCode,
    departmentArray,
};
