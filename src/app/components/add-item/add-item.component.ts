import { Component, HostListener, OnInit } from '@angular/core';
import { ItemService } from "../../service/item/item.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RoomService } from "../../service/room/room.service";
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "../../pipes/translate.pipe";
import { Room } from "../../service/room/room.model";
import { Item } from "../../service/item/item.model";

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
  host: {class: 'm-3'},
})
export class AddItemComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoomName: string = '';
  name: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor(private roomService: RoomService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    console.log("On init")
    this.roomService.getAllRooms().subscribe((rooms) => {
      this.rooms = rooms;
      this.selectedRoomName = rooms[0].name;
    });
  }

  addItem(): void {
    if (this.selectedRoomName && this.name && this.quantity && this.price) {
      const newItem: Item = {
        name: this.name,
        quantity: this.quantity,
        price: this.price,
        roomName: this.selectedRoomName
      };
      this.itemService.addItemToRoom(newItem);
      console.log('Dodano nowy item:', newItem);
      this.clearForm();
    }
  }

  private clearForm(): void {
    this.name = '';
    this.quantity = 0;
    this.price = 0;
  }

  @HostListener('contextmenu') debug() {
    console.log('DEBUG', this);

  }
}
