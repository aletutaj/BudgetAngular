import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Item, ItemsByRoom } from "./item.model";
import { getUiD } from "../../utils/store.utils";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() {
    this.loadItemsFromLocalStorage();
  }

  private parseItemsByRoom(items: Item[]): ItemsByRoom {
    const itemsByRoom: ItemsByRoom = {};
    items.forEach(item => {
      const roomName = item.roomName;
      if (roomName) {
        if (itemsByRoom[roomName]) {
          itemsByRoom[roomName].push(item);
        } else {
          itemsByRoom[roomName] = [item];
        }
      }
    });
    return itemsByRoom;
  }

  loadItemsFromLocalStorage(): void {
    const items: Item[] = JSON.parse(localStorage.getItem("items") || '[]');
    const itemsByRoom: ItemsByRoom = this.parseItemsByRoom(items);
  }

  getItemsForRoom(roomName: string): Observable<Item[]> {
    const localStorageItems: Item[] = JSON.parse(localStorage.getItem("items") || '[]');
    return of(localStorageItems.filter((item: Item) => item.roomName === roomName))
  }

  addItemToRoom(item: Item): void {
    const items: any[] = JSON.parse(localStorage.getItem("items") || '[]');
    const allIds = items.map(item => item.id);
    const id = getUiD(allIds);
    items.push({...item, id});
    localStorage.setItem("items", JSON.stringify(items));
    console.log("Dodaje ajtem ", {...item, id})
  }
}
