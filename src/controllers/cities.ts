import { cityDb } from '../databases/cities';
import { City } from '../types/cities';

const cityArray: City[] = cityDb.all();

function byName(name: string, limit?: number): City[] {
  const tempCities: City[] = [];
  cityArray.forEach((city: City) => {
    if (city.name?.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
function byZipCode(zipCode: string, limit?: number): City[] {
  const tempCities: City[] = [];
  cityArray.forEach((city: City) => {
    if (city.zip_code?.includes(zipCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
function byInseeCode(inseeCode: string, limit?: number): City[] {
  const tempCities: City[] = [];
  cityArray.forEach((city: City) => {
    if (city.insee_code?.includes(inseeCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
function byDepartmentCode(departmentCode: string, limit?: number): City[] {
  const tempCities: City[] = [];
  cityArray.forEach((city: City) => {
    if (city.department_code?.includes(departmentCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
function byFirstLetter(letter: string, limit?: number): City[] {
  return limit ? cityDb.byFirstLetter(letter).slice(0, limit) : cityDb.byFirstLetter(letter);
}
export const cities = {
  byName,
  byFirstLetter,
  byDepartmentCode,
  byInseeCode,
  byZipCode,
};
