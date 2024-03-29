import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { AddItemComponent } from "../add-item/add-item.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
    MatMenuModule,
    RouterLink,
    BrowserAnimationsModule,
    MatButtonModule,
    AddItemComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('transformMenu', [
      state('void', style({
        transform: 'scale(0.8)',
      })),
      transition('void => *', [
        animate(300),
      ]),
    ]),
  ],
})
export class NavigationComponent {

  @ViewChild(MatMenuTrigger) roomMenuTrigger!: MatMenuTrigger;
  @ViewChild(DropdownComponent) dropdownComponent!: DropdownComponent;

  selectedRoom: string | null = null;

  constructor(private router: Router) {
  }

  onRoomSelected(room: string): void {
    this.selectedRoom = room;
    this.navigateByRoom(room);
  }

  private navigateByRoom(room: string): void {
    const route = `/room/${room}`;
    this.router.navigate([route]).then(() => {
      console.log('Navigation completed successfully');
    }).catch(error => {
      console.error('Navigation failed:', error);
    });
  }
}
