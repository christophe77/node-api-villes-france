export type City = {
  id: number;
  department_code: string;
  insee_code: string | null;
  zip_code: string | null;
  name: string;
  slug: string;
  gps_lat: number;
  gps_lng: number;
};
export type AllCities = [City[]]
