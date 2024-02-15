import { Component, OnInit } from '@angular/core';
import { IconPickerComponent } from "../icon-picker/icon-picker.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
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
export class AddNewRoomComponent implements OnInit {
  roomForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.roomForm = this.formBuilder.group({
      roomIcon: ['', Validators.required],
      roomName: ['', Validators.required],
    });
  }

  handleAddButtonClick(): void {
    if (this.roomForm.valid) {
      const roomIcon = this.roomForm.get('roomIcon')?.value;
      const roomName = this.roomForm.get('roomName')?.value;
      this.roomService.allRooms.push({value: roomName, icon: roomIcon});
      console.log('Dodano nowe pomieszczenie:', roomIcon, roomName);
    }
  }
}
