import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../../../src/shared/baseurl';

/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GeneralProvider Provider');
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(baseURL + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(baseURL + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(baseURL + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(baseURL + endpoint, body, reqOpts);
  }
  
  get(endpoint: string) {
    return this.http.get(baseURL + endpoint);
  }

}


