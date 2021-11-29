import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class AllPlayersService {

  base_url = 'https://api.sleeper.app/'

  constructor(public ds: DatabaseService) { }

  getCachedPlayersData(): any {
    return JSON.parse(localStorage.getItem('sleeper-players') || '{}');
  }

  setCachedPlayersData(data: any) {
    localStorage.setItem('sleeper-players', JSON.stringify(data));
  }

  public async getPlayersData(): Promise<any[]> {
    let urlToJson = '';
    if (environment.production) {
      urlToJson = 'https://joedementri.github.io/fantasy-football/assets/sleeper.json'
    } else {
      urlToJson = '../../../assets/sleeper.json'
    }
    return this.ds.get(urlToJson);
  }

}
