import { Response } from 'express';
import https from 'https';
import { capitalize } from '../utils/utils';

function httpsRequest(args: string, res: Response) {
  const options = {
    hostname: 'public.opendatasoft.com',
    port: 443,
    method: 'GET',
    path: '',
  };
  const pathStart =
    '/api/records/1.0/search/?dataset=donnees-du-repertoire-national-des-elus&q=&rows=10&facet=date_de_naissance&facet=libelle_de_la_fonction&facet=filename&facet=code_sexe&facet=reg_name&facet=dep_name&facet=epci_name&facet=com_name';
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
function byRegion(region: string, res: Response) {
  const args = `&refine.reg_name=${capitalize(region)}`;
  httpsRequest(args, res);
}
function byCity(city: string, res: Response) {
  const args = `&refine.com_name=${capitalize(city)}`;
  httpsRequest(args, res);
}
function byDepartment(department: string, res: Response) {
  const args = `&refine.dep_name=${capitalize(department)}`;
  httpsRequest(args, res);
}

export const politic = {
  byRegion,
  byCity,
  byDepartment,
};
