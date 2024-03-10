import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../service/item/item.service";
import { RoomService } from "../../service/room/room.service";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { Room } from "../../service/room/room.model";

@Component({
  selector: 'app-budget-summary',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './budget-summary.component.html',
  styleUrl: './budget-summary.component.css',
})
export class BudgetSummaryComponent implements OnInit {
  displayedColumns: string[] = ["Nazwa", "Ilość", "Cena", "Pokój"];
  dataSource: any[] = [];

  constructor(private roomService: RoomService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe((rooms: Room[]) => {
      rooms.forEach(room => {
        const items = this.itemService.getItemsForRoom(room.name);
        items.subscribe(itemList => {
          itemList.forEach(item => {
            this.dataSource.push({...item, room: room.name});
          });
        });
      });
    });
  };
}
