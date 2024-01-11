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
    // return this.http.get<any[]>(`/api/items?room=${room}`);
    return new Observable<any[]>(observer => {
      observer.next(itemsForRoom);
      observer.complete();
    });
  }

  addItem(item: any): void {
    const currentItems = this.itemsSubject.value;
    currentItems.push(item);
    this.itemsSubject.next(currentItems);
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
