import { default as departmentDb } from '../databases/departments.json';
import { Department } from '../types/departments';

const departmentArray: Department[] = departmentDb;


function byName(name: string, limit?: number): Department[] {
  const tempDepartments: Department[] = [];
  departmentArray.forEach((department: Department) => {
   
    if (department.name?.toLocaleLowerCase().includes(name)) {
      console.log(department.name)
      tempDepartments.push(department);
    }
  });
  return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byDepartmentCode(departmentCode: string, limit?: number): Department[] {
  const tempDepartments: Department[] = [];
  departmentArray.forEach((department: Department) => {
    if (department.code.includes(departmentCode)) {
      tempDepartments.push(department);
    }
  });
  return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byRegionCode(regionCode: string, limit?: number): Department[] {
  const tempDepartments: Department[] = [];
  departmentArray.forEach((department: Department) => {
    if (department.region_code.includes(regionCode)) {
      tempDepartments.push(department);
    }
  });
  return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
export const departments = {
  byName,
  byDepartmentCode,
  byRegionCode,
  departmentArray,
};
