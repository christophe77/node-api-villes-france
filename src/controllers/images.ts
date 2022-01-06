import { GOOGLE_IMG_SCRAP, Results, FinalResult } from 'google-img-scrap';

async function byName(name: string, limit?: number): Promise<FinalResult[]> {
  const imageArray: FinalResult[] = [];
  const results: Results = await GOOGLE_IMG_SCRAP({
    search: name,
    safeSearch: false,
    execute: function (element: FinalResult) {
      if (!element.url.match('gstatic.com')) return element;
    },
  });
  results &&
    results.result.forEach((result: FinalResult) => {
      imageArray.push(result);
    });
  return limit ? imageArray.slice(0, limit) : imageArray;
}

export const images = {
  byName,
};
