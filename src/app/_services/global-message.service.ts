import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {

  private _messages = new Subject<string>();
  messages$ = this._messages.asObservable();

  constructor() { }

  public next(newMessage: string) {
    this._messages.next(newMessage);
  }
}
