import { Injectable } from '@angular/core';
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
    return this.ds.get('../../../assets/sleeper.json');
  }

}
