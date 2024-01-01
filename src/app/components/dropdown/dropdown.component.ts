// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-dropdown',
//   templateUrl: './dropdown.component.html',
//   styleUrls: ['./dropdown.component.css']
// })
// export class DropdownComponent {
//   selectedRoom: string = 'salon';
// }

import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [NgbDropdownConfig]
})
export class DropdownComponent {
  selectedRoom: string = 'Wybierz pomieszczenie';

  constructor(config: NgbDropdownConfig) {
    config.autoClose = 'outside';
  }

  selectRoom(room: string) {
    this.selectedRoom = room;
  }

  getRoomIcon(room: string): string {
    switch (room) {
      case 'saloon':
        return 'fa-tv';
      case 'bathroom':
        return 'fa-bath';
      case 'kitchen':
        return 'fa-utensils';
      case 'bedroom':
        return 'fa-bed';
      case 'lazienka':
        return 'fa-shower';
      default:
        return '';
    }
  }
}
