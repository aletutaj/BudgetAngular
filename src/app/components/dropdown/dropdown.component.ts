import { Component, Input} from '@angular/core';
import { CommonModule, NgForOf } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

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
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() roomMenuTrigger: MatMenuTrigger | undefined;

  rooms = [
    { value: 'kitchen', viewValue: 'Kuchnia', icon: 'kitchen' },
    { value: 'bathroom', viewValue: 'Łazienka', icon: 'bathtub' },
    { value: 'toilet', viewValue: 'Toaleta', icon: 'wc' },
    { value: 'add-new', viewValue: 'Dodaj Nowe', icon: 'add' },
  ];

  selectRoom(room: string): void {
    if (this.roomMenuTrigger) {
      this.roomMenuTrigger.openMenu();
    }
  }

  openMenu(): void {
    if (this.roomMenuTrigger) {
      this.roomMenuTrigger.openMenu();
    }
  }
}
