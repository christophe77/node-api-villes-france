export function capitalize(word: string): string {
  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}

export function formatNumber(datas: string): number {
  const chars = datas.split('');
  let number = '';
  chars.forEach((char) => {
    if (char >= '0' && char <= '9') {
      number = `${number}${char}`;
    }
  });
  return Number(number);
}
