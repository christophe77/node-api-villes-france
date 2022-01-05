// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GOOGLE_IMG_SCRAP } = require('google-img-scrap');
import { Image, GoogleElement, ScrapperResult } from '../types/images';

async function byName(name: string, limit?: number): Promise<Image[]> {
  const imageArray: Image[] = [];
  const results: ScrapperResult = await GOOGLE_IMG_SCRAP({
    search: name,
    safeSearch: false,
    execute: function (element: GoogleElement) {
      if (!element.url.match('gstatic.com')) return element;
    },
  });
  results &&
    results.result.forEach((result: Image, i: number) => {
      imageArray.push({ id: i, url: result.url });
    });
  return limit ? imageArray.slice(0, limit) : imageArray;
}

export const images = {
  byName,
};
