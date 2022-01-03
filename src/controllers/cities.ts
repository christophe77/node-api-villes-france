import { default as cityDb } from '../databases/cities.json';
import { City } from '../types/cities';

const cityArray: City[] = cityDb;
const tempCities: City[] = [];

function byName(name: string, limit?: number): City[] {
  cityArray.forEach((city: City) => {
    if (city.name?.includes(name)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
function byZipCode(zipCode: string, limit?: number): City[] {
  cityArray.forEach((city: City) => {
    if (city.zip_code?.includes(zipCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
function byInseeCode(inseeCode: string, limit?: number): City[] {
  cityArray.forEach((city: City) => {
    if (city.insee_code?.includes(inseeCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
function byDepartmentCode(departmentCode: string, limit?: number): City[] {
  cityArray.forEach((city: City) => {
    if (city.department_code?.includes(departmentCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
export const cities = {
  byName,
  byDepartmentCode,
  byInseeCode,
  byZipCode,
  cityArray,
};
