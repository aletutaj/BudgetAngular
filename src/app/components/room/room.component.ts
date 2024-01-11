import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SubpageTableComponent } from "../../widgets/subpage-table/subpage-table.component";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    SubpageTableComponent,
    NgIf

  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
  room: string | null = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.room = params['id'];
    });
  }
}
