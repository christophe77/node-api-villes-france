import { default as regionDb } from '../databases/regions.json';
import { Region } from '../types/regions';

const regionArray: Region[] = regionDb;

function byName(name: string, limit?: number): Region[] {
  const tempRegions: Region[] = [];
  regionArray.forEach((region: Region) => {
    if (region.name.toLocaleLowerCase().includes(name)) {
      tempRegions.push(region);
    }
  });
  return limit ? tempRegions.slice(0, limit) : tempRegions;
}

function byCode(code: string, limit?: number): Region[] {
  const tempRegions: Region[] = [];
  regionArray.forEach((region: Region) => {
    if (region.code.includes(code)) {
      tempRegions.push(region);
    }
  });
  return limit ? tempRegions.slice(0, limit) : tempRegions;
}

export const regions = {
  byName,
  byCode,
  regionArray
};
