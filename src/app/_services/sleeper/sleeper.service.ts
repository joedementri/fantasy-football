import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { ILeagueStatus } from '../../interfaces';


@Injectable({
  providedIn: 'root'
})
export class SleeperService {

  base_url = 'https://api.sleeper.app/'

  constructor(public ds: DatabaseService) { }

  getLeagueStatus(): Promise<ILeagueStatus> {
    return this.ds.get(this.base_url + 'v1/state/nfl')
  }
}
