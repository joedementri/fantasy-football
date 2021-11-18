import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenResizeEventService {

  private _resizeEvents = new Subject<string>();
  resizeEvent$ = this._resizeEvents.asObservable();

  constructor() { }

  public next(resizeEvent: string) {
    this._resizeEvents.next(resizeEvent);
  }
}
