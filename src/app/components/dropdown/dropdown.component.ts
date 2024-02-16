import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgForOf } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { RoomService } from "../../service/room/room.service";
import { RouterModule } from "@angular/router";
import { Room } from "../../service/room/room.model";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    NgForOf,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() roomMenuTrigger!: MatMenuTrigger;
  @Output() roomSelected = new EventEmitter<string>();

  rooms: Room[] = [];
  buttonLabel = 'Wybierz pokój';

  constructor(public roomService: RoomService) {
  }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(rooms => {
      this.rooms = rooms
    });
  }

  selectRoom(room: string): void {
    this.roomService.selectRoom(room);
  }

  openMenu(): void {
    this.roomMenuTrigger.openMenu();
  }
}
