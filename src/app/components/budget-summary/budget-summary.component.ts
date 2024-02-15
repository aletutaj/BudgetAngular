import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../service/item/item.service";
import { RoomService } from "../../service/room/room.service";
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: 'app-budget-summary',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './budget-summary.component.html',
  styleUrl: './budget-summary.component.css'
})
export class BudgetSummaryComponent implements OnInit {
  displayedColumns: string[] = ["Nazwa", "Ilość", "Cena", "Pokój"];
  dataSource: any[] = [];

  constructor(private itemService: ItemService, private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.loadBudgetSummary();
  }

  loadBudgetSummary(): void {
    this.roomService.getAllRooms().subscribe(rooms => {
      rooms.forEach(room => {
        this.itemService.getItemsForRoom(room).subscribe(items => {
          items.forEach(item => {
            this.dataSource.push({...item, room: room});
            console.log('Items:', this.dataSource)
          });
        });
      });
    });
  };
};
