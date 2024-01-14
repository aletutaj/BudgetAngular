import { Component } from '@angular/core';
import { IconPickerComponent } from "../icon-picker/icon-picker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RoomService } from "../../service/room/room.service";

@Component({
  selector: 'app-add-new-room',
  standalone: true,
  imports: [
    IconPickerComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-new-room.component.html',
  styleUrl: './add-new-room.component.css'
})
export class AddNewRoomComponent {
  roomIcon = ''; //zmienić na reactive forms
  roomName = '';

  constructor(public roomService: RoomService) {
  }

  handleAddButtonClick(): void {
    this.roomService.allRooms.push({value: this.roomName, icon: this.roomIcon})
    console.log("jest ok", this.roomIcon, this.roomName);
  }
}
