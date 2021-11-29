import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public http: HttpClient) { }

  public get(path: string, options?: any): Promise<any> {
    return this.http.get(path, options).toPromise();
  }

  public post(path: string, object: any, headers?: any): Promise<any> {
    const body = JSON.stringify(object);
    const options = {
      headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
    };
    return this.http.post(path, body, options).toPromise();
  }

  public update(path: string, object: any, headers?: any): Promise<any> {
    return this.http
      .put(path, JSON.stringify(object), {
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
      })
      .toPromise();
  }

  public delete(deletePath: string, headers?: any): Promise<any> {
    return this.http
      .delete(deletePath, {
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
      })
      .toPromise();
  }
}
