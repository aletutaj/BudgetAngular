import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Room } from "./room.model";
import { getUiD } from "../../utils/store.utils";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private selectedRoomSubject = new BehaviorSubject<string | null>(null);
  selectedRoom$: Observable<string | null> = this.selectedRoomSubject.asObservable();

  private roomsSubject = new BehaviorSubject<Room[]>([]);
  rooms$: Observable<Room[]> = this.roomsSubject.asObservable();

  constructor() {
    this.updateAllRooms();
  }

  updateAllRooms(): void {
    const localStorageRooms: Room[] = JSON.parse(localStorage.getItem("rooms") || '[]');
    const rooms: Room[] = [
      {name: 'kitchen', icon: 'kitchen'},
      {name: 'bathroom', icon: 'bathtub'},
      {name: 'toilet', icon: 'wc'},
    ];
    const roomNamesMap: { [name: string]: boolean } = {};
    const allRooms: Room[] = localStorageRooms.map(room => {
      roomNamesMap[room.name] = true;
      return room;
    });
    rooms.forEach(room => {
      if (!roomNamesMap[room.name]) {
        allRooms.push(room);
      }
    });
    this.roomsSubject.next(allRooms);
  }

  selectRoom(room: string): void {
    this.selectedRoomSubject.next(room);
  }

  getAllRooms(): Observable<Room[]> {
    return this.rooms$;
  }

  addRoom(room: Room): void {
    const rooms: Room[] = JSON.parse(localStorage.getItem("rooms") || '[]');
    const allIds = rooms.map(room => room.id) as number[];
    const id = getUiD(allIds);
    rooms.push({...room, id});
    localStorage.setItem("rooms", JSON.stringify(rooms));
    console.log("zapisane nowe pokoje", localStorage.getItem("rooms"))
    this.updateAllRooms();
  }
};
