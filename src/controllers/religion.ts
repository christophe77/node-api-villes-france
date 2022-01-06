import { Response } from 'express';
import https from 'https';

function httpsRequest(args: string, res: Response) {
  const options = {
    hostname: 'babel.opendatasoft.com',
    port: 443,
    method: 'GET',
    path: '',
  };
  const pathStart =
    '/api/records/1.0/search/?dataset=osm-fr-lieux-de-culte&lang=fr&facet=religion&facet=denomination&facet=name&facet=id';
  options.path = `${pathStart}${args}`;

  https
    .request(options, function (httpRes) {
      let body = '';
      httpRes.on('data', (d) => {
        body = body + d;
      });
      httpRes.on('end', function () {
        res.send(JSON.parse(body)?.records || [{}]);
      });
    })
    .end();
}

function byCoordinates(lat: string, lon: string, around: number, res: Response) {
  const args = `&geofilter.distance=${lat}%2C${lon}%2C${around}`;
  httpsRequest(args, res);
}

export const religion = {
  byCoordinates,
};
