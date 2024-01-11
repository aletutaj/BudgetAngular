import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private selectedRoomSubject = new BehaviorSubject<string | null>(null);
  selectedRoom$: Observable<string | null> = this.selectedRoomSubject.asObservable();

  private roomsSubject = new BehaviorSubject<string[]>([]);
  rooms$: Observable<string[]> = this.roomsSubject.asObservable();

  selectRoom(room: string): void {
    this.selectedRoomSubject.next(room);
  }

  getAllRooms(): Observable<string[]> {
    const rooms = ['kitchen', 'bathroom', 'toilet', 'add-new'];
    this.roomsSubject.next(rooms);
    console.log('Rooms:', rooms);
    return this.rooms$;
  }
}
