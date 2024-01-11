import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgForOf } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { RoomService } from "../../service/room/room.service";
import { RouterModule } from "@angular/router";

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
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() roomMenuTrigger!: MatMenuTrigger;
  @Output() roomSelected = new EventEmitter<string>();

  buttonLabel = 'Wybierz pokój';

  rooms = [
    {value: 'kitchen', viewValue: 'Kuchnia', icon: 'kitchen'},
    {value: 'bathroom', viewValue: 'Łazienka', icon: 'bathtub'},
    {value: 'toilet', viewValue: 'Toaleta', icon: 'wc'},
    {value: 'add-new', viewValue: 'Dodaj nowe pomieszczenie', icon: 'add'},
  ];

  constructor(private roomService: RoomService) {
  }

  selectRoom(room: string): void {
    this.roomService.selectRoom(room);
  }

  openMenu(): void {
    this.roomMenuTrigger.openMenu();
  }
}
