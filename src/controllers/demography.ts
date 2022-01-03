import { Demography, DemographyData } from '../types/demography';
import jsdom from 'jsdom';

async function byInseeCode(inseeCode: string): Promise<Demography> {
  const { JSDOM } = jsdom;

  const demographyDatas: DemographyData[] = [];

  await JSDOM.fromURL(`https://www.insee.fr/fr/statistiques/6005800?geo=COM-${inseeCode}`).then((dom) => {
    const table = dom.window.document.getElementById('produit-tableau-POPLEG_T1');
    const tableHeads = table?.querySelectorAll('table th');
    const tableDatas = table?.querySelectorAll('table td');

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
    const formatNumber = (datas: string): number => {
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
}
export const demography = {
  byInseeCode,
};
