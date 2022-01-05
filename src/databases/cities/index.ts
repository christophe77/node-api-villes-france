import { City } from '../../types/cities';

import a from './json/a.json';
import b from './json/b.json';
import c from './json/c.json';
import d from './json/d.json';
import e from './json/e.json';
import f from './json/f.json';
import g from './json/g.json';
import h from './json/h.json';
import i from './json/i.json';
import j from './json/j.json';
import k from './json/k.json';
import l from './json/l.json';
import m from './json/m.json';
import n from './json/n.json';
import o from './json/o.json';
import p from './json/p.json';
import q from './json/q.json';
import r from './json/r.json';
import s from './json/s.json';
import t from './json/t.json';
import u from './json/u.json';
import v from './json/v.json';
import w from './json/w.json';
import x from './json/x.json';
import y from './json/y.json';
import z from './json/z.json';

const all = () => {
  const allArray: City[] = [];
  a.forEach((city) => allArray.push(city));
  b.forEach((city) => allArray.push(city));
  c.forEach((city) => allArray.push(city));
  d.forEach((city) => allArray.push(city));
  e.forEach((city) => allArray.push(city));
  f.forEach((city) => allArray.push(city));
  g.forEach((city) => allArray.push(city));
  h.forEach((city) => allArray.push(city));
  i.forEach((city) => allArray.push(city));
  j.forEach((city) => allArray.push(city));
  k.forEach((city) => allArray.push(city));
  l.forEach((city) => allArray.push(city));
  m.forEach((city) => allArray.push(city));
  n.forEach((city) => allArray.push(city));
  o.forEach((city) => allArray.push(city));
  p.forEach((city) => allArray.push(city));
  q.forEach((city) => allArray.push(city));
  r.forEach((city) => allArray.push(city));
  s.forEach((city) => allArray.push(city));
  t.forEach((city) => allArray.push(city));
  u.forEach((city) => allArray.push(city));
  v.forEach((city) => allArray.push(city));
  w.forEach((city) => allArray.push(city));
  x.forEach((city) => allArray.push(city));
  y.forEach((city) => allArray.push(city));
  z.forEach((city) => allArray.push(city));
  return allArray;
};
const defaultCity: City = {
  id: 0,
  department_code: '',
  insee_code: null,
  zip_code: null,
  name: '',
  slug: '',
  gps_lat: 0,
  gps_lng: 0,
};
const allCities = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

const byFirstLetter = (letter: string): City[] => {
  const letterInTheCity = allCities.find((cityArray) => {
    if (cityArray[0].slug.charAt(0) === letter) {
      return cityArray;
    }
  });
  return letterInTheCity ? letterInTheCity : [defaultCity];
};
export const cityDb = {
  all,
  byFirstLetter,
};
