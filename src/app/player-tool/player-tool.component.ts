import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { IgxDropDownComponent, IgxInputGroupComponent, ISelectionEventArgs } from 'igniteui-angular';
import { AllPlayersService } from '../_services/all-players/all-players.service';

export interface IPlayer {
  name: string;
  id: number;
}

@Component({
  selector: 'app-player-tool',
  templateUrl: './player-tool.component.html',
  styleUrls: ['./player-tool.component.scss']
})
export class PlayerToolComponent implements OnInit {

  public players: any[];
  public playerSelected: any;

  selectedId = ''

  constructor(public aps: AllPlayersService) {
    this.players = [];
  }

  ngOnInit(): void {
    this.aps.getPlayersData().then(res => {
      // Go through each key of the indexed object:
      for (const key in res)
      {
        // Get the indexed item by the key:
        const indexedItem = res[key];
        // Now we have the item.
        if (indexedItem.position == 'DEF') {
          indexedItem.full_name = indexedItem.first_name + ' ' + indexedItem.last_name
        }

        if (indexedItem.active) {
          this.players.push(indexedItem);
        }
      }
    });
  }

  find_player(): void {
    console.log(this.selectedId);
  }

  onSelection(event: ISelectionEventArgs): void {
    this.selectedId = event.newSelection.id;
  }

}

@Pipe({ name: 'startsWith' })
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
      return collection.filter((item) => item.full_name.toLowerCase().includes(term.toString().toLowerCase()));
    }
}
