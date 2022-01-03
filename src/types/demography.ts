export type DemographyData = {
  annee: number;
  population_municipale: number;
  population_comptee_a_part: number;
  population_totale: number;
};
export type Demography = {
  inseeCode: string;
  datas: DemographyData[];
};
