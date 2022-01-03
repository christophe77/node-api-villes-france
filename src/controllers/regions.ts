import { default as regionDb } from '../databases/regions.json';
import { Region } from '../types/regions';

const regionArray: Region[] = regionDb;
const tempRegions: Region[] = [];

function byName(name: string, limit?: number): Region[] {
  regionArray.forEach((region: Region) => {
    if (region.slug.includes(name)) {
      tempRegions.push(region);
    }
  });
  return limit ? tempRegions.slice(0, limit) : tempRegions;
}

function byCode(code: string, limit?: number): Region[] {
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
