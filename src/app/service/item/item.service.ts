import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsSubject = new BehaviorSubject<any[]>([]);
  private items: { [room: string]: any[] } = {};
  items$: Observable<any[]> = this.itemsSubject.asObservable();

  constructor() {
  }

  getItemsForRoom(room: string): Observable<any[]> {
    const itemsForRoom: any[] = [
      {name: 'xx', quantity: 2, price: 10},
    ];
    return new Observable<any[]>(observer => {
      observer.next(itemsForRoom);
      observer.complete();
    });
  }

  addItemToRoom(room: string, newItem: any): Observable<void> {
    return new Observable<void>(observer => {
      if (!this.items[room]) {
        this.items[room] = [];
      }
      this.items[room].push(newItem);
      observer.next();
      observer.complete();
    });
  }
}
