import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SubpageTableComponent } from "../../widgets/subpage-table/subpage-table.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslatePipe } from "../../pipes/translate.pipe";


@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    SubpageTableComponent,
    FormsModule,
    CommonModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {

  @Input('roomId') roomId?: string;

  ngOnInit(): void {
  }
}
