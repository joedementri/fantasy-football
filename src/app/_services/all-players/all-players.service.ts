import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class AllPlayersService {

  constructor(public ds: DatabaseService) { }

  getCachedPlayersData(): any {
    return JSON.parse(localStorage.getItem('sleeper-players') || '{}');
  }

  setCachedPlayersData(data: any) {
    localStorage.setItem('sleeper-players', JSON.stringify(data));
  }

  public async getPlayersData(): Promise<any[]> {
    let url = ''
    if (environment.production) {
      console.log('prod url used')
      url = 'https://joedementri.github.io/fantasy-football/assets/sleeper.json'
    } else {
      console.log('local url used')
      url =  '../../../assets/sleeper.json'
    }
    return this.ds.get(url);
  }

}
