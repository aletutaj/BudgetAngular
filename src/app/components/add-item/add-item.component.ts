import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../service/item/item.service";
import { FormsModule } from "@angular/forms";
import { RoomService } from "../../service/room/room.service";

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit {
  rooms: string[] = [];
  selectedRoom: string | null = null;
  name: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor(private roomService: RoomService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe((rooms) => {
      this.rooms = rooms;
      console.log('Rooms in AddItemComponent:', rooms);
    });
  }

  addItem(): void {

    if (this.selectedRoom && this.name && this.quantity && this.price) {
      const newItem = {
        name: this.name,
        quantity: this.quantity,
        price: this.price
      };

      this.itemService.addItemToRoom(this.selectedRoom, newItem);
      this.clearForm();
    }

  }

  private clearForm(): void {
    this.name = '';
    this.quantity = 0;
    this.price = 0;
  }
}
